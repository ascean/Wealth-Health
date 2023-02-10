
# Wealth Health

## General informations

Ce projet est une mise à niveau d'une application web interne appelée HRNet qui gère les dossiers des employés. Cette version utilise React (au lieu de JQuery auparavant).

## Features

### Create a new employee

- control that fields are filled before submit and display error messages if not
- control that fields respect the right format and display error messages if not
- display a modal to inform user that employee has been successfully created

### Employees list
- a list of employees is shown in an array
- list can be sorted
- list can be filtered

HRNet permet de créer les employés puis de consulter leur liste. Elle propose également des plugins provenant de librairies existantes et un plugin créé spécifiquement pourcette version : le plugin de la modale.

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

