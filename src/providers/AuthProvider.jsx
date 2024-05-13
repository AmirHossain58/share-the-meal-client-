/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GithubAuthProvider
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import axios from 'axios'
import useAxiosSecure from '../hooks/useAxiosSecure'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const {axiosSecure}=useAxiosSecure()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const signInWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  const logOut = async () => {
    setLoading(true)
    // const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
    //   withCredentials: true,
    // })
    // console.log(data)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
        setLoading(false);
        // if user exists then issue a token
        if (currentUser) {
            axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true })
                .then(res => {
                })
        }
        else {
            axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, {
                withCredentials: true
            })
                .then(res => {
                    console.log(res.data);
                })
        }
    });
    return () => {
        return unsubscribe();
    }
}, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    signInWithGithub
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider