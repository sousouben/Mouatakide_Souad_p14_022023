import React from "react";
import "./form.css";
import { useState } from "react";
import { states } from "../../data/states";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch } from "react-redux";
import {
  unvalidForm,
  validForm,
  checkValidForm,
  submitForm,
} from "../../redux/actions";
//import { Modal } from "modal_oc";
import Modal from "../modal/Modal";

//selection de départements
/**
 * Liste des départements disponibles.
 * @type {Array.<string>}
 */
const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

let tabStatesFilter = [];

/**
 * Récupère les noms des États à partir d'une liste d'états.
 * @param {Array.<Object>} states - Liste d'objets représentant les États.
 * @return {Array.<string>} - Tableau contenant les noms des États.
 */
const getStatesNames = (states) => {
  states.map((state) => tabStatesFilter.push(state.name));
  return tabStatesFilter;
};

/**
 * Tableau contenant les noms des États.
 * @type {Array.<string>}
 */
const statesNames = getStatesNames(states);
//fin départements

//dataPicker

/**
 *
 * Cette fonction prend en entrée une date et la formate au format "MM/JJ/AAAA".
 * @param {string} date - La date à formater au format "AAAA-MM-JJ".
 * @throws {Error} Lance une erreur si la date en entrée n'est pas valide.
 * @returns {string} La date formatée au format "MM/JJ/AAAA".
 */
function formatDate(date) {
  const inputDate = new Date(date);

  // Vérifier que la date en entrée est valide
  if (isNaN(inputDate.getTime())) {
    throw new Error("Invalid date");
  }

  // Vérifier si la date correspond à un anniversaire en dessous de 18 ans
  const now = new Date();
  const ageDiffMs = now.getTime() - inputDate.getTime();
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  if (age < 18) {
    console.log(
      "Sorry, you must be at least 18 years old to use this feature."
    );
    inputDate.setFullYear(2005); // Modifier l'année de naissance à 2005 (18 ans en 2023)
  }

  // Formater la date au format "MM/DD/YYYY"
  const isoDate = inputDate.toISOString().split("T")[0];
  const [year, month, day] = isoDate.split(".");
  const formattedDate = [day, month, year].join("");

  return formattedDate;
}

//fin dataPicker

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

  //gestion des messages d'erreurs
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [departmentError, setDepartmentError] = useState("");

  const [modal, setModal] = useState(false);

  /**
   * Vérifie la validité des données du formulaire et affiche les erreurs appropriées.
   * @returns {boolean} Retourne true si des erreurs ont été détectées, sinon false.
   **/
  const validateForm = () => {
    let isError = false;
    if (!firstName) {
      setFirstNameError("Please enter a first name.");
      isError = true;
    } else {
      setFirstNameError("");
    }
    if (!lastName) {
      setLastNameError("Please enter a last name.");
      isError = true;
    } else {
      setLastNameError("");
    }
    if (!birthDate) {
      setBirthDateError("Please select a birth date.");
      isError = true;
    } else {
      const now = new Date();
      if (birthDate > now) {
        setBirthDateError("Birth date cannot be in the future.");
        isError = true;
      } else {
        const ageDiffMs = now.getTime() - birthDate.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (age < 18) {
          setBirthDateError("Your date of birth is not valid.");
          isError = true;
        } else {
          setBirthDateError("");
        }
      }
    }
    if (!startDate) {
      setStartDateError("Please select a start date.");
      isError = true;
    } else {
      const now = Date.now();
      if (startDate.getTime() > now) {
        setStartDateError("Start date cannot be in the future.");
        isError = true;
      } else {
        const ageDiffMs = startDate.getTime() - birthDate.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (age < 18) {
          setStartDateError("You must be at least 18 years old to start.");
          isError = true;
        } else {
          setStartDateError("");
        }
      }
    }
    if (!street) {
      setStreetError("Please enter a street address.");
      isError = true;
    } else {
      setStreetError("");
    }
    if (!city) {
      setCityError("Please enter a city.");
      isError = true;
    } else {
      setCityError("");
    }
    if (!state) {
      setStateError("Please select a state.");
      isError = true;
    } else {
      setStateError("");
    }
    if (!zipCode) {
      setZipCodeError("Please enter a zip code.");
      isError = true;
    } else {
      setZipCodeError("");
    }
    if (!department) {
      setDepartmentError("Please select a department.");
      isError = true;
    } else {
      setDepartmentError("");
    }

    return isError;
  };

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

  const checkForm = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      street === "" ||
      city === "" ||
      state === "" ||
      zipCode === "" ||
      department === "" ||
      birthDate === new Date() ||
      startDate === new Date() ||
      birthDate.getFullYear() >= new Date().getFullYear() - 18
    ) {
      dispatch(unvalidForm());
    } else {
      dispatch(validForm());
    }
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    checkForm();
    const submit = dispatch(checkValidForm());
    const err = validateForm();

    if (submit) {
      dispatch(submitForm(employee));
      setModal(true);
    } else {
      return err;
    }
  };
  const resetFormCloseModal = () => {
    document.getElementById("formulaire").reset();
    setModal(false);
    setBirthDate(new Date());
    setStartDate(new Date());
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
          {firstNameError && <p className="error-message">{firstNameError}</p>}

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last"
            name="last"
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && <p className="error-message">{lastNameError}</p>}

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            name="birth"
            selected={birthDate}
            onChange={setBirthDate}
            value={birthDate}
          />
          {birthDateError && <p className="error-message">{birthDateError}</p>}

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            name="start"
            selected={startDate}
            onChange={setStartDate}
            value={startDate}
          />
          {startDateError && <p className="error-message">{startDateError}</p>}
        </section>

        <section className="adresse">
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            name="street"
            onChange={(e) => setStreet(e.target.value)}
          />
          {streetError && <p className="error-message">{streetError}</p>}

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
          {cityError && <p className="error-message">{cityError}</p>}

          <label htmlFor="state">State</label>
          <Dropdown
            placeholder="Select an option"
            name="stateList"
            options={statesNames}
            onChange={setState}
          />
          {stateError && <p className="error-message">{stateError}</p>}

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            name="code"
            onChange={(e) => setZipCode(e.target.value)}
          />
          {zipCodeError && <p className="error-message">{zipCodeError}</p>}

          <Dropdown
            placeholder="Departments"
            name="departments"
            options={departments}
            onChange={setDepartment}
          />
          {departmentError && (
            <p className="error-message">{departmentError}</p>
          )}
        </section>
      </form>

      <div className="button-save">
        <button onClick={saveEmployee}> Save </button>
        {modal && (
          <Modal
            message={"employee created"}
            closeModal={resetFormCloseModal}
          />
        )}
      </div>
    </>
  );
}

export default Form;
