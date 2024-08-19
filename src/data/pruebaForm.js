
// VARIABLES
// const optionM = [
//     { id: 1, text: "Texto corto" },
//     { id: 2, text: "Texto Largo" },
//     { id: 3, text: "Opciones" },
//     { id: 4, text: "Casillas" },
//     { id: 5, text: "Desplegable" },
//     { id: 6, text: "Subir Archivo" },
//     { id: 7, text: "Fecha" },
//     { id: 8, text: "Hora" },
//     { id: 9, text: "Mensaje" }
// ]

export const dataFormExample = {
    titleForm: 'Formulario de prueba para ver como se ve todo en este formulario lindo para probar el wey.',
    // descriptionForm: 'para probar el envio del formulario, para probar el envio del formulario para probar el envio del formulario, para probar el envio del formulario, para probar el envio del formulario para probar el envio del formulario, para probar el envio del formulario para probar el envio del formulario, para probar el envio del formulario para probar el envio del formulario',
    descriptionForm: '',
    favoriteForm: true,
    questionData: [
        {
            id: 1,
            mandatory: false,
            title: "que dia es hoy ?",
            description: "Especifique el dia en el calendario",
            type: 7,
            options: [
                { id: 1, value: '' }
            ],
        },
        {
            id: 2,
            mandatory: false,
            title: "Como te sientes?",
            description: "Selecciona una de estas opciones para sintonizar con tu animo",
            type: 3,
            options: [
                { id: 1, value: 'Muy bien' },
                { id: 2, value: 'Bien' },
                { id: 3, value: 'Regular' },
                { id: 4, value: 'Mal' }
            ],
        },
        {
            id: 3,
            mandatory: false,
            title: "Que necesitas hoy?",
            description: '',
            type: 4,
            options: [
                { id: 1, value: 'Un masaje' },
                { id: 2, value: 'Comida' },
                { id: 3, value: 'Ir a la playa' },
                { id: 4, value: 'Dormir' }
            ],
        },
        {
            id: 4,
            mandatory: false,
            title: "Definete:",
            description: "Especifique el dia en el calendario",
            type: 2,
            options: [
                { id: 1, value: '' },
            ],
        },
        {
            id: 5,
            mandatory: true,
            title: "Que Quieres?",
            description: 'Elige una o varias, dependiendo lo que quieras.',
            type: 4,
            options: [
                { id: 1, value: 'Un masaje' },
                { id: 2, value: 'Comida' },
                { id: 3, value: 'Ir a la playa' },
                { id: 4, value: 'Dormir' }
            ],
        },
        {
            id: 6,
            mandatory: false,
            title: "Que tipo de persona eres?",
            description: "Llenar esta pregun es muy valioso para nosotros, mas no obligatorio.  ",
            type: 5,
            options: [
                { id: 1, value: 'Amorosa' },
                { id: 2, value: 'Tierna' },
                { id: 3, value: 'Amistosa' },
                { id: 4, value: 'Dañina' },
                { id: 5, value: 'Odiosa' }
            ],
        },
        {
            id: 7,
            mandatory: false,
            title: "Sube una foto tuya",
            description: '',
            type: 6,
            options: [
                { id: 1, value: '' },
            ],
        },
        {
            id: 8,
            mandatory: false,
            title: "Hasta que hora trabajas?",
            description: '',
            type: 8,
            options: [
                { id: 1, value: '' },
            ],
        },
        {
            id: 9,
            mandatory: true,
            title: "Gracias",
            description: '',
            type: 9,
            options: [
                { id: 1, value: 'Gracias por todo, es un placer interactuar contigo, hasta luego.' },
            ],
        },
    ]
} 