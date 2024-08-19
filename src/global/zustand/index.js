
import { create } from 'zustand'
import { generateUUID } from '../../utils/generateUUID'

// 
const useDataForm = create((set) => ({
    // Variables
    formData: {
        idForm: generateUUID(),
        titleForm: 'Formulario sin titulo',
        descriptionForm: '',
        questionData: [{
            idQuestion: generateUUID(),
            title: 'Pregunta o Mensaje sin titulo',
            description: '',
            type: 3,
            options: [{ id: 1, value: '' }],
            mandatory: false,
            viewDescriptionQuestion: false
        }],
        favoriteForm: false
    },

    // Methods
    setFormData: (newValue) => set((state) => ({ formData: { ...state.formData, ...newValue } })),
    setQuestionData: (newValue) => set((state) => ({
        formData: {
            ...state.formData,
            questionData: newValue
        }
    })),
    setTitleForm: (newValue) => set((state) => ({
        formData: {
            ...state.formData,
            titleForm: newValue
        }
    })),
    setDescriptionForm: (newValue) => set((state) => ({
        formData: {
            ...state.formData,
            descriptionForm: newValue
        }
    })),
}))

// 
const usePreviewForm = create((set) => ({
    // Variables
    preview: false,

    // Methods
    setPreview: (newValue) => set((state) => ({ ...state, preview: newValue }))
}))

// 
const useDataResponse = create((set) => ({
    responseData: {
        idForm: 0,
        questionResponse: [
            {
                questionId: 1,
                response: [
                    { id: 1, value: '' }
                ]
            }
        ]
    },

    setResponseData: (newValue) => set((state) => ({
        responseData: {
            ...state,
            idForm: newValue?.idForm,
            questionResponse: newValue?.questionResponse
        }
    }))
}))

// Estado y funcion para cambiar el valor de busqueda de los formularios.
const useSearchForm = create((set) => ({
    valueForm: 1,
    setChangeValueForm: (newValue) => set((state) => ({ ...state, valueForm: newValue }))
}))

export { useSearchForm, useDataForm, useDataResponse, usePreviewForm }