import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from "../utils/firebase";
import {  signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { adduser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector( (store) =>  store.user);
    const handelSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // We will remove the user from store.
            dispatch(removeUser());
            navigate("/");

          }).catch((error) => {
            // An error happened.
            console.log(error);
          });

    };

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(adduser({uid: user.uid, displayName: user.displayName, photoURL:user.photoURL} ));
            navigate("/Allmovies");
          } else {
            dispatch( removeUser());
            navigate("/");
          }
        });
        
      },[]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black navbar-dark fixed-top">
              <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <a className="nav-link">Login Page</a> */}
                        <Link to="/" className="nav-link">Login Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/allmovies" className="nav-link">All Movies 2</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/abcd" className="nav-link">Abcd Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tvshows" className="nav-link">Tv shows</Link>
                    </li>
                    <li className='nav-item'>
                    <a className='nav-link'>{user?.displayName}</a>
                    </li>
                   <li className='nav-item'>
                        <img src={user?.photoURL} height={50}/>
                        <button  onClick={handelSignout} className='btn btn-warning'>SignOut</button>
                   </li>
                </ul>
              </div>
            </nav>
        </div>
    );
};

export default Header;