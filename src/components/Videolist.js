import { Grid } from "@material-ui/core";
import Videoitem from "./Videoitem";

const Videolist = ({videos,onselectingvideo}) =>{
    return (
        <Grid container spacing={10}>
            {
                videos.map((video)=>{
                    return (
                        <>
                        <Videoitem 
                         key={video.id.videoId}
                         video={video}
                         onselectingvideo={onselectingvideo}
                        />
                        </>
                    )
                })
            }
        </Grid>
    )
}

export default Videolist;