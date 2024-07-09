
import { create } from 'zustand'

// 
const useDataForm = create((set) => ({
    // Variables
    formTitle: 'Formulario sin titulo',
    option: 3,
    questionTitle: 'Pregunta sin titulo',
    descriptionForm: '',
    mandatoryQuetion: false,

    // Metods
    setFormTitle: (newValue) => set((states) => ({ ...states, formTitle: newValue })),
    setOption: (newValue) => set((states) => ({ ...states, option: newValue })),
    setQuestionTitle: (newValue) => set((states) => ({ ...states, questionTitle: newValue })),
    setDescriptionForm: (newValue) => set((states) => ({ ...states, descriptionForm: newValue })),
    setMandatoryQuetion: (newValue) => set((states) => ({ ...states, mandatoryQuetion: newValue })),
}))

// 
const useCreateForm = create((set) => ({
    formCreate: false,
    createForm: (newValue) => set((states) => ({ ...states, formCreate: newValue }))
}))

// 
const useResponseForm = create((set) => ({
    formResponse: false,
    responseForm: (newValue) => set((states) => ({ ...states, formResponse: newValue }))
}))

// Estado y funcion para añadir o quitar los formularios de favoritos.
const useFavorite = create((set) => ({
    formFavorite: false,
    fav: (newValue) => set((state) => ({ ...state, formFavorite: newValue }))

}))

// Estado y funcion para cambiar el valor de busqueda de los formularios.
const useSearchForm = create((set) => ({
    valueForm: 1,
    changeValueForm: (newValue) => set((state) => ({ ...state, valueForm: newValue }))
}))

export { useCreateForm, useFavorite, useSearchForm, useResponseForm, useDataForm }