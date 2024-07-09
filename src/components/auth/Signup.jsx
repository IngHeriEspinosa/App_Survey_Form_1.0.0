import { useFormik } from 'formik'
import { Box, Button, TextField, Typography } from "@mui/material"

import { validationsFormSignup } from "../../utils/validationsForm"
import "./styles/signup.css"

const initialValues = {
    email: '',
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
        <Box className='formCenter'>
            <Box className='formSignup-container'>
                <Box className='formSignup-container-cabezera'>
                    <Typography component="h3" variant="h3">MULTIFORM</Typography>
                </Box>

                <Box className="flex">
                    <Typography className='fadeIn' component="h6" variant='body2' textAlign="center" padding="1.5em 1em 0 1em" fontWeight="bold" color="primary">
                        Solo necesitas tu correo de multicomputos activo, para poder activar el acceso a esta herramienta
                    </Typography>
                </Box>

                <Box className='formSignup-container-form'>
                    <form onSubmit={handleSubmit}>
                        <Box className='formSignup-container-TextField'>
                            <TextField
                                id='email'
                                name='email'
                                type='email'
                                label="email"
                                autoComplete='off'
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
                        <Box className='formSignup-container-button'>
                            <Button
                                type='submit'
                                variant="contained"
                                disabled={errors.email !== undefined || values.email === ""}
                            >
                                Registrarse
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}