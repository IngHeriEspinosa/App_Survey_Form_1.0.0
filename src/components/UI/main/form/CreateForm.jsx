import { useEffect, useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TopBar } from './TopBar';
import { useDataForm } from '../../../../global';
import { CardQuestion } from './card/CardQuestion';
import './styles/createform.css';

export const CreateForm = ({ viewResponseform, setViewResponseform }) => {
    const { formData, setFormData, setTitleForm, setDescriptionForm } = useDataForm();
    const { titleForm, descriptionForm, favoriteForm } = formData;
    const [activeIndex, setActiveIndex] = useState(null);
    const [historyUndo, setHistoryUndo] = useState(0);
    const [historyRedo, setHistoryRedo] = useState(0);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [backNextHistory, setBackNextHistory] = useState(false);

    const handleChangeTitle = (value) => {
        setTitleForm(value);
    };

    const handleChangeFavorite = () => {
        setFormData({ favoriteForm: !favoriteForm });
    };

    // Manejo de cambios en formData
    useEffect(() => {
        if (!backNextHistory) {
            const data = structuredClone(history)
            const newHistory = [...data.slice(0, historyIndex + 1), structuredClone(formData)];

            if (newHistory.length > 4) {
                newHistory.shift(); // Mantener solo los últimos 4 estados (eliminar la primera posesion)
            }
            setHistory(newHistory);
            setHistoryIndex(newHistory.length - 1);
        }

    }, [formData]);

    useEffect(() => {
        if (backNextHistory) {
            setFormData(history[historyUndo]);
        }

    }, [historyUndo]);

    useEffect(() => {
        if (backNextHistory) {
            setFormData(history[historyRedo]);
        }

    }, [historyRedo]);

    return (
        <>
            <TopBar
                viewResponseform={viewResponseform}
                setViewResponseform={setViewResponseform}
                history={history}
                historyIndex={historyIndex}
                setHistoryIndex={setHistoryIndex}
                setBackNextHistory={setBackNextHistory}
                setHistoryUndo={setHistoryUndo}
                setHistoryRedo={setHistoryRedo}
            />
            <Box
                className="flex fadeIn"
                sx={{
                    width: "100%",
                    height: "calc(100vh - 110px)",
                    flexDirection: "column",
                    justifyContent: "start",
                    gap: "0.8em",
                    background: "var(--mcBackBlue)",
                    padding: "0.5em 1em",
                }}>
                <Box
                    sx={{
                        width: "750px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "var(--white)",
                        borderRadius: "1.8em",
                        padding: "0.3em 2em",
                        marginTop: '1.5em',
                        position: 'relative',
                    }}>
                    <Box
                        className="createForm_popFavorite flex"
                        width='100%'
                        height="15px"
                        gap='0.5em'
                        justifyContent='end'
                        position='absolute'
                        top='-24px'
                        right='25px'
                    >
                        <FavoriteIcon
                            color={favoriteForm ? 'secondary' : 'blackGrey'}
                            cursor='pointer'
                            onClick={handleChangeFavorite}
                        />
                        <Typography
                            fontSize='0.7rem'
                            fontStyle='italic'
                            color='primary'
                            component='p'>
                            {favoriteForm ? 'Formulario Favorito' : 'Formulario Normal'}
                        </Typography>
                    </Box>

                    <TextField
                        id="form-title"
                        name="form-title"
                        placeholder="Titulo del formulario"
                        sx={{ "& fieldset": { border: "none" } }}
                        value={titleForm}
                        onChange={(e) => handleChangeTitle(e.target.value)}
                        autoComplete="off"
                    />

                    <TextField
                        id="form-title"
                        multiline
                        name="form-title"
                        placeholder="Descripcion del formulario"
                        sx={{ "& fieldset": { border: "none" }, marginTop: "-1em" }}
                        value={descriptionForm}
                        onChange={(e) => setDescriptionForm(e.target.value)}
                    />
                </Box>

                <Box
                    className=' flex custom-scrollbar'
                    sx={{
                        flexDirection: "column",
                        justifyContent: "start",
                        gap: "1em",
                        overflowY: 'auto',
                        padding: '0 0 14em 0',
                        width: '100%',
                    }}>
                    <CardQuestion
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                </Box>
            </Box>
        </>
    );
};
