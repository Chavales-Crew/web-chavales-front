import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const LOGIN_URL = process.env.REACT_APP_DISCORD_OAUTH_URL;
const API_URL = process.env.REACT_APP_BACKEND_URL;

interface AuthData {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

const Discord = () => {
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [userData, setUserData] = useState<any>({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchParams] = useSearchParams();

  const accessCode = searchParams.get("code");

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authData") || "{}");

    if (authData.access_token) {
      setAuthData(authData);
    } else if (accessCode) {
      axios
        .get(`${API_URL}/discord/login`, {
          params: {
            code: accessCode,
          },
        })
        .then((response) => {
          console.log(response);
          // TODO: Store data in storage and/or context
          setAuthData(response.data);

          localStorage.setItem("authData", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [accessCode]);

  useEffect(() => {
    if (!!authData && !dataLoaded) {
      setDataLoaded(true);

      axios
        .get(`${API_URL}/discord/user`, {
          params: {
            access_token: authData.access_token,
            token_type: authData.token_type,
          },
        })
        .then((response) => {
          console.log(response);
          const { username, discriminator } = response.data;
          console.log(`Logged in as ${username}#${discriminator}`);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [authData, dataLoaded]);

  if (authData) {
    return (
      <div>
        <h1>Access Code</h1>
        <p>{accessCode}</p>
        <h1>Auth Data</h1>
        <p>{JSON.stringify(authData)}</p>
        <h1>User Data</h1>
        <p>{JSON.stringify(userData)}</p>
      </div>
    );
  }

  return (
    <div>
      <a className="btn btn-primary" href={LOGIN_URL}>
        Discord Login
      </a>
    </div>
  );
};

export default Discord;
