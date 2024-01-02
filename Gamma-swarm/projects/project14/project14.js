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

//Design shallow comparison function

function typeOf(input) {
  const rawObject = Object.prototype.toString.call(input).toLowerCase();
  console.log(rawObject);
  const typeRegex = /\[object (.*)]/g;
  const type = typeRegex.exec(rawObject)[1];
  return type;
}

const shallowComparison = (source, target) => {
  if (typeOf(source) !== typeOf(target)) {
    return false;
  }

  if (typeOf(source) === "array") {
    if (source.length !== target.length) {
      return false;
    }
    return source.every((el, index) => el === target[index]);
  }

  if (typeOf(source) === "object") {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false;
    }

    return Object.keys(source).every((el) => source[el] === target[el]);
  }

  if (typeOf(source) === "date") {
    return source.getTime() === target.getTime();
  }

  // The below is for primitives
  return source === target;
};

console.log(shallowComparison([1], [1]));
