class FunctionalMiniLibrary {
  result: unknown[];

  isArray(element: unknown): boolean {
    return element instanceof Array;
  }

  isBoolean(element: unknown): boolean {
    return element instanceof Boolean || typeof element === "boolean";
  }

  isDate(element: unknown): boolean {
    return element instanceof Date;
  }

  isNumber(element: unknown): boolean {
    return element instanceof Number || typeof element === "number";
  }

  isString(element: unknown): boolean {
    return element instanceof String || typeof element === "string";
  }

  isFunction(element: unknown): boolean {
    return element instanceof Function;
  }

  isUndefined(element: unknown): boolean {
    return element === undefined;
  }

  isNull(element: unknown): boolean {
    return element === null;
  }

  first(arr: unknown[]): unknown {
    return arr[0];
  }

  last(arr: unknown[]): unknown {
    return arr[arr.length - 1];
  }

  skip(par_a: any, par_b?: number): any {
    if (arguments.length === 1) {
      this.result = this.result.slice(par_a);
      return this;
    } else {
      return par_a.slice(par_b);
    }
  }

  take(par_a: any, par_b?: number): any {
    if (arguments.length === 1) {
      this.result = this.result.slice(0, par_a);
      return this;
    } else {
      return par_a.slice(0, par_b);
    }
  }

  asChain(arr: unknown[]): FunctionalMiniLibrary {
    this.result = arr;
    return this;
  }

  value(): unknown[] {
    return this.result;
  }
}

export { FunctionalMiniLibrary }