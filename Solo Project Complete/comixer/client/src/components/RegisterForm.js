import React, { useState } from 'react';
import { Paper, FormControl,  InputLabel, OutlinedInput, Button, FormHelperText } from '@material-ui/core';
import styles from '../modules/Login.module.css'
import axios from 'axios';
import { navigate } from '@reach/router';


export default () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [reqErrors, setReqErrors] = useState({});


    const submitForm = (e) => {
        e.preventDefault();
        const newUser = {
            username: username, 
            email: email, 
            password: password, 
            confirmPassword: confirmPassword
        };
        // console.log(newUser);
        axios.post('http://localhost:8000/api/register', newUser)
        .then((res) => {
            console.log(res)
            navigate('/main/') 
        })
        .catch((err) => {
            // setReqErrors(err.response.data.errors)
            console.log(err)   
        });
    }

    return (
        <div className={`${styles.body} d-flex h-100 p-0`}>
            <Paper elevation={3} className= { `${styles.paper} ${styles.paper} m-auto d-inline-block align-middle` } >
                <h2 className="mb-3">Comixer</h2>
                <form onSubmit={submitForm}>
                    <p className="text-right mr-5 mb-0">Register</p>

                    { reqErrors.username ?
                        <FormControl variant="outlined" className="mb-1">
                            <InputLabel required={true} error>Username</InputLabel>
                            <OutlinedInput 
                                type="text" 
                                onChange={(e)=>setUsername(e.target.value)}
                                error 
                                labelWidth={90}
                                />
                            <small><FormHelperText error>{reqErrors.username.message}</FormHelperText></small>
                        </FormControl>
                        :
                        <FormControl variant="outlined" className="mb-1">
                        <InputLabel required={true}>Username</InputLabel>
                        <OutlinedInput type="text" 
                                // required={true} 
                                onChange={(e) => {setUsername(e.target.value);}}
                                labelWidth={90}
                        />
                        <small><FormHelperText className="invisible">No Error</FormHelperText></small>
                        </FormControl>
                    }

                    { reqErrors.email ?
                        <FormControl variant="outlined" className="mb-1">
                            <InputLabel required={true} error>Email</InputLabel>
                            <OutlinedInput 
                            type="email" 
                            required={true} 
                            onChange={(e)=>setEmail(e.target.value)}
                            error 
                            labelWidth={50}
                            />
                            <small><FormHelperText error>{reqErrors.email.message}</FormHelperText></small>
                        </FormControl>
                        :
                        <FormControl variant="outlined" className="mb-1">
                        <InputLabel required={true}>Email</InputLabel>
                        <OutlinedInput type="email" 
                                // required={true} 
                                onChange={(e) => {setEmail(e.target.value);}}
                                labelWidth={50}
                        />
                        <small><FormHelperText className="invisible">No Error</FormHelperText></small>
                        </FormControl>
                    }

                    { reqErrors.password ?
                        <FormControl variant="outlined" className="mb-1">
                            <InputLabel required={true} error>Password</InputLabel>
                            <OutlinedInput 
                            type="password" 
                            required={true} 
                            onChange={(e)=>setPassword(e.target.value)}
                            error 
                            labelWidth={90}
                            />
                            <small><FormHelperText error>{reqErrors.password.message}</FormHelperText></small>
                        </FormControl>
                        :
                        <FormControl variant="outlined" className="mb-1">
                        <InputLabel required={true}>Password</InputLabel>
                        <OutlinedInput type="password" 
                                // required={true} 
                                onChange={(e) => {setPassword(e.target.value);}}
                                labelWidth={90}
                        />
                        <small><FormHelperText className="invisible">No Error</FormHelperText></small>
                        </FormControl>
                    }

                    { reqErrors.confirmPassword ?
                        <FormControl variant="outlined" className="mb-1">
                            <InputLabel required={true} error>Confirm Password</InputLabel>
                            <OutlinedInput 
                            type="password" 
                            required={true} 
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            error 
                            labelWidth={150}
                            />
                            <small><FormHelperText error>{reqErrors.confirmPassword.message}</FormHelperText></small>
                        </FormControl>
                        :
                        <FormControl variant="outlined" className="mb-1">
                        <InputLabel required={true}>Confirm Password</InputLabel>
                        <OutlinedInput type="password" 
                                // required={true} 
                                onChange={(e) => {setConfirmPassword(e.target.value);}}
                                labelWidth={150}
                        />
                        <small><FormHelperText className="invisible">No Error</FormHelperText></small>
                        </FormControl>
                    }

                    <br/>
                    <Button type="submit" variant="contained" color="primary">
                        Register
                    </Button>
                </form>
            </Paper>
        </div>
    );
};



// { reqErrors.name ? 
//     <>
//         <OutlinedInput  error={true} type="text" required={true} onChange={(e) => {setFirstName(e.target.value);}}/>
//         <small className="invalid-feedback">{reqErrors.firstName.message}</small> 

//         <input 
//         type="text" 
//         autoFocus
//         className="form-control is-invalid" 
//         placeholder="Enter pet name" 
//         name="name" 
//         value={name}
//         onChange = {(e)=>setName(e.target.value)} 
//         />
//         <small className="invalid-feedback">{reqErrors.name.message}</small> 
//     </>
//     :
//     <>
//         <OutlinedInput type="text" required={true} onChange={(e) => {setFirstName(e.target.value);}}/>
//         <small className="invisible">#</small> 

//         <input 
//         type="text" 
//         autoFocus
//         className="form-control" 
//         placeholder="Enter pet name" 
//         name="name" 
//         value={name}
//         onChange = {(e)=>setName(e.target.value)} 
//         />
//         <small><FormHelperText className="invisible">Error</FormHelperText></small>
//     </>
//     }