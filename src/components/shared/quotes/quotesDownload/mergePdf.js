import * as xlsx from 'xlsx';
import { convertToHtml } from 'mammoth';
import { PDFDocument } from 'pdf-lib';
const { base64toFile, escapeWinAnsi } = require('src/utils/fileEncoder');

const imagesPerPage = 4;
async function appendFileToPDF(pdfDoc, page, f, fileIndex) {
  const fileData = await base64toFile(f);
  // console.log(fileData);
  const extension = f.name.split('.').pop();

  switch (extension) {
    case 'png':
    case 'jpg':
    case 'jpeg': {
      // 4 each pg
      // if (fileIndex % 4 == 0) {
      //   page = pdfDoc.addPage();
      // }
      // await addImageToPDF({ pdfDoc, fileData, page, fileIndex, imagesPerPage });

      await addImageToPDF(pdfDoc, fileData);
      break;
    }
    case 'xls':
    case 'xlsx':
      await addExcelToPDF(pdfDoc, fileData);
      break;
    case 'csv':
      await addCSVToPDF(pdfDoc, fileData);
      break;
    case 'doc':
    case 'docx':
      await addDocToPDF(pdfDoc, fileData);
      break;
    case 'pdf':
      await addPDFToPDF(pdfDoc, fileData);
      break;
    default:
      console.log('mergePDF:appendFileToPDF: file not rendered: ', f.name);
  }
}

export async function mergeQuotesAndFilesPDF(quotes) {
  const pdfDoc = await PDFDocument.create();

  for (const quote of quotes) {
    const { id, contractor, status, quote_type, quote_amount, files } = quote;

    // Add quote details to the PDF
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    let yPos = height - 50;

    page.drawText(`Quote ID: ${id}`, { x: 50, y: yPos, size: 16 });
    yPos -= 30;
    page.drawText(`Contractor: ${contractor}`, { x: 50, y: yPos, size: 14 });
    yPos -= 20;
    page.drawText(`Status: ${status}`, { x: 50, y: yPos, size: 14 });
    yPos -= 20;
    page.drawText(`Quote Type: ${quote_type}`, { x: 50, y: yPos, size: 14 });
    yPos -= 20;
    page.drawText(`Quote Amount: $${quote_amount}`, { x: 50, y: yPos, size: 14 });
    yPos -= 40;
    const sorted = files?.sort((a, b) => {
      const aExt = a.name.split('.').pop();
      const bExt = b.name.split('.').pop();
      return extensionsOrder.indexOf(aExt) - extensionsOrder.indexOf(bExt);
    });
    // Merge files for the current quote
    if (sorted && sorted?.length > 0) {
      for (const f in sorted) {
        await appendFileToPDF(pdfDoc, page, sorted[f], f);
      }
    }

    // Add a new page for the next quote
    if (quotes.indexOf(quote) < quotes.length - 1) {
      pdfDoc.addPage();
    }
  }

  const pdfBytes = await pdfDoc.save();
  console.log('Merged PDF created successfully!');
  return pdfBytes;
}

const extensionsOrder = ['png', 'jpg', 'jpeg', 'xls', 'xlsx', 'csv', 'doc', 'docx', 'pdf'];
async function addImageToPDF(pdfDoc, file) {
  let image;
  if (file.ext == 'png') {
    image = await pdfDoc.embedPng(file.buff);
  } else {
    image = await pdfDoc.embedJpg(file.buff);
  }
  const page = pdfDoc.addPage();

  // Calculate scaling factor to fit the image within the page dimensions
  const xScale = page.getWidth() / image.width;
  const yScale = page.getHeight() / image.height;

  // Use the minimum scaling factor to avoid upscaling
  const scale = Math.min(xScale, yScale);

  const imageWidth = image.width * scale;
  const imageHeight = image.height * scale;

  // Center the image on the page
  const x = (page.getWidth() - imageWidth) / 2;
  const y = (page.getHeight() - imageHeight) / 2;

  page.drawImage(image, {
    x: x,
    y: y,
    width: imageWidth,
    height: imageHeight,
  });
}

// /// 4 per page,wip
// async function addImageToPDF({ pdfDoc, fileData, page, fileIndex, imagesPerPage }) {
//   return ;
//   const { width, height } = pdfDoc.getPage(0).getSize();
//   let image;
//   if (fileData.ext == 'png') {
//     image = await pdfDoc.embedPng(fileData.buff);
//   } else {
//     image = await pdfDoc.embedJpg(fileData.buff);
//   }

//   const imageAspectRatio = image.width / image.height;

//   const pageWidth = width / 2;
//   const pageHeight = height / 2;

//   const imageWidth = pageWidth / 2;
//   const imageHeight = imageWidth / imageAspectRatio;
//   const positions = [
//     [0, 0],
//     [0, 1],
//     [1, 0],
//     [1, 1],
//   ];
//   const imgI = fileIndex % imagesPerPage;
//   const pos = positions[imgI];
//   console.log({ pos, imgI });
//   page.drawImage(image, {
//     x: pos[0] * imageHeight * 0.6,
//     v: pos[1] * imageHeight * 0.6,
//     width: imageWidth,
//     height: imageHeight,
//   });
// }

async function addExcelToPDF(pdfDoc, file) {
  const workbook = xlsx.read(file.buff, { type: 'buffer' });
  let pageNum = 0;
  const sheets = Object.values(workbook.Sheets);
  for (const sheetI in sheets) {
    const sheet = sheets[sheetI];
    const sheetName = workbook.SheetNames[sheetI];
    const sheetData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    pageNum += 1;
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    page.drawText(`${file.name} / ${sheetName}   -   ${pageNum}`, {
      x: 20,
      y: height - 20,
      size: 12,
    });
    const tableWidth = width - 40;
    let rowLen = 0;
    for (let i = 0; i < sheetData.length; i++) {
      if (sheetData[i].length > rowLen) {
        rowLen = sheetData[i].length;
      }
    }
    const cellWidth = tableWidth / rowLen;
    let yPos = height - 40;
    let rowsPerPage = Math.floor((height - 40) / 20);
    const size = 12;
    let currRow = 0;
    for (const row of sheetData) {
      let xPos = 20;
      if (currRow >= rowsPerPage) {
        pageNum += 1;
        currRow = 0;
        yPos = height - 40;
        page.addPage();
        page.drawText(`${file.name} - ${pageNum}`, {
          x: 20,
          y: height - 20,
          size: 12,
        });
      }
      for (const cell of row) {
        const maxChars = Math.floor(cellWidth / (size * 0.6));
        page.drawText(escapeWinAnsi(cell).slice(0, maxChars), {
          x: xPos,
          y: yPos,
          size,
          width: cellWidth,
          lineGap: 0,
          overflow: 'hidden',
          maxWidth: cellWidth,
          wordBreaks: [' '],
        });

        xPos += cellWidth;
      }
      yPos -= 20;
      currRow++;
    }
  }
}
async function addCSVToPDF(pdfDoc, file) {
  const csvData = await readCSV(file.blob);
  let page = pdfDoc.addPage();
  let pageNum = 1;
  const { width, height } = page.getSize();
  page.drawText(`${file.name}   -   ${pageNum}`, {
    x: 20,
    y: height - 20,
    size: 12,
  });
  const tableWidth = width - 40;
  let rowLen = Object.keys(csvData[0]).length;

  const cellWidth = tableWidth / rowLen;
  let yPos = height - 40;
  let rowsPerPage = Math.floor((height - 40) / 20);
  const size = 12;
  let currRow = 0;
  for (const row of csvData) {
    let xPos = 20;
    if (currRow >= rowsPerPage) {
      pageNum += 1;
      currRow = 0;
      yPos = height - 40;
      page = pdfDoc.addPage();
      page.drawText(`${file.name} - ${pageNum}`, {
        x: 20,
        y: height - 20,
        size: 12,
      });
    }
    for (const cell of row) {
      const maxChars = Math.floor(cellWidth / (size * 0.6));
      page.drawText(escapeWinAnsi(cell).slice(0, maxChars), {
        x: xPos,
        y: yPos,
        size,
        width: cellWidth,
        lineGap: 0,
        overflow: 'hidden',
        maxWidth: cellWidth,
        wordBreaks: [' '],
      });

      xPos += cellWidth;
    }
    yPos -= 20;
    currRow++;
  }
}

import papa from 'papaparse';
async function readCSV(blob) {
  return new Promise((resolve, reject) => {
    papa.parse(blob, {
      complete: function (results) {
        resolve(results.data);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
import * as html2pdf from 'html2pdf.js';
async function addDocToPDF(pdfDoc, file) {
  const htmlString = await convertToHtml({
    arrayBuffer: file.buff,
    convertParagraphStyles: false,
  }).catch(console.log);
  const pdfBuff = await html2pdf()
    .from(htmlString.value)
    .set({
      filename: file.name.split('.').slice(0, -1).join('.') + '.pdf',
      jsPDF: {
        orientation: 'portrait',
      },
      margin: 8,
      image: {
        type: 'png',
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
      },
    })
    .outputPdf('arraybuffer');
  const sourcePdf = await PDFDocument.load(pdfBuff);
  const copiedPages = await pdfDoc.copyPages(sourcePdf, sourcePdf.getPageIndices());
  copiedPages.forEach((page) => pdfDoc.addPage(page));
}

async function addPDFToPDF(pdfDoc, file) {
  const sourcePdf = await PDFDocument.load(file.buff);
  const copiedPages = await pdfDoc.copyPages(sourcePdf, sourcePdf.getPageIndices());
  copiedPages.forEach((page) => pdfDoc.addPage(page));
}
