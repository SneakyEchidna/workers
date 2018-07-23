import React from 'react';

const Salary = ({ changeSalary }) => {
  const salaryDelta = React.createRef();
  return (
    <div>
      <input type="number" name="salaryDelta" ref={salaryDelta} />
      <button onClick={() => changeSalary(salaryDelta.current.value)}>
        Change salary
      </button>
    </div>
  );
};
export default Salary;
