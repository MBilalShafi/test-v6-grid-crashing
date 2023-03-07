import React from 'react';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import './App.css';

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "XGrid", col2: "is Awesome" },
  { id: 3, col1: "Material-UI", col2: "is Amazing" },
  { id: 4, col1: "Hello", col2: "World" },
  { id: 5, col1: "XGrid", col2: "is Awesome" },
  { id: 6, col1: "Material-UI", col2: "is Amazing" }
];

const columns = [
  { field: "id" },
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 }
];

function App() {
  return (
    <div className="App">
      <DataGridPremium rows={rows} columns={columns} />
    </div>
  );
}

export default App;
