// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";

// export const useSignup = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);
//   const {dispatch} = useAuthContext()

//   const signup = async (email, password) => {
//     setIsLoading(true);
//     setError(null);

//     const response = await fetch("/api/user/signup", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//       setIsLoading(false);
//     }

//     if (response.ok) {
//       //save the user to local storage
//       localStorage.setItem("user", JSON.stringify(json));
//             //update the auth context
//       dispatch({type:'LOGIN', payload:json})

//       setIsLoading(false);

//     }
//   }
//   return { signup, isLoading, error}
// };


// //then export to Signup.js component


import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://workoutbuddy-59wj.onrender.com/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
