
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const style= {
    wrapper :''//'flex justify-center'  
}
const googleSign = () => { // החץ הוא חלופה לצורה הרגילה להגדיר פונקציה 
    // Start a sign in process for an unauthenticated user
    const provider = new GoogleAuthProvider();//provider-instance of class GoogleAuthProvider which represent user לא מאומת
    signInWithRedirect(auth,provider);  //נותנים כארגומנטים את הכתובת של השירות שמאמת ובנוסף את האובייקט שמייצג את היוסר הלא לאומת בינתיים
}                                      //  המטרה : לאמת את היוסר  
/*
/*he onClick handler in React enables you to call a function and performs an action when an element is clicked in your app.
 It is the cornerstone of any React app.  בלחיצה על הכפתור של גוגלבטון הפונקציה גוגלסיין פועלת */


                       


 const Sign = () => {
        return (
        <div className={style.wrapper}>
            <GoogleButton onClick={googleSign}/>
            </div>
            )
        }
export default Sign