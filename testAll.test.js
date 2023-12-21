const {
  sum,
  invalidTest,
  fetchData,
  fetchPromiseResolve,
  fetchPromiseReject,
} = require("./testFunctions");

// test('description', testFunction)

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  // toBe is a matcher
  // it is used with primitive values
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
  // toEqual is used to check the value of an object
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
  // toBeFalsy is used to check if a value is falsy(0, null, undefined, false, '')
});

test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
  // toBeTruthy is used to check if a value is truthy(anything that is not falsy)
});

test("throws on invalid input", () => {
  expect(() => invalidTest("hi")).toThrow();
  // toThrow is used to check if a function throws an error
});

//    Testing Asynchronous Code

//  Callbacks
test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
      // done is used to signal jest that the test is complete
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
  // fetchData is an asynchronous function
});

// Promises Resolve
test("the data resolved is peanut butter", () => {
  return expect(fetchPromiseResolve()).resolves.toBe("peanut butter");
});

// Promises Reject
test("the test fails with an error(promise reject)", () => {
  return expect(fetchPromiseReject()).rejects.toThrow("error");
});

// Async/Await
test("the data is peanut butter(async/await)", async () => {
  const data = await fetchPromiseResolve();
  expect(data).toBe("peanut butter");
});

// Mock Functions
test("mock implementation of a basic function", () => {
  const mock = jest.fn((x) => 10 + x);
  // jest.fn() is used to create a mock function
  // a mock function is a function that replaces the original function
  // it is used simulate the original function
  expect(mock(1)).toBe(11);
  expect(mock).toHaveBeenCalledWith(1);
  // toHaveBeenCalledWith is used to check if the mock function was called with the specified arguments
});

// Spy
test("spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };
  const spy = jest.spyOn(video, "play");
  // jest.spyOn() is used to spy on a method of an object
  // it tracks the calls on video.play() in this case
  // spyOn replaces the original method with a mock method
  video.play();
  expect(spy).toHaveBeenCalled();
  // toHaveBeenCalled is used to check if the method was called
  spy.mockRestore();
  // mockRestore is used to restore the original method from the mock method
});
