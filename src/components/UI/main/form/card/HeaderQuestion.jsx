import { Box, TextField, Typography, MenuItem, } from "@mui/material"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// VARIABLES
const optionM = [
    { id: 1, text: "Texto corto" },
    { id: 2, text: "Texto Largo" },
    { id: 3, text: "Opciones" },
    { id: 4, text: "Casillas" },
    { id: 5, text: "Desplegable" },
    { id: 6, text: "Subir Archivo" },
    { id: 7, text: "Fecha" },
    { id: 8, text: "Hora" },
    { id: 9, text: "Mensaje" }
]

export const HeaderQuestion = ({
    titleRefs,
    descriptionRefs,
    questionData,
    handleViewDescriptionQ,
    index,
    setQuestionData
}) => {


    // METHODS
    // Cambiar el formato de la pregunta de la tarjeta activa
    const handleChangeOption = (value, index) => {
        if (value !== 3 && value !== 4 && value !== 5) {
            // Si no es tipo 3, 4 o 5, reinicia las opciones y actualiza el tipo
            const newCard = [...questionData];
            newCard[index].options = [{ id: 1, value: '' }];
            newCard[index].type = value;
            setQuestionData([...newCard]);
        } else {
            // Si es tipo 3, 4 o 5, actualiza solo el tipo y deja las opciones actuales
            setQuestionData(
                questionData.map((item, i) => (
                    i === index ? { ...item, type: value } : item
                ))
            );
        }
    };

    // Cambiar el titulo de la pregunta de la tarjeta activa
    const handleChangeTitleQ = (value, index) => {
        setQuestionData(
            questionData.map((item, i) => (
                i === index
                    ? { ...item, title: value }
                    : item
            )))
    }

    // Cambiar la descripcion de la pregunta de la tarjeta activa
    const handleChangeDescriptionQ = (value, index) => {
        setQuestionData(
            questionData.map((item, i) => (
                i === index
                    ? { ...item, description: value }
                    : item
            )))

        if (value && value.length < 1) {
            handleViewDescriptionQ(false, index)
        }
    }

    // Si no se escribio nada en la descripcion de la pregunta, vuelve el mensaje "Clic para agregar descripcion"
    const handleBlurDescription = (index) => {
        if (!questionData[index]?.description) {
            handleViewDescriptionQ(false, index)
        }
    }

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: 'relative'
                }}
            >
                <Box>
                    {/* Titulo y descripcion de la pregunta */}
                    <TextField
                        inputRef={element => titleRefs.current[index] = element}
                        id="question-title"
                        name="question-title"
                        placeholder="Titulo de la pregunta"
                        sx={{
                            "& fieldset": { border: "none" },
                            minWidth: "350px",
                            "& .MuiInputBase-input": {
                                padding: "0.8em 1em",
                            },
                        }}
                        value={questionData[index]?.title}
                        onChange={(e) => handleChangeTitleQ(e.target.value, index)}
                        autoComplete="off"
                    />

                    <Box width="70%" display='flex' justifyContent='space-between'>
                        {
                            questionData[index]?.viewDescriptionQuestion &&
                                questionData[index]?.type !== 9
                                ?
                                <TextField
                                    className="scale-up-ver-top"
                                    inputRef={descriptionRefs}
                                    id="question-description"
                                    name="question-description"
                                    placeholder="Descripcion de la pregunta"
                                    sx={{
                                        padding: '0',
                                        minWidth: "350px",
                                        "& fieldset": { border: "none" },
                                        "& .MuiInputBase-input": {
                                            fontSize: '0.8rem',
                                            padding: "0 0.5em 1.2em 14px",
                                        },
                                        "& .MuiInputBase-root": {
                                            padding: " 0 0 0 0.1em",
                                        }
                                    }}
                                    value={questionData[index]?.description}
                                    onChange={(e) => handleChangeDescriptionQ(e.target.value, index)}
                                    autoComplete="off"
                                    multiline
                                    onBlur={() => handleBlurDescription(index)}
                                />
                                : questionData[index]?.type !== 9
                                &&

                                <Box sx={{
                                    minWidth: "350px",
                                    height: "36px",
                                    padding: '0 0 0.5em 1em',
                                    margin: '1px',
                                    color: 'var(--redMc)'
                                }}
                                >
                                    {
                                        !questionData[index]?.description
                                            ?
                                            <Typography
                                                className="scale-up-ver-top"
                                                component='p'
                                                sx={{
                                                    fontSize: '0.7rem',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() => handleViewDescriptionQ(true, index)}
                                            >
                                                Clic para agregar descripcion
                                            </Typography>

                                            : <Typography
                                                sx={{
                                                    fontSize: '0.7em',
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => handleViewDescriptionQ(true, index)}
                                            >"extender descripcion..."
                                            </Typography>
                                    }
                                </Box>
                        }

                        {
                            questionData[index]?.viewDescriptionQuestion && questionData[index]?.description
                                ? <ExpandLessIcon
                                    fontSize="small"
                                    color="blackGrey"
                                    cursor="pointer"
                                    onClick={() => handleViewDescriptionQ(false, index)}
                                />
                                : !questionData[index]?.viewDescriptionQuestion && questionData[index]?.description
                                    ? < ExpandMoreIcon
                                        fontSize="small"
                                        color="blackGrey"
                                        cursor="pointer"
                                        onClick={() => handleViewDescriptionQ(true, index)} />
                                    : ""
                        }
                    </Box>

                </Box>

                {/* Desplegable de seleccion de pregunta */}
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='0.2em'>
                    <TextField
                        id="question-select"
                        name="question-select"
                        select
                        defaultValue="3"
                        sx={{
                            width: "160px",
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderRadius: "2em",
                                    borderWidth: "2px",
                                    height: "45px",
                                },

                                '& .MuiSelect-select': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: "8.2px 1em",
                                    fontSize: "0.8rem"
                                },
                            },
                        }}
                        value={questionData[index]?.type}
                        onChange={(e) => handleChangeOption(e.target.value, index)}
                    >
                        {
                            optionM.map((item, i) => (
                                <MenuItem key={i} value={item.id}>
                                    {item.text}
                                </MenuItem>
                            ))
                        }
                    </TextField>

                    {/* Mensaje flotante para mostrar dependiendo la opcion seleccionada */}
                    <Typography
                        variant="p"
                        fontSize='0.6rem'
                        color='primary'
                    >
                        {
                            questionData[index]?.type === 3 || questionData[index]?.type === 5
                                ? "Seleccion de una opcion"
                                : questionData[index]?.type === 4
                                    ? "Seleccion de varias opciones"
                                    : questionData[index]?.type === 9
                                        ? "Escribe el mensaje a mostrar"
                                        : ""
                        }
                    </Typography>
                </Box>
            </Box>
        </>
    )
}