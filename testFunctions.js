function sum(a, b) {
  return a + b;
}

function invalidTest(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid input");
  }
}

//    Asynchronous Functions

// Callbacks
function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

// Promises
function fetchPromiseResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
}

// Promises Reject
function fetchPromiseReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("peanut butter");
      reject(new Error("error"));
    }, 1000);
  });
}

module.exports = {
  sum,
  invalidTest,
  fetchData,
  fetchPromiseResolve,
  fetchPromiseReject,
};
