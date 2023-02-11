import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { STATES } from "../../assets/datas/states";
import { DEPARTMENTS } from "../../assets/datas/departements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { addEmployee } from "../../redux/employeeSlice";
import { Modal } from "asean-react-modal";

const TEXT_REGEX = /^[a-z àâäãçéèêëìïîòôöõùûüñ'-]{2,23}$/i;
const TEXT_AND_NUMBER_REGEX = /^[0-9a-z àâäãçéèêëìïîòôöõùûüñ'-]{2,}$/i;
const NUMBER_REGEX = /^[0-9]{3,}$/;

/**
 * Page to create a new employee
 * @returns {ReactElement} Create NewEmployee page
 */
const NewEmployee = () => {

    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        zipCode: "",
    });
    const { firstName, lastName, street, city, zipCode } =
        credentials;

    const [birthDate, setBirthDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [department, setDepartment] = useState(null)
    const [state, setState] = useState(null)

    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validBirthDate, setValidBirthDate] = useState(false);
    const [validStartDate, setValidStartDate] = useState(false);
    const [validStreet, setValidStreet] = useState(false);
    const [validCity, setValidCity] = useState(false);
    const [validZipCode, setValidZipCode] = useState(false);
    const [validState, setValidState] = useState(false);
    const [validDepartment, setValidDepartment] = useState(false);

    //no display error messages when form is open the first time
    const [first, setFirst] = useState(true)

    const errMsg = {
        inputTextErrMsg: "Must contain 2 letters or more",
        inputNumberErrMsg: "Must contain 3 numbers or more",
        inputDateErrMsg: "A date have be choosen",
        inputSelectErrMsg: "An item have to be selected"
    }

    //asean-react-modal
    const [showModal, setShowModal] = useState(false)
    const hideModal = () => showModal && setShowModal(false)
    //exemples for asean-react-modal style options
    // const btnStyles = {background:'red', color:'white', borderColor:'green'}
    // const bgStyles = {background: 'pink'}

    const dispatch = useDispatch();

    useEffect(() => {
        //check firstName
        const result = TEXT_REGEX.test(firstName);
        setValidFirstName(result);
    }, [firstName]);

    useEffect(() => {
        //check lastName
        const result = TEXT_REGEX.test(lastName);
        setValidLastName(result);
    }, [lastName]);

    useEffect(() => {
        //check birthDate and startDate
        if (document.getElementById("birthDate").value) setValidBirthDate(true)
        if (document.getElementById("startDate").value) setValidStartDate(true)
    }, [birthDate, startDate]);

    useEffect(() => {
        //check street
        const result = TEXT_AND_NUMBER_REGEX.test(street);
        setValidStreet(result);
    }, [street]);

    useEffect(() => {
        //check zip code
        const result = NUMBER_REGEX.test(zipCode);
        setValidZipCode(result);
    }, [zipCode]);

    useEffect(() => {
        //check city
        const result = TEXT_REGEX.test(city);
        setValidCity(result);
    }, [city]);

    useEffect(() => {
        //check department
        if (department) setValidDepartment(true)
    }, [department]);

    useEffect(() => {
        //check state
        if (state) setValidState(true)
    }, [state]);

    /**
     * reset fields after a valid submit
     */
    const resetFields = () => {
        setCredentials({
            firstName: "",
            lastName: "",
            street: "",
            city: "",
            zipCode: ""
        });
        setBirthDate(null);
        setStartDate(null);
        setState(null);
        setDepartment(null);
    }

    /**
     * reset states after a valid submit
     */
    const resetStates = () => {
        setValidFirstName(false)
        setValidLastName(false)
        setValidBirthDate(false)
        setValidStartDate(false)
        setValidStreet(false)
        setValidZipCode(false)
        setValidCity(false)
        setValidState(false)
        setValidDepartment(false)
    }

    /**
     * update state on credentials changes 
     * @param {object} e event
     */
    const handleChange = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    /**
     * 
     * @param {object} e event 
     * @returns {ReactElement}
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setFirst(false)

        if (!validFirstName || !validLastName || !validBirthDate || !validStartDate ||
            !validCity || !validStreet || !validZipCode || !validState || !validDepartment) {
            return
        }
        const fields = {
            id: uuid(),
            firstName,
            lastName,
            birthDate: birthDate.toLocaleDateString(),
            startDate: startDate.toLocaleDateString(),
            street,
            city,
            zipCode,
            state: state.label,
            department: department.label,
        };

        dispatch(addEmployee(fields));
        resetFields()
        resetStates();
        setFirst(true)
        
        //asean-react-modal
        setShowModal(true)


    };
    return (
        <section id="section-employee">

            <div className="section-header">
                <h1>Create Employee</h1>
                <Link to="/list">
                    <button type="button" className="green-button nav-item">
                        List employees
                    </button>
                </Link>
            </div>

            <form id="form-create-employee" onSubmit={handleSubmit}>
                <div className="two-col">
                    <div className="col col1">
                        <label htmlFor="firstName">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            aria-invalid={validFirstName ? "false" : "true"}
                            aria-describedby="firstnamemsg"
                            onChange={handleChange}
                        />
                        {!first && !validFirstName
                            ? (
                                <p id="firstnamemsg" className="instructions">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errMsg.inputTextErrMsg}
                                </p>
                            )
                            : ("")
                        }
                    </div>

                    <div className="col col2">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            aria-invalid={validLastName ? "false" : "true"}
                            aria-describedby="lastnamemsg"
                            onChange={handleChange}
                        />
                        {!first && !validLastName
                            ? (
                                <p id="lastnamemsg" className="instructions">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errMsg.inputTextErrMsg}
                                </p>
                            )
                            : ("")
                        }
                    </div>
                </div>
                <div className="two-col">
                    <div className="col col1">
                        <label htmlFor="birthDate">Date of Birth</label>
                        <DatePicker
                            id="birthDate"
                            selected={birthDate}
                            onChange={(date) => setBirthDate(date)}
                            maxDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            ariaDescribedBy="birthdatemsg"
                        />
                        {!first && !validBirthDate
                            ? (
                                <p id="birthdatemsg" className="instructions">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errMsg.inputDateErrMsg}
                                </p>
                            )
                            : ("")
                        }

                    </div>
                    <div className="col col2">
                        <label htmlFor="startDate">Start date</label>
                        <DatePicker
                            id="startDate"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            maxDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            ariaDescribedBy="startdatemsg"
                        />
                        {!first && !validStartDate
                            ? (
                                <p id="startdatemsg" className="instructions">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errMsg.inputDateErrMsg}
                                </p>
                            )
                            : ("")
                        }

                    </div>
                </div>
                <div className="one-col">
                    <label htmlFor="street">Street</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={street}
                        aria-invalid={validStreet ? "false" : "true"}
                        aria-describedby="streetmsg"
                        onChange={handleChange}
                    />
                    {!first && !validStreet
                        ? (
                            <p id="streetmsg" className="instructions">
                                <FontAwesomeIcon icon={faInfoCircle} />
                                {errMsg.inputTextErrMsg}
                            </p>
                        )
                        : ("")
                    }
                </div>
                <div className="two-col">
                    <div className="col col1">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={zipCode}
                            aria-invalid={validZipCode ? "false" : "true"}
                            aria-describedby="zipcodemsg"
                            onChange={handleChange}
                        />
                        {!first && !validZipCode
                            ? (
                                <p id="zipcodemsg" className="instructions">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errMsg.inputNumberErrMsg}
                                </p>
                            )
                            : ("")
                        }
                    </div>

                    <div className="col col2">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            aria-invalid={validCity ? "false" : "true"}
                            aria-describedby="citymsg"
                            onChange={handleChange}
                        />
                        {!first && !validCity
                            ? (
                                <p id="citymsg" className="instructions">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errMsg.inputTextErrMsg}
                                </p>
                            )
                            : ("")
                        }
                    </div>
                </div>
                <div className="two-col">
                    <div className="col col1">
                        <label htmlFor="state">State</label>
                        <Select
                            id="state"
                            value={state}
                            name="state"
                            className="select-field"
                            options={STATES}
                            onChange={setState}
                            aria-describedby="statemsg"
                            placeholder="Select a state..."
                        />
                        {!first && !validState
                            ? (
                                <p id="statemsg" className="instructions">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errMsg.inputSelectErrMsg}
                                </p>
                            )
                            : ("")
                        }
                    </div>

                </div>
                <div className="one-col">
                    <label htmlFor="department">Department</label>
                    <Select
                        id="department"
                        value={department}
                        name="department"
                        className="select-field"
                        options={DEPARTMENTS}
                        onChange={setDepartment}
                        aria-describedby="departmentmsg"
                        placeholder="Select a department..."
                    />
                    {!first && !validDepartment
                            ? (
                                <p id="departmentmsg" className="instructions">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {errMsg.inputSelectErrMsg}
                                </p>
                            )
                            : ("")
                        }
                </div>
                <div className="btn-container">
                    <button className="green-button btn-save">save</button>
                </div>
            </form>
            <Modal show={showModal} onClickCloseBtn={hideModal} >
                {/* bEscapeClose={true} backgroundStyles = {bgStyles} buttonStyles={btnStyles}> */}
                <h1>Employee successfully created !</h1>
            </Modal>
        </section>
    );
};

export default NewEmployee;
