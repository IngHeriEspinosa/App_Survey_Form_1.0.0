
import { useState } from 'react'
import { Box, Typography, TextField, MenuItem, FormControlLabel } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import Switch from '@mui/material/Switch';

import { TopBar } from './TopBar'
import './styles/createform.css'
import { useDataForm } from '../../../../global';


export const CreateForm = () => {

    const optionM = [
        { id: 1, text: "Texto corto" }, { id: 2, text: "Texto Largo" }, { id: 3, text: "Varias Opciones" }, { id: 4, text: "Casillas" }, { id: 5, text: "Desplegable" }, { id: 6, text: "Subir Archivo" }, { id: 7, text: "Fecha" }, { id: 8, text: "Hora" }
    ]

    const {
        formTitle,
        option,
        questionTitle,
        descriptionForm,
        mandatoryQuetion,
        setFormTitle,
        setOption,
        setQuestionTitle,
        setDescriptionForm,
        setMandatoryQuetion,
    } = useDataForm()

    const [formData, setFormData] = useState([{ question: { id: 1, title: "title", option: { id: 1, name: "hola" } } }])

    const handleChangeTitle = (value, option) => {
        if (option === 1) {
            setFormTitle(value)
        }
        if (option === 2) {
            setQuestionTitle(value)
        }
    }

    const handleChangeSwitch = (event) => {
        setMandatoryQuetion(event.target.checked);
    }

    return (
        <>
            <TopBar />
            <Box
                className="flex"
                sx={{
                    width: "100%",
                    height: "85vh",
                    flexDirection: "column",
                    justifyContent: "start",
                    gap: "1em",
                    background: "var(--mcBlackBlue)",
                    padding: "1em"
                }}>
                <Box
                    sx={{
                        width: "600px",
                        borderRadius: "1.8em",
                        padding: "0.5em 2em",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "var(--white)"
                    }}>
                    <TextField
                        id="form-title"
                        name="form-title"
                        placeholder="Titulo del formulario"
                        sx={{ "& fieldset": { border: "none" } }}
                        value={formTitle}
                        onChange={(e) => handleChangeTitle(e.target.value, 1)}
                        autoComplete="off"
                    />

                    <TextField
                        id="form-title"
                        multiline name="form-title"
                        placeholder="Descripcion del formulario"
                        sx={{ "& fieldset": { border: "none" }, marginTop: "-1em" }}
                        value={descriptionForm}
                        onChange={(e) => setDescriptionForm(e.target.value)}
                    />
                </Box>

                <Box position='relative'>
                    <Box
                        sx={{
                            width: "600px",
                            borderRadius: "1.8em",
                            padding: "1em",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            backgroundColor: "var(--white)"
                        }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                            <TextField
                                id="question-title"
                                name="question-title"
                                placeholder="Titulo de la pregunta"
                                sx={{ "& fieldset": { border: "none" }, minWidth: "300px" }}
                                value={questionTitle}
                                onChange={(e) => handleChangeTitle(e.target.value, 2)}
                            />

                            <TextField
                                id="question-select"
                                name="question-select"
                                select
                                defaultValue="3"
                                placeholder="Titulo de la pregunta"
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
                                onChange={(e) => setOption(e.target.value)}
                            >
                                {
                                    optionM.map((item, i) => (
                                        <MenuItem key={i} value={item.id}>
                                            {item.text}
                                        </MenuItem>
                                    ))
                                }
                            </TextField>

                        </Box>
                        <Box sx={{ display: "flex", gap: "0.1em", alignItems: "center", paddingLeft: "1em" }}>
                            {
                                option === 1
                                    ? <Typography sx={{ color: '#dadada', borderBottom: "1px dashed #dadada", marginBottom: "1em" }}>
                                        "Respuesta corta".
                                    </Typography>
                                    : option === 2
                                        ? <Typography sx={{ color: '#dadada', borderBottom: "1px dashed #dadada", marginBottom: "1em" }}>
                                            "Respuesta larga".
                                        </Typography>
                                        : option === 3
                                            ? <Box sx={{ width: "20px", height: "20px", border: "1px solid #dadada", borderRadius: "50%" }} />
                                            : option === 4
                                                ? < Box sx={{ width: "20px", height: "20px", border: "1px solid #dadada" }} />
                                                : option === 5
                                                    ? <Typography sx={{ color: '#dadada', marginBottom: "1em" }}>
                                                        {formData[0].question.option.id}.
                                                    </Typography>
                                                    : option === 6
                                                        ? <Typography sx={{ color: '#dadada', borderBottom: "1px dashed #dadada", marginBottom: "1em" }}>
                                                            Los archivos se subiran en una base de datos temporal, estos tendran una vigencia de 1 año.
                                                        </Typography>
                                                        : option === 7
                                                            ? <Typography sx={{ color: '#dadada', borderBottom: "1px dashed #dadada", marginBottom: "1em" }}>
                                                                "Mes, dia, año".
                                                            </Typography>
                                                            : option === 8
                                                                ? <Typography sx={{ color: '#dadada', borderBottom: "1px dashed #dadada", marginBottom: "1em" }}>
                                                                    "Hora". <AccessTimeIcon />
                                                                </Typography>
                                                                : ""
                            }

                            <TextField
                                id="question-selection"
                                name="question-selection"
                                placeholder="option"
                                sx={{ "& fieldset": { border: "none" }, display: (option === 3 || option === 4) ? 'block' : 'none' }}
                            />

                        </Box>
                        <Box display='flex' margin='0 auto' position="relative">
                            <Box className='flex' padding='0.5em 0 0 0'>
                                <Box sx={{ width: "40px", cursor: 'pointer' }}>
                                    <ContentCopyIcon color='primary' sx={{ width: '20px' }} />
                                </Box>
                                <Box sx={{ width: "40px", cursor: 'pointer' }}>
                                    <DeleteOutlineIcon color='red' sx={{ width: '23px' }} />
                                </Box>
                            </Box>
                            <Box position='absolute' left='115px' top='0px'>
                                <FormControlLabel control={
                                    <Switch
                                        checked={mandatoryQuetion}
                                        onChange={handleChangeSwitch}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                } label="Obligatorio?" />
                            </Box>

                            <Box position='absolute' left='119.5px' top='14.5px'>
                                <Typography sx={{ display: !mandatoryQuetion ? 'block' : 'none', fontSize: '6px' }}>No</Typography>
                            </Box>
                            <Box position='absolute' left='140px' top='14.5px'>
                                <Typography sx={{ display: mandatoryQuetion ? 'block' : 'none', fontSize: '7px', color: 'var(--white)' }}>Si</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        gap='0.8em'
                        paddingLeft='0.5em'
                        position='absolute'
                        top='30px'
                        left='102%'
                        backgroundColor='var(--primary)'
                        padding='0.6em'
                        borderRadius="1em"
                    >
                        <AddCircleOutlineIcon color='white' cursor='pointer' />
                        <ImageIcon color='white' cursor='pointer' />
                        <VideocamIcon color='white' cursor='pointer' />
                    </Box>
                </Box>
            </Box >
        </>
    )
}