import React from 'react';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import logo from './logo.svg';
// import './App.css';

function Map() {

  const [rows, setRows] = useState([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]);

  const [selected, setSelected] = useState([]);
  const [selection, setSelection] = React.useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''
        }`,
    },
  ];

  const buttonPressed = () => {
    setRows([]);
  }

  // const isJarno = (x) => {
  //   if (x == "Jarno") {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // const anotherButtonPressed = () => {
  //   let jarnoList = button.filter(item => item == "Jarno")
  //   setButtons(jarnoList)
  // }

  // const nameChanged = (event,index)=>{
  //   let newList = [...button]
  //   newList[index] = event.target.value
  //   console.log(event.target.value)
  //   setButtons(newList)
  // }

  const myFunction = () => {
    console.log("valittiin jotain")
  }

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection
          onSelectionChange={myFunction} />
      </div>
      <div>
        <button onClick={buttonPressed}>Clear all</button>
      </div>
    </div>
  );
}

export default Map;