import { Box, FormControlLabel, Switch, Typography } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import toastify from "toastify-js";

export const CardOpcionBottom = ({ questionData, index, activeIndex, setQuestionData, setIsDuplicate, setIsDelete, setActiveIndex }) => {

    // METHODS
    // Cambiar la obligatoriedad de la pregunta de la tarjeta activa
    const handleChangeSwitch = (event, index) => {
        setQuestionData(
            questionData.map((item, i) => (
                i === index
                    ? { ...item, mandatory: !item.mandatory }
                    : item
            ))
        )
    }

    // Duplicar la tarjeta de pregunta.
    const handleDuplicateCard = (index) => {
        if (questionData?.[activeIndex]?.title) {
            if (
                questionData?.[activeIndex]?.type === 3 && questionData?.[activeIndex]?.options.at(-1).value ||
                questionData?.[activeIndex]?.type === 4 && questionData?.[activeIndex]?.options.at(-1).value ||
                questionData?.[activeIndex]?.type === 5 && questionData?.[activeIndex]?.options.at(-1).value ||
                questionData?.[activeIndex]?.type === 9 && questionData?.[activeIndex]?.options.at(-1).value
            ) {
                const newCard = [...questionData];
                const clonedCard = structuredClone(questionData[index]); // Clonar profundamente el objeto de la tarjeta.
                newCard.splice(index + 1, 0, clonedCard);
                setQuestionData(newCard);

                setIsDuplicate(index + 1);
            } else if (
                questionData?.[activeIndex]?.type === 1 ||
                questionData?.[activeIndex]?.type === 2 ||
                questionData?.[activeIndex]?.type === 6 ||
                questionData?.[activeIndex]?.type === 7 ||
                questionData?.[activeIndex]?.type === 8
            ) {
                const newCard = [...questionData];
                const clonedCard = structuredClone(questionData[index]); // Clonar profundamente el objeto de la tarjeta.
                newCard.splice(index + 1, 0, clonedCard);
                setQuestionData(newCard);

                setIsDuplicate(index + 1);
            } else {
                toastify({
                    text: `Si el tipo de pregunta es: \nOpciones, Casillas, Despliegue o Mensaje \n El campo no debe de estar vacio.`,
                    duration: 5000,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    style: {
                        background: "linear-gradient(to left, #ebad22, #990303)",
                        borderRadius: "0.8em"
                    }
                }).showToast();
            }
        } else {
            toastify({
                text: `Debe tener Titulo para poder duplicar esta seccion.`,
                duration: 5000,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to left, #ebad22, #990303)",
                    borderRadius: "0.8em"
                }
            }).showToast();
        };
    };

    // Eliminar tarjeta de pregunta.
    const handleDeleteCard = (index) => {
        if (questionData.length > 1) {
            const newCard = questionData.filter((_, i) => i !== index);

            const clonedCard = structuredClone(newCard); // Clonar profundamente el objeto de la tarjeta.
            setQuestionData(clonedCard);

            setIsDelete(index - 1);
        } else {
            // Si solo queda una tarjeta y se elimina, resetear el activeIndex a cero
            setActiveIndex(0);
        }
    };

    return (
        <>
            <Box display='flex' margin='0 auto' position="relative">
                <Box className='flex' padding='0.5em 0 0 0'>
                    <Box sx={{ width: "40px", cursor: 'pointer' }}>
                        <ContentCopyIcon
                            color='primary'
                            sx={{ width: '20px' }}
                            onClick={() => handleDuplicateCard(index)}
                        />
                    </Box>

                    <Box sx={{ width: "40px", cursor: 'pointer' }}>
                        <DeleteOutlineIcon
                            color='red'
                            sx={{ width: '23px' }}
                            onClick={() => handleDeleteCard(index)}
                        />
                    </Box>
                </Box>

                <Box position='absolute' left='115px' top='0px'>
                    <FormControlLabel control={
                        <Switch
                            checked={questionData[index]?.mandatory}
                            onChange={(event) => handleChangeSwitch(event, index)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    } label="Obligatorio?" />
                </Box>

                <Box position='absolute' left='119.5px' top='14.5px'>
                    <Typography
                        sx={{ display: !questionData[index]?.mandatory ? 'block' : 'none', fontSize: '6px' }}
                    >
                        No
                    </Typography>
                </Box>

                <Box position='absolute' left='140px' top='14.5px'>
                    <Typography
                        sx={{ display: questionData[index]?.mandatory ? 'block' : 'none', fontSize: '7px', color: 'var(--white)' }}
                    >
                        Si
                    </Typography>
                </Box>
            </Box>
        </>
    )
}