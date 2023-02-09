import { createSlice } from "@reduxjs/toolkit"
import { EMPLOYEES } from "../assets/datas/employeesDatas"

export const employeeSlice = createSlice({
    name: "employee",
    initialState: EMPLOYEES,
    reducers: {
        addEmployee: (state, action) => {
            const newEmployee = {
                id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                birthDate: action.payload.birthDate,
                startDate: action.payload.startDate,
                street: action.payload.street,
                city: action.payload.city,
                state: action.payload.state,
                zipCode: action.payload.zipCode,
                department: action.payload.department,
            }
            state.push(newEmployee)
        }
    }
})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer