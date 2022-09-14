import React from "react";

const DiscordOauth = () => {
  
    const DISCORD_CLIENT_ID = "1004206497493946398"
    const DISCORD_CLIENT_SECRET = "-XkFmmvC-kdwoPFeBvjdQQclYASuVrMc"
    const DiscordOauth2 = require("discord-oauth2");
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
    });
    return
}

export default DiscordOauth;
