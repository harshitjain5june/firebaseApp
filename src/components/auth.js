import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth"
import React, { useState } from 'react';

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(auth?.currentUser?.email)
    const SignIn = async (e) => {
        e.preventDefault();
        try{

            await createUserWithEmailAndPassword(auth, email, password);

        }
        catch(error) {
            console.error(error);
        }

    }

    const SignInWithGoogle = async (e) => {
        e.preventDefault();
        try{

            await signInWithPopup(auth, googleProvider);

        }
        catch(error) {
            console.error(error);
        }

    }

    const logout = async (e) => {
        e.preventDefault();
        try{

            await signOut(auth);

        }
        catch(error) {
            console.error(error);
        }

    }

    return (
        <div>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button onClick={(e)=>SignIn(e)}>Sign In</button>
            <button onClick={(e)=>SignInWithGoogle(e)}>Sign In with Google</button>
            <button onClick={(e)=>logout(e)}>logout</button>


        </div>
    );
};