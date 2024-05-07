import { useFormik } from 'formik'
import { Box, Button, TextField, Typography } from "@mui/material"

import "./styles/login.css"
import { validationsFormLogin } from '../utils/validationsForm'

const initialValues = {
    email: '',
    password: '',
}

export const Login = () => {

    const onSubmit = (data) => {
        // TODO: Enviar datos para registro y hacer las validadiones
        console.log(data)

        handleReset()
    }

    const { values, handleSubmit, handleChange, handleBlur, handleReset, errors, touched } = useFormik({
        initialValues,
        validationSchema: validationsFormLogin,
        onSubmit
    })

    return (
        <Box className='formLogin'>
            <Box className='formLogin-container'>
                <Box className='formLogin-container-cabezera'>
                    <Typography component="h3" variant="h3">MULTIFORM</Typography>
                </Box>

                <Box className='formLogin-container-form'>
                    <form onSubmit={handleSubmit}>
                        <Box className='formLogin-container-TextField'>
                            <TextField
                                id='email'
                                name='email'
                                type='email'
                                label="email"
                                value={values.email}
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
                        <Box className='formLogin-container-TextField'>
                            <TextField id='password'
                                name='password'
                                type='password'
                                label="password"
                                value={values.password}
                                onChange={handleChange}
                                fullWidth
                                helperText={touched.password && errors?.password
                                    ? errors.password
                                    : "*"
                                }
                                error={touched.password && errors?.password && true}
                                onBlur={handleBlur}
                            >
                            </TextField>
                        </Box>

                        <Box className='formLogin-container-button'>
                            <Button type='submit' variant="contained">Entrar</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}