import "./styles/signup.css"
import { useFormik } from 'formik'
import { Box, Button, TextField, Typography } from "@mui/material"
import { validationsFormSignup } from "../utils/validationsForm"

const initialValues = {
    email: '',
    password: '',
    passwordConfirm: '',
    rol: '',
    phone: '',
}

export const Signup = () => {

    const onSubmit = (data) => {
        // TODO: Enviar datos para registro y hacer las validadiones
        console.log(data)

        handleReset()
    }

    const { values, handleSubmit, handleReset, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues,
        validationSchema: validationsFormSignup,
        onSubmit
    })


    return (
        <Box className='formSignup'>
            <Box className='formSignup-container'>
                <Box className='formSignup-container-cabezera'>
                    <Typography component="h3" variant="h3">MULTIFORM</Typography>
                </Box>

                <Box className='formSignup-container-form'>
                    <form onSubmit={handleSubmit}>
                        <Box className='formSignup-container-TextField'>
                            <TextField
                                id='email'
                                name='email'
                                type='email'
                                label="email"
                                value={values.email}
                                onChange={handleChange}
                                fullWidth
                                placeholder="@multicomputos.com"
                                helperText={touched.email && errors?.email
                                    ? errors.email
                                    : "*"
                                }
                                error={touched.email && errors?.email && true}
                                onBlur={handleBlur}
                            >
                            </TextField>
                        </Box>
                        <Box className='formSignup-container-TextField'>
                            <TextField id='password'
                                name='password'
                                type='password'
                                label="password"
                                value={values.password}
                                onChange={handleChange}
                                fullWidth
                                placeholder="minimo 6 carateres"
                                helperText={touched.password && errors?.password
                                    ? errors.password
                                    : "*"
                                }
                                error={touched.password && errors?.password && true}
                                onBlur={handleBlur}
                            >
                            </TextField>
                        </Box>
                        <Box className='formSignup-container-TextField'>
                            <TextField id='passwordConfirm'
                                name='passwordConfirm'
                                type='password'
                                label="password confirm"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                fullWidth
                                helperText={touched.passwordConfirm && errors?.passwordConfirm
                                    ? errors.passwordConfirm
                                    : "*"
                                }
                                error={touched.passwordConfirm && errors?.passwordConfirm && true}
                                onBlur={handleBlur}
                            >

                            </TextField>
                        </Box>
                        <Box className='formSignup-container-TextField'>
                            <TextField id='rol'
                                name='rol'
                                type='rol'
                                label="rol"
                                value={values.rol}
                                onChange={handleChange}
                                fullWidth
                                helperText={touched.rol && errors?.rol
                                    ? errors.rol
                                    : "*"
                                }
                                error={touched.rol && errors?.rol && true}
                                onBlur={handleBlur}
                            >
                            </TextField>
                        </Box>
                        <Box className='formSignup-container-TextField'>
                            <TextField id='phone'
                                name='phone'
                                type='phone'
                                label="phone"
                                value={values.phone}
                                onChange={handleChange}
                                fullWidth
                                helperText={touched.phone && errors?.phone
                                    ? errors.phone
                                    : "*"
                                }
                                error={touched.phone && errors?.phone && true}
                                onBlur={handleBlur}
                            >
                            </TextField>
                        </Box>

                        <Box className='formSignup-container-button'>
                            <Button type='submit' variant="contained">Registrarse</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}