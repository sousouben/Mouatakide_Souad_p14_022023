import React from "react";
import "./form.css";
import { useState } from "react";
import { states } from "../../data/states";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch } from "react-redux";
import { unvalidForm, validForm } from "../../redux/actions";

const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

let tabStatesFilter = [];

const getStatesNames = (states) => {
  states.map((state) => tabStatesFilter.push(state.name));
  return tabStatesFilter;
};

const statesNames = getStatesNames(states);

function formatDate(date) {
  const inputDate = new Date(date);

  // Vérifier que la date en entrée est valide
  if (isNaN(inputDate.getTime())) {
    throw new Error("Invalid date");
  }

  // Formater la date au format "MM/DD/YYYY"
  const isoDate = inputDate.toISOString().split("T")[0];
  const [year, month, day] = isoDate.split(".");
  const formattedDate = [day, month, year].join("/");

  return formattedDate;
}

let employee = [];

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  const dispatch = useDispatch();

  employee = {
    first: firstName.toLocaleLowerCase(),
    last: lastName.toLocaleLowerCase(),
    birth: formatDate(birthDate),
    start: formatDate(startDate),
    street: street.toLocaleLowerCase(),
    city: city.toLocaleLowerCase(),
    state: state.label,
    code: zipCode,
    department: department.label,
  };
  console.log(employee);

  const checkForm = () => {
    if (firstName === "" || lastName === "") {
      dispatch(unvalidForm());
      console.log("unvalidForm");
    } else {
      dispatch(validForm());
      console.log("validForm");
    }
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    checkForm();
  };

  return (
    <>
      <form id="formulaire">
        <section className="employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first"
            name="first"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last"
            name="last"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            name="birth"
            selected={birthDate}
            onChange={setBirthDate}
            value={birthDate}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            name="start"
            selected={startDate}
            onChange={setStartDate}
            value={startDate}
          />
        </section>

        <section className="adresse">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="state">State</label>
          <Dropdown
            placeholder="Select an option"
            name="stateList"
            options={statesNames}
            onChange={setState}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            name="code"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </section>

        <section className="department">
          <Dropdown
            placeholder="Departments"
            name="departments"
            options={departments}
            onChange={setDepartment}
          />
        </section>
      </form>

      <div className="button-save">
        <button onClick={saveEmployee}> Save </button>
        <div id="confirmation" className="modal"></div>
      </div>
    </>
  );
}

export default Form;
