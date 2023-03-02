import React from "react";
import "./form.css";

const Form = () => {
  const saveEmployee = () => {
    // logique pour enregistrer un employé
  };
  return (
    <>
      <form id="formulaire">
        <section className="employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first" name="first" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last" name="last" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input type="text" id="date" name="date" />

          <label htmlFor="start-date">Start Date</label>
          <input type="text" id="start-date" name="start-date" />
        </section>

        <section className="adresse">
          <label htmlFor="street">Street</label>
          <input id="street" type="text" name="street" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" name="city" />
          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" name="code" />
        </section>
        <section className="Department">
          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </section>
      </form>

      <div className="button-save">
        <button onClick={saveEmployee}>Save</button>
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
      </div>
    </>
  );
};

export default Form;
