
# Wealth Health

## General informations

This project is an upgrade of an internal web application called HRNet that manages employee records. This version uses React (instead of JQuery previously).

## Features

### Create a new employee

- control that fields are filled before submit and display error messages if not
- control that fields respect the right format and display error messages if not
- display a modal to inform user that employee has been successfully created

### Employees list
- a list of employees is shown in an array
- list can be sorted
- list can be filtered

HRNet allows you to create employees and then consult their list. It also offers plugins from existing libraries and a plugin created specifically for this version: the modal plugin.

## Prerequisites

- nodeJS (version 16.14.2)

- npm (version 8.5.0)

- Visual Studio Code (version 1.73.1) or another code editor

- git

## Technologies and Dependencies

- Javascript
- [react] (version 18.2.0)
- [react-dom] (version 18.2.0)
- [react-redux] (version 8.0.5)
- [react-router-dom] (version 6.8.0)
- [react-data-table-component] (version 7.5.3)
- [react-datepicker] (version 4.10.0)
- [react-scripts] 5.0.1)
- [react-select] (version 5.7.0)
- [uuid] (version 9.0.0)
- [uuidv4] (version 6.2.13)
- [sass] (version 1.57.1)
- [styled-components] (version 5.3.6)
- [@fortawesome/free-solid-svg-icons] (version 6.2.1)
- [@fortawesome/react-fontawesome] (version 0.2.0)
- [asean-react-modal] (version 0.5.0)

## Installation 

- Clone this project

```bash
  git clone https://github.com/ascean/wealth-health.git
```

- Go to the project directory

```bash
  cd wealthhealth
```

- Install dependencies

```bash
  npm install
```

## Launch the project

```bash
  npm run start
```

Finally, open http://localhost:3000 to view the application in your browser. (3000 is your port number)

## Datas

Some datas already exist that you can modify :
- employees in 'src/assets/datas/employeesDatas.js'
- departments in 'src/assets/datas/departments.js'
- states in 'src/assets/datas/departments.js'

## Author

- Sandrine

