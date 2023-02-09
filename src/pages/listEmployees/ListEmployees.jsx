import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterComponent from "./Filter";

const columns = [
    {
        name: "First Name",
        selector: (row) => row.firstName,
        sortable: true,
    },
    {
        name: "Last Name",
        selector: (row) => row.lastName,
        sortable: true,
    },
    {
        name: "Date of birth",
        selector: (row) => row.birthDate,
        sortable: true,
    },
    {
        name: "Start date",
        selector: (row) => row.startDate,
        sortable: true,
    },
    {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
    },
    {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
    },
    {
        name: "Zip code",
        selector: (row) => row.zipCode,
        sortable: true,
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
    },
];

const paginationComponentOptions = {
    rowsPerPageText: "Employees per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Tous",
};

const Listemployees = () => {
    const employees = useSelector((state) => state.employee);

    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredItems =
        filterText === ""
            ? employees
            : employees.filter(
                (item) =>
                    (item.firstName &&
                        item.firstName
                            .toLowerCase()
                            .includes(filterText.toLowerCase())) ||
                    (item.lastName &&
                        item.lastName
                            .toLowerCase()
                            .includes(filterText.toLowerCase()))
            );

    const filterZone = useMemo(() => {
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
            <section id="section-list">

            <div className="header-employee">
                <h1>List Employees</h1>
                    <Link to="/">
                        <button type="button" className="green-button nav-item">
                            CREATE EMPLOYEE
                        </button>
                    </Link>
            </div>
            <div className="list-container">
                <div className="button-container">
                </div>
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    paginationResetDefaultPage={resetPaginationToggle}
                    subHeader
                    subHeaderComponent={filterZone}
                    persistTableHead
                />
            </div>
            </section>
    );
};

export default Listemployees;
