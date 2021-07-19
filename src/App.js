import { Grid } from "@material-ui/core";
import Searchbar from "./components/Searchbar";
import Videolist from "./components/Videolist";
import Videocomponent from "./components/Videocomponent";

import youtubeapi from "./api/youtubeapi";
import { useState } from "react";

function App() {

  const [videos,setVideos]=useState([]);
  const [openvideo,setOpenvideo]=useState({id:{},snippet:{}});

  async function handlesearch(searchterm){
    const {data : {items:videos} } = await youtubeapi.get('search',{
      params:{
        key:'AIzaSyAsuvkUcFfWmqOfGxTCE-IrtSdHlEKEKec',
        part: "snippet",
        maxResults: 5,
        q: searchterm,
      }
    });
    
    setVideos(videos);
    setOpenvideo(videos[0]);
  }

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Searchbar onSearch={handlesearch} />
        </Grid>
        <Grid item xs={8}>
          <Videocomponent video={openvideo} />
        </Grid>
        <Grid item xs={4}>
          <Videolist videos={videos} onselectingvideo={setOpenvideo} />
        </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
