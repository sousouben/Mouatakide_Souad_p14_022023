import React from "react";
import DataTable from "react-data-table-component";
import "./dataList.css";

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
];
const DataList = () => {
  return <DataTable columns={columns} data={data} />;
};

export default DataList;
