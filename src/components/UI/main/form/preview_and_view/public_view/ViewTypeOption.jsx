import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import toastify from "toastify-js";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';

export const ViewTypeOption = ({ title = "Elige una opcion", type = 3, values = [] }) => {

    // REF
    const fileInputRef = useRef();

    // STATES
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [options, setOptions] = useState([]);
    const [check, setCheck] = useState([]);
    const [questionWithCheck, setquestionWithCheck] = useState([]);
    const [image, setImage] = useState(null);
    const [selectedTime, setSelectedTime] = useState(dayjs());

    // METHODS
    const handleChangeOption = (event) => {
        console.log(event.target.value);
        setOptions(event.target.value)
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(dayjs(newDate));
        console.log('Selected Date:', newDate.format('YYYY-MM-DD'));
    };

    const handleChangeCheck = (index) => {
        const check = [...questionWithCheck][index]?.check
        const newCheck = [...questionWithCheck]
        newCheck[index].check = !check

        setquestionWithCheck(newCheck)
        console.log('Check: ', questionWithCheck[index]);
    }

    // Subir una imagen y luego mostrarla
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            toastify({
                text: `Por favor sube una imagen.`,
                duration: 5000,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to left, #ebad22, #990303)",
                    borderRadius: "0.8em"
                }
            }).showToast();
        }
    };

    // Eliminar la imagen subida
    const handleImageDelete = () => {
        setImage((prevStatus) => prevStatus = null);

        // Restablecer el valor del input
        fileInputRef.current.value = null;
    };

    // Capturar la hora
    const handleTimeChange = (newTime) => {
        setSelectedTime(newTime);
        console.log('Selected Time:', newTime.format('HH:mm'));
    };

    const handleChangeText = (event) => {

    }

    // EFFECT
    useEffect(() => {
        // Mapear las preguntas y setear los valores cuando sea check.
        if (type === 4) {
            const result = []

            for (let i = 0; i < values.length; i++) {
                result.push({ ...values[i], check: false })
            }

            setquestionWithCheck(result)
        }

    }, [])

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5em',
                paddingTop: '0.5em'
            }}
        >

            {
                type === 1 || type === 2 &&
                <TextField
                    id="12"
                    label="Escribe tu respuesta"
                    variant="outlined"
                    type="text"
                    fullWidth
                    multiline
                    sx={{
                        margin: '1.2em'
                    }}
                    onChange={handleChangeText}
                >

                </TextField>
            }

            {
                type === 3 &&
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={1}
                        name="radio-buttons-group"
                        onChange={handleChangeOption}
                    >
                        {values?.map((item, index) => (
                            <FormControlLabel
                                key={index}
                                value={item.id}
                                control={<Radio />}
                                label={item.value} />
                        ))}
                    </RadioGroup>
                </FormControl>
            }

            {
                type === 4 &&
                <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                    <FormLabel id="demo-radio-buttons-group-label">
                        {"Elige una o varias opciones"}
                    </FormLabel>
                    <FormGroup>
                        {
                            questionWithCheck?.map((item, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={item.check}
                                            onChange={() => handleChangeCheck(index)}
                                            name={item.value}
                                        />
                                    }
                                    label={item.value}
                                />
                            ))
                        }
                    </FormGroup>
                </FormControl>
            }

            {
                type === 5 &&
                <FormControl
                    sx={{
                        width: '70%',
                        padding: '1.2em 0.5em'
                    }}
                >
                    <TextField
                        select
                        color="primary"
                        id="demo-simple-select"
                        value={options}
                        label={title}
                        onChange={handleChangeOption}
                    >
                        {values?.map((item, index) => (
                            <MenuItem
                                key={index}
                                value={item.id}>
                                {item.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            }

            {
                type === 6 &&
                values?.map((item, index) => (
                    <Box
                        key={index}
                        width='100%'
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        padding='1em 0'
                    >
                        <Box
                            width='30%'
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                        >
                            <input
                                ref={fileInputRef}
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="image-upload"
                                type="file"
                                onChange={handleImageUpload}
                            />
                            {!image && (
                                <label htmlFor="image-upload">
                                    <Button
                                        variant="contained"
                                        component="span"
                                        startIcon={<ImageIcon />}
                                        sx={{
                                            width: '175px'
                                        }}
                                    >
                                        Subir imagen
                                    </Button>
                                </label>
                            )}

                            {image && (
                                <Button
                                    variant="contained"
                                    component="span"
                                    startIcon={<DeleteIcon />}
                                    onClick={handleImageDelete}
                                    sx={{
                                        width: '175px',
                                        fontSize: '0.8rem',
                                        paddingY: '1em',
                                        backgroundColor: 'var(--secondary)',
                                        marginTop: '1em',
                                        ':hover': {
                                            backgroundColor: 'var(--sbSecondary)',
                                            transition: 'all 0.3s ease-in-out',
                                        },
                                    }}
                                >
                                    Eliminar imagen
                                </Button>
                            )}
                        </Box>

                        <Box
                            width='70%'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {image && (
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    style={{
                                        maxWidth: '450px',
                                        height: 'auto'
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                ))
            }

            {
                type === 7 &&
                values?.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: '100%',
                            '& .MuiDateCalendar-root': {
                                height: '100%',
                            },
                            '& .MuiDayCalendar-slideTransition': {
                                minHeight: '205px !important', // Ajuste de altura del contenedor de los dias
                            },
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticDatePicker
                                orientation="landscape"
                                displayStaticWrapperAs="desktop"
                                value={dayjs(selectedDate)}
                                onChange={handleDateChange}
                                showToolbar={false}
                            />
                        </LocalizationProvider>
                    </Box>
                ))
            }

            {
                type === 8 &&
                values?.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: '100%',
                            '& .MuiTimePicker-root': {
                                height: '100%',
                            },
                            '& .MuiClock-root': {
                                minHeight: '200px !important', // Ajuste de altura del contenedor de la hora
                                padding: '0.5em 0'
                            },
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticTimePicker
                                orientation="landscape"
                                displayStaticWrapperAs="desktop"
                                value={selectedTime}
                                onChange={handleTimeChange}
                                showToolbar={false}
                            />
                        </LocalizationProvider>
                    </Box>
                ))
            }

            {
                type === 9 &&
                values?.map((item, index) => (
                    <Box
                        key={index}
                        width='100%'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        padding='0.5em 0 1.5em'
                    >
                        <Typography
                            fontWeight='400'
                            letterSpacing='0.5px'
                        >
                            {item.value}
                        </Typography>
                    </Box>
                ))
            }

        </Box >
    )
}