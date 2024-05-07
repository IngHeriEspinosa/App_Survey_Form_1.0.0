import * as Yup from 'yup'

export const validationsFormSignup = Yup.object({
    email: Yup.string().required("Debes ingresar un email"),
    password: Yup.string().required("Debes ingresar una contraseña").min(6,"La contraseña debe tener minimo 6 caracteres"),
    passwordConfirm: Yup.string().required("Debes confirmar la contraseña").oneOf([Yup.ref('password')], 'Las contraseña deben coincidir'),
    rol: Yup.string().required("Debes ingresar un rol"),
    phone: Yup.string().required("Debes ingresar un telefono"),
})

export const validationsFormLogin = Yup.object({
    email: Yup.string().required("Debes ingresar un email"),
    password: Yup.string().required("Debes ingresar una contraseña").min(6,"La contraseña debe tener minimo 6 caracteres"),
})