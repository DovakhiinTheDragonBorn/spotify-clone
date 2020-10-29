import React, { useEffect } from "react";
import Login from "./Login";
import Player from "./Player";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
   // const [token, setToken] = useState(null);
   const [{ user, token, playlists }, dispatch] = useDataLayerValue();

   useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;
      if (_token) {
         dispatch({
            type: "SET_TOKEN",
            token: _token,
         });
         spotify.setAccessToken(_token);
         spotify.getMe().then((user) => {
            dispatch({
               type: "SET_USER",
               user: user,
            });
         });
      }
      // console.log("USER 👨‍🦰", user);
      // console.log("TOKEN 👉", token);

      spotify.getUserPlaylists().then((playlists) => {
         dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
         });
      });

      console.log(playlists);
   });

   return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
