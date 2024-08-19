import { Box } from "@mui/material"

import { PreviewMenuControl } from "../components/UI/main/form/preview_and_view/preview/PreviewMenuControl"
import { PreviewBody } from "../components/UI/main/form/preview_and_view/preview/PreviewBody"

export const PreviewForm = () => {
    return (
        <Box
            className='custom-scrollbar'
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'var(--mcBackBlue)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1em',
            }}
        >
            <PreviewMenuControl />
            <PreviewBody />
        </Box>
    )
}