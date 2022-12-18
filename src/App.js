import React from "react";
import Navbar from "./components/Navbar";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat'



const style = {
  appContainer : 'max-w-[728px] mx-auto text-center', /// מצמצם את החלון של הצאט 
  sectionContainer:'flex flex-col h-[90vh] bg-gray-100 mt-10 Shadow-xl border relative' // location of the most outer window from up to down 
} 



export default function App() {
/*הפונקציה נאבמבר נמצאת בתוך הסקשון ולא מחוץ כדי שהשינויים שאנחנו מוסיפים כמו חלון אפור וכיתוב צאט עליו יהיה על גבי הסקשון
  ולא מעליו */
 
const [user] = useAuthState(auth) //const [user, loading, error] = useAuthState(auth, options);
// return user: The auth.UserCredential if logged in, or null if not
//auth.UserCredential= A structure containing a User, the OperationType(sigh-in or link), and the provider ID.
//עוקב על מצב האימות שמחוזר מהבסיס נתונים . אם מחובר מחזיר לתוך יוסר את שצויין ואחרת נאל 
console.log(user)   /// מדפיס אצלנו נאל כרגע כי המצב חיבור הוא שלא חובר 
return (
    <div className= {style.appContainer}>
      <section className= {style.sectionContainer}> 
        <Navbar/>  
        <Chat/>    
      </section>
    </div>
  );
}



/*Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier.
 You can use utility classes to control the layout, color, spacing, typography, shadows,
 and more to create a completely custom component design — without leaving your HTML or writing a single line of custom CSS.\
 */