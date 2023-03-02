import React from "react";
import "./currentEmployees.css";

const CurrentEmployees = () => {
  return (
    <>
      <section className="enteteTable">
        <h2 className="current">Current Employees</h2>
        <table id="employee-table" className="display"></table>
      </section>
    </>
  );
};

export default CurrentEmployees;
