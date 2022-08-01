import { React, useState } from 'react';
import fetchResource from './fetchResource.js';

import XImage from "./equis.jpg";
import "./LogIn.css";

const API_TEST_ADDRESS = "http://localhost:3001";

async function checkUsername(username) {
  let response = null;

  try {
    response = await fetchResource(
      API_TEST_ADDRESS + "/api/existsStudent",
      {
        username: username
      }
    );
  } catch (err) {
    throw new Error("", { cause: err });
  }

  return response.exists;
}


async function authenticateSignUp(username) {
  let exists = null;

  try {
    exists = await checkUsername(username);
  } catch (err) {
    throw new Error("", { cause: err });
  }

  return !exists;
}

async function authenticateSignIn(username, password) {
  let exists = null;

  try {
    exists = await checkUsername(username);
  } catch (err) {
    throw new Error("", { cause: err });
  }

  if (!exists)
    return false;

  let student = null;

  try {
    student = await fetchResource(
      API_TEST_ADDRESS + "/api/getStudent",
      {
        username: username
      }
    );
  } catch (err) {
    throw new Error("", { cause: err });
  }

  return (password === student.password);
}

function ErrorMessage(props) {
  const message = props.onSignUp ?
    "Ya hay una cuenta con ese nombre de usuario" :
    "Nombre de usuario o contraseña incorrectos";

  return (
    <div className={props.onError ? null : "invisible"}>
      <img
        src={XImage}
        alt=""
      />

      <span>{message}</span>
    </div>
  );
}

function ModeSelector(props) {
  return (
    <div>
      <button
        className={
          props.onSignUp ?
            "ModeSelector-selected" :
            null
        }
        onClick={() => props.onClick(true)}
      >
        Crear cuenta
      </button>

      <button
        className={
          !props.onSignUp ?
            "ModeSelector-selected" :
            null
        }

        onClick={() => props.onClick(false)}
      >
        Iniciar sesión
      </button>
    </div>
  );
}

function Input(props) {
  return (
    <div>
      <label>
        {props.label}

        <input
          value={props.text}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
    </div>
  );
}

function LogInButton(props) {
  const message = props.onSignUp ?
    "Crear cuenta" :
    "Iniciar sesión";

  return (
    <div>
      <button onClick={props.onClick}>
        {message}
      </button>
    </div>
  );
}

function LogInBox(props) {
  return (
    <div>
      <ModeSelector
        onSignUp={props.onSignUp}
        onClick={props.onModeChange}
      />

      <Input
        label="Nombre de usuario: "
        text={props.username}
        placeholder="UnicornioFantastico123"
        onChange={props.onUsernameChange}
      />

      <Input
        label="Contraseña: "
        text={props.password}
        onChange={props.onPasswordChange}
      />

      <LogInButton
        onSignUp={props.onSignUp}
        onClick={props.onLogIn}
      />
    </div>
  );
}

function LogIn() {
  const [onSignUp, setOnSignUp] = useState(true);
  const [onError, setOnError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onModeChange(newOnSignUp) {
    if (newOnSignUp !== onSignUp)
      setOnError(false);

    setOnSignUp(newOnSignUp);
  }

  async function onLogIn() {
    let result;

    try {
      if (onSignUp)
        result = await authenticateSignUp(username);
      else
        result = await authenticateSignIn(username, password);
    } catch (err) {
      console.log(err);
    }

    setOnError(!result);
  }

  return (
    <div>
      <ErrorMessage
        onSignUp={onSignUp}
        onError={onError}
      />

      <LogInBox
        onSignUp={onSignUp}
        username={username}
        password={password}
        onModeChange={onModeChange}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onLogIn={onLogIn}
      />
    </div>
  );
}

export default LogIn;