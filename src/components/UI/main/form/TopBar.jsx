import { Box, Button, TextField } from '@mui/material';
import { useDataForm, usePreviewForm } from '../../../../global';
import './styles/topbar.css';

export const TopBar = ({
    viewResponseform,
    setViewResponseform,
    history,
    historyIndex,
    setHistoryIndex,
    setBackNextHistory,
    setHistoryUndo,
    setHistoryRedo
}) => {
    const { formData, setTitleForm } = useDataForm();
    const { preview, setPreview } = usePreviewForm();
    const { titleForm } = formData;

    const handleToggleOptions = (value) => {
        setViewResponseform(value);
    };

    const handleUndo = () => {
        if (historyIndex <= 0) return

        setBackNextHistory(true);
        setHistoryIndex(historyIndex - 1);
        setHistoryUndo(historyIndex - 1);
    };

    const handleRedo = () => {
        setBackNextHistory(true);

        if (historyIndex < history.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setHistoryRedo(historyIndex + 1);
        }
    };

    const handleMouseLeave = () => {
        setBackNextHistory(false)
        setHistoryUndo(-1)
        setHistoryRedo(-1)
    }

    return (
        <Box sx={{ width: "100%", height: "45px", display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "1.5em" }}>
            <Box sx={{ width: "194px", height: "31.5px", border: "solid 2px var(--greyW)", borderRadius: "2em", position: "relative" }}>
                <Button
                    variant={!viewResponseform ? 'contained' : 'outlined'}
                    className='create-form-btn-status'
                    sx={{ position: "absolute", border: "none", marginRight: "0.5em", left: "-1.5px", top: "-1.5px" }}
                    onClick={() => handleToggleOptions(false)}
                >
                    Preguntas
                </Button>

                <Button
                    variant={viewResponseform ? 'contained' : 'outlined'}
                    className='create-form-btn-status'
                    sx={{ position: "absolute", border: "none", left: "102px", top: "-1.5px" }}
                    onClick={() => handleToggleOptions(true)}
                >
                    Respuestas
                </Button>
            </Box>

            <Box width="350px" padding="0">
                <TextField
                    variant="filled"
                    placeholder="Form title"
                    value={titleForm}
                    disabled={!!viewResponseform}
                    sx={{ width: "100%" }}
                    InputProps={{
                        style: {
                            height: '41px',
                            backgroundColor: 'var(--white)',
                            textAlign: 'center',
                            fontSize: '0.8rem'
                        },
                        disableUnderline: true,
                        inputProps: {
                            autoComplete: 'off',
                            style: {
                                padding: '2px 5px',
                                textAlign: 'center',
                            },
                        },
                    }}
                    onChange={(e) => setTitleForm(e.target.value)}
                />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.7em" }}>
                <Box
                    className={`create-form-preview `}
                    onClick={handleUndo}
                    onMouseLeave={handleMouseLeave}
                >
                    <picture>
                        <img src='../../../../flechaDireccion.png' width="100%" style={{ transform: 'scaleX(-1) scaleY(-1)' }} />
                    </picture>
                </Box>

                <Box
                    className={`create-form-preview`}
                    onClick={() => setPreview(true)}
                >
                    <picture>
                        <img src='../../../../ojo.png' width="100%" />
                    </picture>
                </Box>

                <Box
                    className={`create-form-preview `}
                    onClick={handleRedo}
                    onMouseLeave={handleMouseLeave}
                >
                    <picture>
                        <img src='../../../../flechaDireccion.png' width="100%" style={{ transform: 'scaleY(-1)' }} />
                    </picture>
                </Box>
                <Button variant='contained' sx={{ width: "100px", height: "28px" }}>Enviar</Button>
            </Box>
        </Box>
    );
};
