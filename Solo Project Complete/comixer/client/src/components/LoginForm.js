import React, { useState } from 'react';
import { Paper, FormControl, InputLabel, OutlinedInput, Button, FormHelperText } from '@material-ui/core';
import styles from '../modules/Login.module.css'
import axios from 'axios';
import { navigate } from '@reach/router';

export default () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [reqErrors, setReqErrors] = useState({});

    const submitForm = (e) => {
        e.preventDefault();
        const user = {
            username: username, 
            password: password
        };

        axios.post('http://localhost:8000/api/login', user)
        .then((res) => {
            console.log(res)
            navigate('/main/')
        })
        .catch((err) => {
            // setReqErrors(err.response.data.errors)
            console.log(err.response.data.errors)   // If the response is not successful (a 400 return code)
        });
    }

    return (
        <div className={`${styles.body} d-flex h-100 p-0`}>
            <Paper elevation={3} className= { `${styles.paper} ${styles.paper} m-auto d-inline-block align-middle` } >
                <h2 className="mb-3">Comixer</h2>
                <form onSubmit={submitForm}>
                    <p className="text-right mr-5 mb-0">Sign in</p>
                    { reqErrors.username ?
                        <FormControl variant="outlined" className="mb-1">
                            <InputLabel required={true} error>Username</InputLabel>
                            <OutlinedInput 
                                type="text" 
                                onChange={(e) => setUsername(e.target.value)}
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
                    <br/>
                    <div className="d-flex justify-content-between">
                        <small>Don't have an account? <a href="/register">Register</a></small>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    );
};



