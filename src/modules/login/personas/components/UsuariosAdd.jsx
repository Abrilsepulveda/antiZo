import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UsuarioAdd from "../components/usuarioAdd";
import UsuarioList from "../components/usuarioList";
import useUsuario from "../hooks/useUsuario";
import firebase from "firebase/app";
import "firebase/firestore";