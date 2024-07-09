import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export const CardViewForm = ({ formFavorite, titulo, nombre, respuestas, fav }) => {


    return (
        <Card sx={{ width: "290px", height: "320px", cursor: "pointer", padding: 0, borderRadius: "1em" }}>
            <CardMedia sx={{ width: "100%", height: "130px" }} image="../../../../img-form.jpg" title="Formulario" />

            <CardContent sx={{ maxHeight: "140px", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0.5em 1em !important" }} >
                <Box sx={{ height: "100px" }}>
                    <Typography gutterBottom variant="h6" component="h6" sx={{ lineHeight: "25px" }}>
                        {titulo}
                    </Typography>
                    <Typography variant="caption" component="p" sx={{ marginTop: "-5px", color: "var(--greyM)" }}>{nombre}</Typography>

                </Box>
                <Typography variant="body2" color="primary" sx={{ alignSelf: "end" }}>
                    {respuestas}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ height: "50px" }}>
                <IconButton onClick={() => fav(!formFavorite)} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}