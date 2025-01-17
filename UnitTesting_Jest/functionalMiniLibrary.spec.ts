import { FunctionalMiniLibrary } from "./functionalMiniLibrary";

const _ = new FunctionalMiniLibrary();
const values = [
  {"literal []": [1, true, "some"]}, 
  {"new Array()": new Array()}, 
  {"true": true},
  {"false": false},
  {"new Boolean()": new Boolean()},
  {"2011-11-05": "2011-11-05"},
  {"new Date()": new Date()},
  {"0": 0},
  {"55": 55},
  {"new Number()": new Number(6)},
  {"NaN": NaN},
  {"some string": "some string"},
  {"empty string": ""},
  {"new String()": new String()},
  {"function() {}": function() {}},
  {"new Function()": new Function()},
  {"literal {}": {}},
  {"new Object()": new Object()},
  {"undefined": undefined},
  {"null": null},
];
let array: unknown[];
let resultArray: unknown[];
let numberOfElements: number;
let resultObj: {
  result: unknown[],
};

describe("isArray method: ", () => {
  const validValues = [values[0], values[1]];
  const invalidValues = values.filter(valueObj => !validValues.includes(valueObj));

  validValues.forEach(valueObj => {
    test(`should return true result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isArray(Object.values(valueObj)[0])).toBeTruthy();
      expect(_.isArray(Object.values(valueObj)[0])).toBe(true);
    });
  });

  invalidValues.forEach(valueObj => {
    test(`should return false result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isArray(Object.values(valueObj)[0])).toBeFalsy();
      expect(_.isArray(Object.values(valueObj)[0])).toBe(false);
    });
  });
});

describe("isBoolean method: ", () => {
  const validValues = [values[2], values[3], values[4]];
  const invalidValues = values.filter(valueObj => !validValues.includes(valueObj));

  validValues.forEach(valueObj => {
    test(`should return true result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isBoolean(Object.values(valueObj)[0])).toBeTruthy();
      expect(_.isBoolean(Object.values(valueObj)[0])).toBe(true);
    });
  });

  invalidValues.forEach(valueObj => {
    test(`should return false result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isBoolean(Object.values(valueObj)[0])).toBeFalsy();
      expect(_.isBoolean(Object.values(valueObj)[0])).toBe(false);
    });
  });
});

describe("isDate method: ", () => {
  const validValue = values[6];
  const invalidValues = values.filter(valueObj => valueObj !== validValue);

  test(`should return true result for /${Object.keys(validValue)[0]}/ value`, () => {
    expect(_.isDate(Object.values(validValue)[0])).toBeTruthy();
    expect(_.isDate(Object.values(validValue)[0])).toBe(true);
  });

  invalidValues.forEach(valueObj => {
    test(`should return false result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isDate(Object.values(valueObj)[0])).toBeFalsy();
      expect(_.isDate(Object.values(valueObj)[0])).toBe(false);
    });
  });
});

describe("isNumber method: ", () => {
  const validValues = [values[7], values[8], values[9], values[10]];
  const invalidValues = values.filter(valueObj => !validValues.includes(valueObj));

  validValues.forEach(valueObj => {
    test(`should return true result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isNumber(Object.values(valueObj)[0])).toBeTruthy();
      expect(_.isNumber(Object.values(valueObj)[0])).toBe(true);
    });
  });

  invalidValues.forEach(valueObj => {
    test(`should return false result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isNumber(Object.values(valueObj)[0])).toBeFalsy();
      expect(_.isNumber(Object.values(valueObj)[0])).toBe(false);
    });
  });
});

describe("isString method: ", () => {
  const validValues = [values[5], values[11], values[12], values[13]];
  const invalidValues = values.filter(valueObj => !validValues.includes(valueObj));

  validValues.forEach(valueObj => {
    test(`should return true result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isString(Object.values(valueObj)[0])).toBeTruthy();
      expect(_.isString(Object.values(valueObj)[0])).toBe(true);
    });
  });

  invalidValues.forEach(valueObj => {
    test(`should return false result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isString(Object.values(valueObj)[0])).toBeFalsy();
      expect(_.isString(Object.values(valueObj)[0])).toBe(false);
    });
  });
});

describe("isFunction method: ", () => {
  const validValues = [values[14], values[15]];
  const invalidValues = values.filter(valueObj => !validValues.includes(valueObj));

  validValues.forEach(valueObj => {
    test(`should return true result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isFunction(Object.values(valueObj)[0])).toBeTruthy();
      expect(_.isFunction(Object.values(valueObj)[0])).toBe(true);
    });
  });

  invalidValues.forEach(valueObj => {
    test(`should return false result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isFunction(Object.values(valueObj)[0])).toBeFalsy();
      expect(_.isFunction(Object.values(valueObj)[0])).toBe(false);
    });
  });
});

describe("isUndefined method: ", () => {
  const validValue = values[18];
  const invalidValues = values.filter(valueObj => valueObj !== validValue);

  test(`should return true result for /${Object.keys(validValue)[0]}/ value`, () => {
      expect(_.isUndefined(Object.values(validValue)[0])).toBeTruthy();
      expect(_.isUndefined(Object.values(validValue)[0])).toBe(true);
  });

  invalidValues.forEach(valueObj => {
    test(`should return false result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isUndefined(Object.values(valueObj)[0])).toBeFalsy();
      expect(_.isUndefined(Object.values(valueObj)[0])).toBe(false);
    });
  });
});

describe("isNull method: ", () => {
  const validValue = values[19];
  const invalidValues = values.filter(valueObj => valueObj !== validValue);

  test(`should return true result for /${Object.keys(validValue)[0]}/ value`, () => {
      expect(_.isNull(Object.values(validValue)[0])).toBeTruthy();
      expect(_.isNull(Object.values(validValue)[0])).toBe(true);
  });

  invalidValues.forEach(valueObj => {
    test(`should return false result for /${Object.keys(valueObj)[0]}/ value`, () => {
      expect(_.isNull(Object.values(valueObj)[0])).toBeFalsy();
      expect(_.isNull(Object.values(valueObj)[0])).toBe(false);
    });
  });
});

describe(".first(): ", () => {
  test("should return first element in array", () => {
    array = ["first element", "second element", "third element"];

    expect(_.first(array)).toEqual("first element");
    expect(_.first(array)).toBe(array[0]);
  });
});

describe(".last(): ", () => {
  test("should return last element in array", () => {
    array = ["first element", "second element", "third element"];

    expect(_.last(array)).toEqual("third element");
    expect(_.last(array)).toBe(array[array.length - 1]);
  });
});

describe(".asChain(): ", () => {
  test("should return object with array from parameter inside result property", () => {
    array = ["first element", "second element", "third element"];

    const resultObj = _.asChain(array);
    expect(resultObj).toHaveProperty("result");
    expect(resultObj.result).toEqual(array);
  });
});

describe(".skip() method: ", () => {
  beforeEach(() => {
    array = ["first", "second", "third", "4th", "5th", "6th"];
    resultArray = ["4th", "5th", "6th"];
    numberOfElements = 3;
    resultObj = {
      result: resultArray,
    };
  });

  test("should skip n elements from array, that takes as parameters and return rest of array", () => {
    expect(Array.isArray(_.skip(array, numberOfElements))).toBeTruthy();
    expect(_.skip(array, numberOfElements)).toEqual(resultArray);
    expect(_.skip(array, numberOfElements)).toHaveLength(array.length - numberOfElements);
  });

  test("should skip n elements from array in result property of object and return this object", () => {
    expect(_.asChain(array).skip(numberOfElements)).toBeInstanceOf(Object);
    expect(_.asChain(array).skip(numberOfElements)).toEqual(resultObj);
    expect(_.asChain(array).skip(numberOfElements).result).toHaveLength(array.length - numberOfElements);
  });
});

describe(".take() method: ", () => {
  beforeEach(() => {
    array = ["first", "second", "third", "4th", "5th", "6th"];
    resultArray = ["first", "second", "third", "4th"];
    numberOfElements = 4;
    resultObj = {
      result: resultArray,
    };
  });

  test("should take n elements from beginning of array, which takes as parameters and return this elements as array", () => {
    expect(Array.isArray(_.take(array, numberOfElements))).toBeTruthy();
    expect(_.take(array, numberOfElements)).toEqual(resultArray);
    expect(_.take(array, numberOfElements)).toHaveLength(numberOfElements);
  });

  test("should take n elements from array in result property of object and return this object with new array in result property", () => {
    expect(_.asChain(array).take(numberOfElements)).toBeInstanceOf(Object);
    expect(_.asChain(array).take(numberOfElements)).toEqual(resultObj);
    expect(_.asChain(array).take(numberOfElements).result).toHaveLength(numberOfElements);
  });
});

describe(".value() method: ", () => {
  test("should return array from result property of object", () => {
    array = ["any", 2, false];

    expect(Array.isArray(_.asChain(array).value())).toBeTruthy();
    expect(_.asChain(array).value()).toEqual(array);
    expect(_.asChain(array).value()).toHaveLength(array.length);
  })
})