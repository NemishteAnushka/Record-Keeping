import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  console.log(data);
  const addData = () => {
    setData([...data, { name, email }]);
  };
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            id="outlined-basic"
            label="name"
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            value={email}
            id="outlined-basic"
            label="email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <Stack spacing={25} direction="row">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </Stack>
      </div>
    </div>
  );
}

export default App;
