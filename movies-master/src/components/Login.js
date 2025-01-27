import React from 'react';
import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // useState Hook
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setsuccessMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   // const auth = getAuth();
   // console.log(email);

    const handelLoginForm = () =>{
        setSignInForm(!isSignInForm);
    };

    const handelButtonclick = () => {
       // Form validations. (SignIN and SugnUP)
       // E-mail (@, .sd, length 2,....) \w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*
       // Pas :(6, Captial, @$&, ....)
       // HexaCode - Pattrrens, 
      // console.log(email.current.value);
      // console.log(password.current.value);
       const message = checkValidData(email.current.value, password.current.value );
       setErrorMessage(message);
       if(message) return;
       // API 1 ) : createUserWithEmailAndPassword.
       // API 2 ) : signInWithEmailAndPassword.

       if(isSignInForm) {
         // 'signInWithEmailAndPassword')
         signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/Allmovies");
                
                console.log(user);
              // setsuccessMessage('You are loggin successfylly!');

              // we will store user object into userSlice.
            //  dispatch(adduser(user));

              // we will navigate user
             // navigate("/allmovies");
              

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + " - " + errorMessage );
                setErrorMessage(errorCode + " - " + errorMessage);
            });
       } else {
        // 'createUserWithEmailAndPassword'
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // Update Profile data - will API Here.
          updateProfile(auth.currentUser,{
            displayName: fullname.current.value, 
            photoURL: "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
          } ).then( () => {
            setsuccessMessage('You are registred successfully!');
            email.current.value = '';
            password.current.value = '';
           dispatch(adduser(user));
          }) .catch( (error) => {
              console.log(error);
          })
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage );
         // console.log(errorCode + " - " + errorMessage );

          // ..
        });
          
       }


    }
    return (
        <div>
            <div className='background-container'>
                <div className='form-container'>
                  <form onSubmit={ (e) => e.preventDefault()}>
                    <h2>{isSignInForm ? 'Sign IN' : 'Sign Up'}</h2>
                    { !isSignInForm && (
                        <div className='mb-3'>
                        <input type='text'  name='fullname' ref={fullname} className='form-control' placeholder='Enter fullname'/>
                    </div>
                    )}
                     <div className='mb-3'>
                       <input type='text' name='email' ref={email} className='form-control' placeholder='Enter E-mail'/>
                     </div>
                     <div className='mb-3'>
                       <input type='password' name='password' ref={password} className='form-control' placeholder='Enter Password'/>
                     </div>
                     {errorMessage && (
                        <div className='alert alert-danger'>
                        <p>{errorMessage}</p>
                        </div>
                     )}
                     <button onClick={handelButtonclick} className='btn-movie' type='submit'>{isSignInForm ? 'Sign IN' : 'Sign Up'}</button>
                     <p onClick={handelLoginForm}>{isSignInForm ? 'New to movies ? SignUP here' : 'Alredy registred ? Login'}.</p>
                  </form>
                  {successMessage && (
                     <div class="alert alert-success" role="alert">
                        {successMessage}
                     </div>
                  )}
                  
                </div>
            </div>
        </div>
    );
};

export default Login;