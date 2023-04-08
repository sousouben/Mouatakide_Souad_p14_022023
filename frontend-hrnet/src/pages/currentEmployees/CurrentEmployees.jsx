import React from "react";
import DataList from "../../components/dataList/DataList";
import "./currentEmployees.css";

/**
 * Composant pour afficher la liste des employés actuels
 * @function
 * @returns {JSX.Element} - Le composant pour afficher la liste des employés actuels
 */
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
