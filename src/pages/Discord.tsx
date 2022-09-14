import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';



const DiscordOauth = () => {
    /* const DISCORD_CLIENT_ID = "1004206497493946398"
    const DISCORD_CLIENT_SECRET = "-XkFmmvC-kdwoPFeBvjdQQclYASuVrMc" */
    
    

    /* const DiscordOauth2 = require("discord-oauth2");
    const oauth = new DiscordOauth2({
        clientId: DISCORD_CLIENT_ID,
        clientSecret: DISCORD_CLIENT_SECRET,
        redirectUri: "http://localhost:3000/discord",
    });

    oauth.tokenRequest({
        // clientId, clientSecret and redirectUri are omitted, as they were already set on the class constructor
        refreshToken: "D43f5y0ahjqew82jZ4NViEr2YafMKhue",
        grantType: "refresh_token",
        scope: ["identify", "email", "guilds"],
    }).then((response:object) => console.log(response)); */
    
}


const Discord = () => {
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("code");
  console.log("accesToken:", accessToken)
  if (accessToken) {
    fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${accessToken}`,
      },
    })
    .then(result => result.json())
    .then(response => {
      const { username, discriminator } = response;
      console.log(username, discriminator)
    })
    .catch(console.error);
    
  }
  return (
    <div>
      <a href= "https://discord.com/api/oauth2/authorize?client_id=1004206497493946398&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord&response_type=code&scope=identify%20email%20guilds">
        <button onClick={() => DiscordOauth()}>log in</button>
      </a>
    </div>
  )
}

export default Discord
