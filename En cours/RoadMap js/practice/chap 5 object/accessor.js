const serialnum = {
    // This data property holds the next serial number.
    // The _ in the property name hints that it is for internal use only.
    _n: 0,
    // Return the current value and increment it
    get next() { return this._n++; },
    // Set a new value of n, but only if it is larger than current
    set next(n) {
    if (n > this._n) this._n = n;
    else throw new Error("serial number can only be set to a larger value");
    }
   };
   