import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import BtnEnviar from "../BtnEnviar";
import IconCar from '../IconCar'
const LabelPolitica = ()=>{
    return  <p className="text-[14px]">Aceito a <strong>Política de Privacidade</strong></p>
}

const FormCotacao = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="hidden lg:flex lg:flex-col w-[255px] bg-white shadow-md opacity-100 px-[29px] py-[29px]">
      <div id="titleForm" className="flex items-center gap-4 justify-center">
        <IconCar fill="#1C69D4"/>
        <h2 className="text-[20px]">Solicitar cotação</h2>
      </div>
      <form action="" method="post" className=" flex flex-col gap-4">
        <TextField id="Name" label="Nome" variant="standard" />
        <TextField id="email" label="E-mail" variant="standard" />
        <TextField id="phoneNumber" label="Telefone" variant="standard" />
        <div>
          <FormControl variant="standard" sx={{ minWidth: '100%' }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={`Modelo 1`}>Modelo 1</MenuItem>
              <MenuItem value={`Modelo 2`}>Modelo 2</MenuItem>
              <MenuItem value={`Modelo 3`}>Modelo 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField id="message" label="Menssagem" variant="standard" />
        <FormControlLabel sx={{marginTop:2}} control={<Checkbox />} label={<LabelPolitica />} />
        <BtnEnviar />
      </form>
    </div>
  );
};
export default FormCotacao;
