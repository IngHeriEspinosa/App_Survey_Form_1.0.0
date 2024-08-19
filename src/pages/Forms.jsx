import { useState } from "react"
import { Box } from "@mui/material"
import { CreateForm } from "../components/UI/main/form/CreateForm"
import { ResponseForm } from "../components/UI/main/form/ResponseForm"

export const Forms = () => {

    // States
    const [createform] = useState(true)
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
            {
                createform && !viewResponseform &&
                <CreateForm
                    viewResponseform={viewResponseform}
                    setViewResponseform={setViewResponseform}
                />

            }
            {
                createform && viewResponseform
                &&
                <ResponseForm
                    viewResponseform={viewResponseform}
                    setViewResponseform={setViewResponseform}
                />
            }
        </Box>
    )
}