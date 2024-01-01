const requestManager = (url, options = {}, attempts = 3) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(resolve)
      .catch((error) => {
        const remainingAttempts = attempts - 1;
        if (remainingAttempts === 0) {
          return reject(error);
        }
        setTimeout(() => {
          requestManager(url, options, remainingAttempts)
            .then(resolve)
            .catch(reject);
        }, 3000);
      });
  });
};

requestManager("https://foo.com")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));
