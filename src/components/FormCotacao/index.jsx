import React from 'react'  
import TextField from '@mui/material/TextField';

const FormCotacao = () => {  

    return (
        <div className="hidden lg:flex w-[255px] h-[478px] bg-white shadow-md opacity-100">
            <div id="titleForm"></div>
            <form action="" method="post" className='px-[29px]'>
                 <TextField id="standard-basic" label="Standard" variant="standard" />

            </form>
        </div>
    );  

}
export default FormCotacao; 
