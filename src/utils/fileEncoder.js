export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
export const downloadBase64File = (data, fileName) => {
  const downloadLink = document.createElement('a');
  downloadLink.href = data;
  downloadLink.download = fileName;
  downloadLink.click();
};

export function escapeWinAnsi(text) {
  return text.replace(/[\u0080-\uffff]/g, (char) => '');
}

export const base64toFile = async ({ data, name }) => {
  const ext = name.split('.').pop();
  const contentType = data.split(';')[0].split(':')[1];
  const response = await fetch(data);
  const buff = await response.arrayBuffer();
  const blob = new Blob([buff], { type: contentType });

  return { data, name, blob, buff, file: new File([buff], name, { type: contentType }), ext };

  // const data = b64F.split(';');
  // const contentType = data[0];
  // const b64Data = data[1].split('base64,')[1];
  // console.log({ contentType, b64Data });
  // const byteCharacters = atob(b64Data);
  // const byteArrays = [];

  // for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //   const slice = byteCharacters.slice(offset, offset + sliceSize);

  //   const byteNumbers = new Array(slice.length);
  //   for (let i = 0; i < slice.length; i++) {
  //     byteNumbers[i] = slice.charCodeAt(i);
  //   }

  //   const byteArray = new Uint8Array(byteNumbers);
  //   byteArrays.push(byteArray);
  // }

  // return blob;
};
