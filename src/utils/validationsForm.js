import * as Yup from 'yup'

export const validationsFormSignup = Yup.object({
    email: Yup.string()
        .required("Debes ingresar un email")
        .email("Correo electrónico no válido")
        .matches(/^[A-Z0-9._%+-]+@multicomputos\.com$/i, 'El email debe pertenecer a Multicomputos'),
    // password: Yup.string().required("Debes ingresar una contraseña").min(6,"La contraseña debe tener minimo 6 caracteres"),
    // passwordConfirm: Yup.string().required("Debes confirmar la contraseña").oneOf([Yup.ref('password')], 'Las contraseña deben coincidir'),
    // rol: Yup.string().required("Debes ingresar un rol"),
    // phone: Yup.string().required("Debes ingresar un telefono"),
})

export const validationsFormLogin = (sendCode) => {
    return Yup.object({
        email: Yup.string()
            .email("Correo electrónico no válido")
            .matches(/^[A-Z0-9._%+-]+@multicomputos\.com$/i, 'El email debe pertenecer a Multicomputos')
            .when('sendCode', {
                is: false,
                then: Yup.string().required("Debes ingresar un email")
            }),

        code: Yup.string()
            .min(6, "El codigo debe tener minimo 6 caracteres")
            .when(
                'sendCode', {
                is: true,
                then: Yup.string().required("Debes ingresar una codigo")
            })

    })
}