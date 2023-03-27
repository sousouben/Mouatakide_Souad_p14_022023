import React from "react";
import DataList from "../../components/dataList/DataList";
import "./currentEmployees.css";

const CurrentEmployees = () => {
  return (
    <>
      <section className="enteteTable">
        <h2 className="current">Current Employees</h2>
        <DataList />
      </section>
    </>
  );
};

export default CurrentEmployees;
