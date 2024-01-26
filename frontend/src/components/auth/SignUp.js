import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './signinstyle.css'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import img from './insc2.jpg';
import {motion} from'framer-motion';
const validationSchema = Yup.object({
  email: Yup.string().email('Adresse e-mail invalide').required('L\'adresse e-mail est requise'),
  password: Yup.string().required('Le mot de passe est requis'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
    .required('La confirmation du mot de passe est requise'),
  firstName: Yup.string().required('Le prénom est requis'),
  lastName: Yup.string().required('Le nom de famille est requis'),
});

const SignUp = () => {
  const signUp = (values, { setSubmitting }) => {
    const authInstance = getAuth();

    createUserWithEmailAndPassword(authInstance, values.email, values.password)
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

  return (
    <motion.div className="sign-up-container" 
    initial={{opacity:0,position:'relative',left:'50%',transform:'translateX(-50%)',transition:'2s'}}
    animate={{opacity:1,top:'initial',left:'initial',transform:'translateX(0%)'}}
    exit={{opacity:0,left:'100%' }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
        }}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({ isSubmitting }) => (
          <div className="img_form">
            <Form className="form">
              <p className="form-title">Inscrivez-vous</p>
              <div className="input-container">
                <div className="name-inputs">
                  <Field type="text" name="firstName" placeholder="Prénom" />
                  <Field type="text" name="lastName" placeholder="Nom de famille" />
                </div>
                <ErrorMessage name="firstName" component="span" className="error-message" />
                <ErrorMessage name="lastName" component="span" className="error-message" />
              </div>
              <div className="input-container">
                <Field type="email" name="email" placeholder="Entrez votre adresse e-mail" />
                <ErrorMessage name="email" component="span" className="error-message" />
              </div>
              <div className="input-container">
                <Field type="password" name="password" placeholder="Entrez votre mot de passe" />
                <ErrorMessage name="password" component="span" className="error-message" />
              </div>
              <div className="input-container">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmez votre mot de passe"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="span"
                  className="error-message"
                />
              </div>
              <button type="submit" className="submit" disabled={isSubmitting}>
                S'inscrire
              </button>
              <p className="signup-link">
                Déjà un compte ? <Link onClick={()=>window.location.pathname='signin'}>Connectez-vous</Link>
              </p>
            </Form>
            <img src={img} alt="Image de fond" />
          </div>
        )}
      </Formik>
    </motion.div>
  );
};

export default SignUp;
