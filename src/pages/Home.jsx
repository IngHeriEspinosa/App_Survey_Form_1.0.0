import { Box } from "@mui/material"
import Navbar from "../components/UI/navbar/Navbar"

import { Welcome } from "../components/UI/main/home/Welcome"
import { RecentForms } from "../components/UI/main/home/RecentForms"
import { CreateForm } from "../components/UI/main/form/CreateForm"
import { useCreateForm, useResponseForm } from "../global"
import { ResponseForm } from "../components/UI/main/form/ResponseForm"


const Home = () => {

    // Variables
    const { formCreate } = useCreateForm()
    const { formResponse } = useResponseForm()

    console.log(formResponse);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "start" }}>
            <Navbar />

            {
                formCreate && !formResponse
                    ?
                    <CreateForm />
                    : formCreate && formResponse
                        ?
                        <ResponseForm />
                        :
                        <>
                            <Welcome />
                            <RecentForms />
                        </>
            }
        </Box>
    )
}
export default Home