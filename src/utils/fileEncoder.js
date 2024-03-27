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
