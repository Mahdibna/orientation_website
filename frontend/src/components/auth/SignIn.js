import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import './signinstyle.css'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import img from './insc2.jpg';
import {motion} from'framer-motion';
const validationSchema = Yup.object({
  nomUtilisateur: Yup.string().required('Le nom d\'utilisateur est requis'),
  email: Yup.string().email('Adresse e-mail invalide').required('L\'adresse e-mail est requise'),
  motDePasse: Yup.string().required('Le mot de passe est requis'),
});
const SignIn = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const signIn = (values, { setSubmitting }) => {
    signInWithEmailAndPassword(auth, values.email, values.motDePasse)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Déconnexion réussie");
        setAuthUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <motion.div className="sign-in-container"
    initial={{opacity:0,position:'relative',left:'50%',transform:'translateX(-50%)',transition:'2s'}}
    animate={{opacity:1,top:'initial',left:'initial',transform:'translateX(0%)'}}
    exit={{opacity:0,left:'100%' }}>

      {authUser ? (
        <>
          <p>{`Connecté en tant que ${authUser.email}`}</p>
          <button onClick={userSignOut}>Déconnexion</button>
        </>
      ) : (
        <Formik
          initialValues={{ nomUtilisateur: '', email: '', motDePasse: '' }}
          validationSchema={validationSchema}
          onSubmit={signIn}
        >
          {({ isSubmitting }) => (
            <div className="img_form">
              <Form className="form">
                <p className="form-title">Connectez-vous à votre compte</p>
                <div className="input-container">
                  <Field type="text" name="nomUtilisateur" placeholder="Entrez votre nom d'utilisateur" />
                  <ErrorMessage name="nomUtilisateur" component="span" className="error-message" />
                </div>
                <div className="input-container">
                  <Field type="email" name="email" placeholder="Entrez votre adresse e-mail" />
                  <ErrorMessage name="email" component="span" className="error-message" />
                </div>
                <div className="input-container">
                  <Field type="password" name="motDePasse" placeholder="Entrez votre mot de passe" />
                  <ErrorMessage name="motDePasse" component="span" className="error-message" />
                </div>
                <button type="submit" className="submit" disabled={isSubmitting}>
                  Se connecter
                </button>
                <p className="signup-link">
                  Pas de compte ?
                  <Link onClick={()=>window.location.pathname='signup'}>Inscrivez-vous</Link>
                </p>
              </Form>
              <img src={img} alt="Image de fond" />
            </div>
          )}
        </Formik>
      )}
    </motion.div>
  );
};

export default SignIn;
