import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#175e7b",
        },
        secondary: {
            main: "#ebad22",
        },
        white: {
            main: "#ffff"
        },
        red: {
            main: "#7c0000"
        },
        greyW: {
            main: "#d6d5d5dc"
        },
        blackGrey: {
            main: "#3d3845"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                // disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: "2em",
                    cursor: "pointer",
                    boxShadow: "none"
                },

                contained: {
                    padding: "0.7em 1em",
                    backgroundColor: "#175e7b",

                    ':hover': {
                        backgroundColor: '#1a7ea5',
                        transition: 'all 0.3s ease-in-out',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: "#d6d5d5dc",
                        color: "#ffffff"
                    },
                },

                outlined: {
                    borderColor: "var(--greyW)",
                    padding: "0em 1em",

                    ':hover': {
                        transition: 'all 0.1s ease',
                    },
                    ':focus': {
                        border: "solid 2px #1a7ea5",
                    },

                    '&.Mui-disabled': {
                        borderColor: "#d6d5d5dc",
                        color: "#d6d5d5dc",
                    },
                },
            }
        },

        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    "&[data-focus='true']": {
                        backgroundColor: 'transparent',
                    },
                    '&[aria-selected="true"]': {
                        backgroundColor: 'transparent',
                    },
                },
                popper: {
                    '& .MuiAutocomplete-paper': {
                        '& .MuiAutocomplete-option': {
                            '&[data-focus="true"]': {
                                backgroundColor: 'transparent',
                            },
                            '&[aria-selected="true"]': {
                                backgroundColor: 'transparent',
                            },
                        },
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#175e7b',
                    },
                },
            },
        },
    }
})
