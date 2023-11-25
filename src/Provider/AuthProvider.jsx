import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
// import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider




    /**---------------------**---JWT TOKEN---**-----------------------**/
    const axiosPublic = useAxiosPublic();







    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)










    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, Photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: Photo
        })
    }


    const signIN = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }











    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log('Current User', currentUser);
            if (currentUser) {
                // Get Token And Store Client













                /**---------------------**---JWT TOKEN Start---**-----------------------**/

                const userInfo = {
                    email: currentUser.email,
                }

                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false);
                        }
                    })

            }
            else {
                //TODO : Remove Token (if toke stored in the client side : Locall Storage , Caching , in memory)
                localStorage.removeItem('access-token',)
                setLoading(false);


                /**---------------------**---JWT TOKEN Start---**-----------------------**/











            }

        });
        return () => {
            return unsubscribe();
        }
    }, [auth, axiosPublic])



    const authInfo = {
        user,
        loading,
        createUser,
        signIN,
        logOut,
        updateUserProfile,
        googleSignIn,
        setUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;