import { downloadBase64File } from 'src/utils/fileEncoder';

export const handleQuoteDownload = (quote) => {
  const { files } = quote;
  files.map((fDef) => downloadBase64File(fDef.data, fDef.name));
};
