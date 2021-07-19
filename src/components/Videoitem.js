import { Grid, Paper, Typography } from "@material-ui/core";

const Videoitem = ({video,onselectingvideo}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={()=>{onselectingvideo(video)}} >
                <img style={{ marginRight: "20px" }} alt='thumbnail' src={video.snippet.thumbnails.medium.url} width='150px' />
                <Typography variant="subtitle1">
                  <b>{video.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Videoitem;