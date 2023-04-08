import React from "react";
import Form from "../../components/form/Form";
import "./createEmployees.css";

/**
 * Composant pour la création d'un employé
 * @function
 * @returns {JSX.Element} - Le composant de création d'un employé
 */
const CreateEmployees = () => {
  return (
    <main>
      <h2 className="create">Create Employee</h2>
      <Form />
    </main>
  );
};

export default CreateEmployees;
