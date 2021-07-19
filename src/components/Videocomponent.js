import { Paper, Typography } from "@material-ui/core";

const Videocomponent = ({video:{id:{videoId},snippet:{title,channelTitle,description}}}) =>{
  //  console.log(video)
    if(!videoId){
      return <div>Loading...</div>
    }

    const videosrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <>
        <Paper elevation={6} style={{ height: "70%" }}>
            <iframe 
              frameBorder='0'
              height='100%'
              width='100%'
              title='Video player'
              src={videosrc}
            />
        </Paper>

        <Paper elevation={6} style={{ padding: "15px" }}>
          <Typography variant="h4">
            {title} - {channelTitle}
          </Typography>
          <Typography variant="subtitle1">
          {channelTitle}
          </Typography>
          <Typography variant="subtitle2">
            {description}
          </Typography>
        </Paper>
        </>
    )
}

export default Videocomponent;