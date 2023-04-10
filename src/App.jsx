// import { Typography } from "@mui/material"
// import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon  from '@mui/icons-material/Delete'
// import {Button} from '@mui/material'
// import SendIcon from '@mui/icons-material/Send'
import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
function App() {

    const [columns,setColumns]=useState([
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
      },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) =>(
            <div style={{
              width:'100%',
              display:'flex',
              justifyContent:'space-evenly'
            }}>
            <DeleteIcon/>
            <EditIcon/>
            </div>
        )
      },
    ])
    const [rows,setRows]=useState([
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ])

  return (
    <>
    {/* <Typography align="center" variant="h2">Mr-Robot</Typography> */}
    {/* <PersonIcon fontSize="large" color="primary"></PersonIcon> */}
    
    <Container style={{marginTop:25}}>
      <div style={{height:400,width:'100%'}}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
           }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
      </div>
        </Container>




    </>
  )
}

export default App
