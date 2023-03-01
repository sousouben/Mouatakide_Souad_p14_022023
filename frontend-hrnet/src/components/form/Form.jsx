import React from "react";
import "./form.css";

const Form = () => {
  return (
    <>
      <form id="formulaire">
        <section className="employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first" name="first" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last" name="last" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input type="date" id="date" name="date" />

          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" name="start-date" />
        </section>

        <section className="adresse">
          <label htmlFor="street">Street</label>
          <input id="street" type="text" name="street" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" name="city" />
          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="text" name="code" />
        </section>
      </form>

      <div className="button-save">
        <button> Save </button>
      </div>
    </>
  );
};

export default Form;
