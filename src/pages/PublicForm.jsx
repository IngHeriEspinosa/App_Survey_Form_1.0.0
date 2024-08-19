import { Box } from "@mui/material"
import { ViewMenuControl } from "../components/UI/main/form/preview_and_view/public_view/ViewMenuControl"
import { ViewForm } from "../components/UI/main/form/preview_and_view/public_view/ViewForm"

const PublicForm = () => {
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
            <ViewMenuControl />
            <ViewForm />
        </Box>
    )
}
export default PublicForm