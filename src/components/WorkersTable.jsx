import React from 'react';

const WorkersTable = ({ workers }) => {
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <td>Fullname</td>
          <td>Salary</td>
        </tr>
      </thead>
    );
  };
  const renderTableBody = () => {
    return (
      <tbody>
        {workers.map((e, i) => (
          <tr key={i}>
            <td>{e.fullName}</td>
            <td>{e.salary}</td>
          </tr>
        ))}
      </tbody>
    );
  };
  const renderTable = () => {
    return (
      <table>
        {renderTableHead()}
        {renderTableBody()}
      </table>
    );
  };
  return renderTable();
};
export default WorkersTable;
