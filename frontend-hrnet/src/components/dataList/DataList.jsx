import React from "react";
import DataTable from "react-data-table-component";
import "./dataList.css";
import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../../redux/selector";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.first,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.last,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.birth,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.start,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.code,
    sortable: true,
    filterable: true,
    reorder: true,
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
    filterable: true,
    reorder: true,
  },
];

const data = [
  {
    id: 1,
    first: "Souad",
    last: "Mouatakide",
    birth: "20/01/1982",
    start: "19/12/2020",
    street: "Paradise",
    city: "Paris",
    state: "France",
    code: "75006",
    department: "Engineering",
  },
  {
    id: 2,
    first: "John",
    last: "Doe",
    birth: "06/07/1946",
    start: "01/01/2001",
    street: "Hell",
    city: "Texas",
    state: "Etat-Uni",
    code: "77573",
    department: "Marketing",
  },
  {
    id: 3,
    first: "Lydia",
    last: "Darling",
    birth: "14/04/1980",
    start: "24/04/2014",
    street: "Méta",
    city: "Mexico",
    state: "Mexique",
    code: "00000",
    department: "Sales",
  },
  {
    id: 4,
    first: "Marc",
    last: "Zidani",
    birth: "25/12/1990",
    start: "12/05/2018",
    street: "Carnage",
    city: "Brest",
    state: "france",
    code: "29200",
    department: "Human Resources",
  },
  {
    id: 5,
    first: "Mourad",
    last: "Maniaque",
    birth: "17/06/1995",
    start: "05/05/2015",
    street: "Diar el Mahcoul",
    city: "Alger",
    state: "Algérie",
    code: "16013",
    department: "Legal",
  },
  {
    id: 6,
    first: "Nadia",
    last: "Benh",
    birth: "20/01/1982",
    start: "19/12/2020",
    street: "Paradise",
    city: "Paris",
    state: "France",
    code: "75006",
    department: "Engineering",
  },
  {
    id: 7,
    first: "Aurélie",
    last: "Done",
    birth: "06/07/1946",
    start: "01/01/2001",
    street: "Hell",
    city: "Texas",
    state: "Etat-Uni",
    code: "77573",
    department: "Marketing",
  },
  {
    id: 8,
    first: "Amel",
    last: "Dark",
    birth: "14/04/1980",
    start: "24/04/2014",
    street: "Méta",
    city: "Mexico",
    state: "Mexique",
    code: "00000",
    department: "Sales",
  },
  {
    id: 9,
    first: "Marie",
    last: "Zizo",
    birth: "25/12/1990",
    start: "12/05/2018",
    street: "Carnage",
    city: "Brest",
    state: "france",
    code: "29200",
    department: "Human Resources",
  },
  {
    id: 10,
    first: "Michel",
    last: "Man",
    birth: "17/06/1995",
    start: "05/05/2015",
    street: "Diar el Mahcoul",
    city: "Alger",
    state: "Algérie",
    code: "16013",
    department: "Legal",
  },
  {
    id: 11,
    first: "Sofia",
    last: "Zazi",
    birth: "20/01/1982",
    start: "19/12/2020",
    street: "Paradise",
    city: "Paris",
    state: "France",
    code: "75006",
    department: "Engineering",
  },
  {
    id: 12,
    first: "Julien",
    last: "Dorée",
    birth: "06/07/1946",
    start: "01/01/2001",
    street: "Hell",
    city: "Texas",
    state: "Etat-Uni",
    code: "77573",
    department: "Marketing",
  },
  {
    id: 13,
    first: "Lynda",
    last: "Duchesse",
    birth: "14/04/1980",
    start: "24/04/2014",
    street: "Méta",
    city: "Mexico",
    state: "Mexique",
    code: "00000",
    department: "Sales",
  },
  {
    id: 14,
    first: "Marc-Antoine",
    last: "Zoro",
    birth: "25/12/1990",
    start: "12/05/2018",
    street: "Carnage",
    city: "Brest",
    state: "france",
    code: "29200",
    department: "Human Resources",
  },
  {
    id: 15,
    first: "Matilde",
    last: "orient",
    birth: "17/06/1995",
    start: "05/05/2015",
    street: "Diar el Mahcoul",
    city: "Alger",
    state: "Algérie",
    code: "16013",
    department: "Legal",
  },
  {
    id: 16,
    first: "Sophie",
    last: "Retri",
    birth: "20/01/1982",
    start: "19/12/2020",
    street: "Paradise",
    city: "Paris",
    state: "France",
    code: "75006",
    department: "Engineering",
  },
  {
    id: 17,
    first: "Joelle",
    last: "Dine",
    birth: "06/07/1946",
    start: "01/01/2001",
    street: "Hell",
    city: "Texas",
    state: "Etat-Uni",
    code: "77573",
    department: "Marketing",
  },
  {
    id: 18,
    first: "karine",
    last: "line",
    birth: "14/04/1980",
    start: "24/04/2014",
    street: "Méta",
    city: "Mexico",
    state: "Mexique",
    code: "00000",
    department: "Sales",
  },
  {
    id: 19,
    first: "stéphane",
    last: "pets",
    birth: "25/12/1990",
    start: "12/05/2018",
    street: "Carnage",
    city: "Brest",
    state: "france",
    code: "29200",
    department: "Human Resources",
  },
  {
    id: 20,
    first: "Valérie",
    last: "Biche",
    birth: "17/06/1995",
    start: "05/05/2015",
    street: "Diar el Mahcoul",
    city: "Alger",
    state: "Algérie",
    code: "16013",
    department: "Legal",
  },
  {
    id: 21,
    first: "Florent",
    last: "Mou",
    birth: "20/01/1982",
    start: "19/12/2020",
    street: "Paradise",
    city: "Paris",
    state: "France",
    code: "75006",
    department: "Engineering",
  },
  {
    id: 22,
    first: "Bastien",
    last: "Clode",
    birth: "06/07/1946",
    start: "01/01/2001",
    street: "Hell",
    city: "Texas",
    state: "Etat-Uni",
    code: "77573",
    department: "Marketing",
  },
  {
    id: 23,
    first: "Nayla",
    last: "Douce",
    birth: "14/04/1980",
    start: "24/04/2014",
    street: "Méta",
    city: "Mexico",
    state: "Mexique",
    code: "00000",
    department: "Sales",
  },
  {
    id: 24,
    first: "Maurice",
    last: "Brin",
    birth: "25/12/1990",
    start: "12/05/2018",
    street: "Carnage",
    city: "Brest",
    state: "france",
    code: "29200",
    department: "Human Resources",
  },
  {
    id: 25,
    first: "Aline",
    last: "Croche",
    birth: "17/06/1995",
    start: "05/05/2015",
    street: "Diar el Mahcoul",
    city: "Alger",
    state: "Algérie",
    code: "16013",
    department: "Legal",
  },
];
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input
      id="search"
      type="text"
      placeholder="Search"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <button type="button" onClick={onClear}>
      X
    </button>
  </>
);
function DataList() {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const employees = useSelector(selectEmployees).dataEmployee;
  console.log(employees);

  /*const filteredItems = employees.filter(
    (data) =>
      data.first.toLowerCase().includes(filterText.toLowerCase()) ||
      data.last.toLowerCase().includes(filterText.toLowerCase()) ||
      data.start.toLowerCase().includes(filterText.toLowerCase()) ||
      data.department.toLowerCase().includes(filterText.toLowerCase()) ||
      data.birth.toLowerCase().includes(filterText.toLowerCase()) ||
      data.street.toLowerCase().includes(filterText.toLowerCase()) ||
      data.city.toLowerCase().includes(filterText.toLowerCase()) ||
      data.state.toLowerCase().includes(filterText.toLowerCase()) ||
      data.code.toLowerCase().includes(filterText.toLowerCase())
  );*/

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationResetDefaultPage={resetPaginationToggle}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
    />
  );
}

export default DataList;
