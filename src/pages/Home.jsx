import { useState } from "react"
import { Box } from "@mui/material"

import Navbar from "../components/UI/navbar/Navbar"
import { Forms } from "./Forms"


const Home = ({ setPreview }) => {

    // States
    const [createform, setCreateform] = useState(false)
    const [viewResponseform, setViewResponseform] = useState(false)

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "start"
            }}
        >
            <Navbar />
            {/* <Welcome setCreateform={setCreateform} /> */}
            <Forms />

        </Box>
    )
}
export default Home