export const delay = (response) => {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300)
  });
  return promise.then(() => (response))
}

export const fileToBase64 = (file, callback) => {
  let reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = function () {
    callback(reader.result)
  }
}