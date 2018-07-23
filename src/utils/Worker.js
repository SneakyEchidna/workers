export var Worker = (function() {
  function Worker(firstName, lastName, salary) {
    this._salary = salary;
    this._firstName = firstName;
    this._lastName = lastName;
  }
  Worker.prototype = {
    get salary() {
      return this._salary;
    },
    set salary(amount) {
      this._salary = amount;
    },
    set fullName(fullname) {
      var arr = fullname.split(' ');
      this._firstName = arr[0];
      this._lastName = arr[1];
    },
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    },
  };
  return Worker;
})();

export function changeSalary(workersArray, delta) {
  workersArray.forEach(worker => {
    worker.salary = +worker.salary + +delta;
  });
}
