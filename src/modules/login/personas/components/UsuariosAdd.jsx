import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UsuarioAdd from "../components/usuarioAdd";
import UsuarioList from "../components/usuarioList";
import useUsuario from "../hooks/useUsuario";
import firebase from "firebase/app";
import "firebase/firestore";

const UsuarioApp = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const [usuarios, setUsuarios] = useState([]);
    const { handleSubmit } = useUsuario();
  
    useEffect(() => {
      const fetchUsuarios = async () => {
        if (isAuthenticated) {
          try {
            const snapshot = await firebase.firestore().collection("usuarios").get();
            const usuariosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsuarios(usuariosData);
          } catch (error) {
            console.error("Error al cargar usuarios: ", error);
          }
        }
      };
      fetchUsuarios();
    }, [isAuthenticated]);

    const handleAddUsuario = async (nuevoUsuario) => {
        if (isAuthenticated) {
          try {
            await handleSubmit(nuevoUsuario);
            // Fetch updated usuarios list after adding a new user
            const snapshot = await firebase.firestore().collection("usuarios").get();
            const usuariosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsuarios(usuariosData);
          } catch (error) {
            console.error("Error al agregar usuario: ", error);
          }
        } else {
          loginWithRedirect();
        }
      };