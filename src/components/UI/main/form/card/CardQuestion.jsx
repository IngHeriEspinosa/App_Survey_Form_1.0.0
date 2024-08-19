import { createRef, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import toastify from "toastify-js";

import { useDataForm } from "../../../../../global";
import { OptionsTypeSelect } from "./OptionsTypeSelect";
import { HeaderQuestion } from "./HeaderQuestion";
import { CardOpcionBottom } from "./CardOpcionBottom";
import '../styles/cardquestion.css'
import { generateUUID } from "../../../../../utils/generateUUID";

// VARIABLES
const initialValueQuestion = {
    title: 'Pregunta o Mensaje sin titulo',
    description: '',
    type: 3,
    options: [{ id: 1, value: '' }],
    mandatory: false
}

export const CardQuestion = ({ activeIndex, setActiveIndex }) => {

    // REF
    // Referencia para el TextField del título
    const titleRefs = useRef([]);
    const descriptionRefs = useRef(null);

    // STATES
    const { formData, setQuestionData } = useDataForm()
    const { questionData } = formData
    const [isDuplicate, setIsDuplicate] = useState(null);
    const [isDelete, setIsDelete] = useState(null);

    // METHODS
    // Añadir tarjeta de pregunta.
    const handleAddCard = () => {
        if (questionData?.[activeIndex]?.title) {
            if (
                questionData?.[activeIndex]?.type === 3 ||
                questionData?.[activeIndex]?.type === 4 ||
                questionData?.[activeIndex]?.type === 5 ||
                questionData?.[activeIndex]?.type === 9
            ) {
                if (!questionData?.[activeIndex]?.options.at(-1).value) {
                    toastify({
                        text: `El campo no debe estar vacio.`,
                        duration: 4000,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        style: {
                            background: "linear-gradient(to left, #ebad22, #990303)",
                            borderRadius: "0.8em"
                        }
                    }).showToast();

                    return
                }

                const newCard = [...questionData];
                const clonedCard = structuredClone(initialValueQuestion); // Clonar profundamente el valor inicial.
                newCard.splice(activeIndex + 1, 0, { ...clonedCard, idQuestion: generateUUID() });
                setQuestionData(newCard);

                setActiveIndex((prevState) => prevState + 1)

                // Para hacer focus en el título de la tarjeta recien agregada.
                if (titleRefs.current[activeIndex + 1]) {
                    titleRefs.current[activeIndex + 1].focus();
                }
            } else if (
                questionData?.[activeIndex]?.type === 1 ||
                questionData?.[activeIndex]?.type === 2 ||
                questionData?.[activeIndex]?.type === 6 ||
                questionData?.[activeIndex]?.type === 7 ||
                questionData?.[activeIndex]?.type === 8
            ) {
                const newCard = [...questionData];
                const clonedCard = structuredClone(initialValueQuestion); // Clonar profundamente el valor inicial.
                newCard.splice(activeIndex + 1, 0, { ...clonedCard, idQuestion: generateUUID() });
                setQuestionData(newCard);

                setActiveIndex((prevState) => prevState + 1)

                // Para hacer focus en el título de la tarjeta recien agregada.
                if (titleRefs.current[activeIndex + 1]) {
                    titleRefs.current[activeIndex + 1].focus();
                }
            } else if (questionData?.[activeIndex]?.type === 9) {
                if (!questionData?.[activeIndex]?.options.at(-1).value) {
                    toastify({
                        text: `El tipo de seccion es Mensaje. \nEl campo no puede estar vacio.`,
                        duration: 5000,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        style: {
                            background: "linear-gradient(to left, #ebad22, #990303)",
                            borderRadius: "0.8em"
                        }
                    }).showToast();
                }
            }
        } else {
            toastify({
                text: `Debe tener Titulo para poder agregar otra seccion.`,
                duration: 5000,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to left, #ebad22, #990303)",
                    borderRadius: "0.8em"
                }
            }).showToast();
        };
    }

    // sombrear y dirigir los controles a la tarjeta seleccionada
    const handleSelectCard = (event, index) => {
        if (!isDuplicate && !isDelete) {
            setActiveIndex(index)
        }
    }

    // Cambiar el descripcion de la pregunta de la tarjeta activa
    function handleViewDescriptionQ(value, index) {
        setQuestionData(
            questionData.map((item, i) => (
                i === index
                    ? { ...item, viewDescriptionQuestion: value }
                    : item
            )))
    }

    // Añadir opcion a tarjeta de pregunta.
    const handleAddOptions = (index, option) => {
        if (questionData[index]?.options?.at(-1).value) {

            if (option === 3 || option === 4 || option === 5) {
                const newCard = [...questionData];
                newCard[index].options = [
                    ...newCard[index].options, { id: parseInt(newCard[index].options.length + 1), value: '' }
                ]

                setQuestionData(newCard)
            } else {
                const newCard = [...questionData];
                newCard[index].options = [{ id: 1, value: '' }]
                setQuestionData(newCard)
            }
        } else {
            toastify({
                text: `La opcion actual esta vacia,\nno se puede agregar otra opcion`,
                duration: 4000,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to left, #ebad22, #990303)",
                    borderRadius: "0.8em"
                }
            }).showToast();
        }
    }

    // EFFECT
    // Efecto al iniciar el componente
    useEffect(() => { setActiveIndex(0) }, [])

    // Efecto al duplicar una tarjeta
    useEffect(() => {
        if (isDuplicate) {
            setActiveIndex(isDuplicate)
        }

        return setIsDuplicate(false)
    }, [isDuplicate])

    // Efecto al eliminar una tarjeta
    useEffect(() => {
        if (isDelete >= 1) {
            setActiveIndex(isDelete)
        } else if (isDelete === 0) {
            setActiveIndex(0)
        }

        return setIsDelete(false)
    }, [isDelete])

    // Inicializar las referencias del titulo segun la longitud de los datos de la pregunta
    useEffect(() => {
        if (!questionData[activeIndex]?.title) {
            titleRefs.current = questionData.map((_, i) => (
                i === activeIndex && titleRefs.current[i].focus() || createRef()
            ))
        }

    }, [questionData[activeIndex]?.title]);

    // Poner focus en la descripcion de la pregunta activa cuando le den clic a expandir o agregar 
    useEffect(() => {
        if (questionData[activeIndex]?.viewDescriptionQuestion && descriptionRefs.current) {
            const textLength = descriptionRefs.current.value.length;
            descriptionRefs.current.setSelectionRange(textLength, textLength);
            descriptionRefs.current.focus();
        }

    }, [questionData[activeIndex]?.viewDescriptionQuestion]);

    return (
        <>
            {
                // Mapeo de las preguntas
                questionData?.map((item, index) => (
                    <Box
                        id={index}
                        className="fadeIn"
                        position='relative'
                        key={index}
                        sx={{
                            // cursor: 'pointer',
                            border: activeIndex === index ? '1px solid var(--primary)' : 'none',
                            borderRadius: '1.8em'
                        }}
                    >
                        <Box
                            onClick={(event) => handleSelectCard(event, index)}
                            sx={{
                                width: "750px",
                                borderRadius: "1.8em",
                                padding: "0.4em 1em 0.6em",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                backgroundColor: "var(--white)"
                            }}>

                            {/* Header de la Tarjeta */}
                            <HeaderQuestion
                                titleRefs={titleRefs}
                                descriptionRefs={descriptionRefs}
                                questionData={questionData}
                                handleViewDescriptionQ={handleViewDescriptionQ}
                                index={index}
                                setQuestionData={setQuestionData}
                            />

                            {/* Body: Mapeo y Despliegue de opciones */}
                            <Box>
                                {
                                    questionData[index]?.options?.map((itemOption, i2) => (
                                        <Box
                                            key={i2}
                                            onKeyDown={(event) => {
                                                if (questionData[index]?.type !== 9) {
                                                    event.key === 'Enter' && handleAddOptions(index, questionData[index]?.type)
                                                }
                                            }}
                                        >
                                            <OptionsTypeSelect
                                                i2={i2}
                                                questionData={questionData}
                                                setQuestionData={setQuestionData}
                                                index={index}
                                                itemOption={itemOption}
                                                itemOptionId={itemOption?.id}
                                                handleAddOptions={handleAddOptions}
                                                activeIndex={activeIndex}
                                            />
                                        </Box>
                                    ))
                                }
                            </Box>

                            {/* Agregar siguiente opcion */}
                            {
                                questionData[index]?.type === 3
                                    || questionData[index]?.type === 4
                                    || questionData[index]?.type === 5
                                    ?
                                    <Typography
                                        width="208px"
                                        component='p'
                                        color='primary'
                                        sx={{ fontSize: '0.6rem', padding: "0 0.3em 0 1.5em", cursor: 'pointer' }}
                                        onClick={() => handleAddOptions(index, questionData[index]?.type)}
                                    >
                                        Clic aqui o enter para agregar opciones...
                                    </Typography>
                                    : ""
                            }

                            {/* Footer: Opciones de tarjeta: Delete, Duplicate y Mandatory */}
                            <CardOpcionBottom
                                questionData={questionData}
                                index={index}
                                activeIndex={activeIndex}
                                setQuestionData={setQuestionData}
                                setIsDuplicate={setIsDuplicate}
                                setIsDelete={setIsDelete}
                                setActiveIndex={setActiveIndex}
                            />
                        </Box>

                        {/* Opciones flotantes de la tarjeta */}
                        {
                            activeIndex === index &&
                            <Box
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                gap='0.8em'
                                paddingLeft='0.5em'
                                position='absolute'
                                top='30px'
                                left='102%'
                                backgroundColor='var(--white)'
                                padding='0.6em'
                                borderRadius="1em"
                            >
                                <AddCircleOutlineIcon
                                    color='secondary'
                                    cursor='pointer'
                                    onClick={handleAddCard}
                                />
                                <ImageIcon color='secondary' cursor='pointer' />
                                <VideocamIcon color='secondary' cursor='pointer' />
                            </Box>
                        }
                    </Box >
                ))
            }

        </>
    )
}