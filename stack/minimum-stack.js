class MinStack {
  constructor() {
    this._stack = [];
    this._minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this._stack.push(val);
    this._minStack.push(
      Math.min(
        val,
        this._minStack.length === 0
          ? val
          : this._minStack[this._minStack.length - 1],
      ),
    );
  }

  /**
   * @return {void}
   */
  pop() {
    this._stack.pop();
    this._minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this._stack[this._stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this._minStack[this._minStack.length - 1];
  }
}
