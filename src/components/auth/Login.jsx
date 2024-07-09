import { useFormik } from 'formik'
import { Box, Button, TextField, Typography } from "@mui/material"

import { validationsFormLogin } from '../../utils/validationsForm'
import "./styles/login.css"
import { useState } from 'react'

const initialValues = {
    email: '',
    code: '',
}

export const Login = () => {
    // STATES
    const [sendCode, setSendCode] = useState(false)

    // METHODS
    const onSubmit = (data) => {

        if (data.email) {
            setSendCode(true)
        }

        if (data.code) {
            console.log(data)
            // TODO: Enviar datos para registro y hacer las validadiones

            // Limpiar el objeto de valores
            handleReset()
        }

    }

    const { values, handleSubmit, handleChange, handleBlur, handleReset, errors, touched } = useFormik({
        initialValues,
        validationSchema: validationsFormLogin(sendCode),
        onSubmit
    })

    console.log(errors?.code);
    return (
        <Box className='formCenter'>
            <Box className='formLogin-container'>
                <Box className='formLogin-container-cabezera'>
                    <Typography component="h3" variant="h3">MULTIFORM</Typography>
                </Box>

                <Box className="flex">
                    <Typography className='fadeIn' component="h6" variant='body2' textAlign="center" padding="1.5em 1em 0 1em" fontWeight="bold" color="primary">
                        {sendCode
                            ? 'Escribe el codigo mandado al correo.'
                            : 'Escribe tu correo de MC.'
                        }
                    </Typography>
                </Box>


                <Box className='formLogin-container-form'>
                    <form onSubmit={handleSubmit}>
                        {!sendCode ?
                            <Box className='formLogin-container-TextField'>
                                <TextField
                                    id='email'
                                    name='email'
                                    type='text'
                                    label="email"
                                    value={values.email || ""}
                                    onChange={handleChange}
                                    fullWidth
                                    helperText={touched.email && errors?.email
                                        ? errors.email
                                        : "*"
                                    }
                                    error={touched.email && errors?.email && true}
                                    onBlur={handleBlur}
                                >
                                </TextField>
                            </Box>
                            :
                            <Box className='formLogin-container-TextField'>
                                <TextField
                                    id='code'
                                    name='code'
                                    type='code'
                                    label="code"
                                    value={values.code || ""}
                                    onChange={handleChange}
                                    fullWidth
                                    helperText={touched.code && errors?.code
                                        ? errors.code
                                        : "*"
                                    }
                                    error={touched.code && errors?.code && true}
                                    onBlur={handleBlur}
                                >
                                </TextField>
                            </Box>
                        }

                        <Box className='formLogin-container-button'>
                            <Button
                                className='fadeIn'
                                type='submit'
                                variant="contained"
                                disabled={sendCode
                                    ? errors?.code !== undefined || values?.code === ""
                                    : errors?.email !== undefined || values?.email === ""}
                            >{sendCode ? 'Ingresar' : 'Enviar code'}
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}