import React from "react";
import LogOut from "./LogOut";  
import Sign from "./Sign"  
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"


const style= {
    nav :'bg-gray-800 h-20 flex justify-between items-center p-4',  /// חלון אפור שכתוב עליו צאט  ,gray , hight 20 , read in the middele 
    heading :'text-white text-3xl'   // טקסט יצבע בצבע לבן 
}
/*
 const [user, loading, error] = useAuthState(auth, options);
 return user: The auth.UserCredential if logged in, or null if not
auth.UserCredential= A structure containing a User, the OperationType(sigh-in or link), and the provider ID.
//only triggered when a user signs in or signs out  
עוקב על "מצב האימות" שמחוזר מהבסיס נתונים . אם מחובר מחזיר לתוך יוסר את שצויין ואחרת נאל 
console.log(user)   /// מדפיס אצלנו נאל כרגע כי המצב חיבור הוא שלא חובר 
*/
// line 26 - if user is null -> no connection has happend -> show the login button , else show the logut option. 
const Navbar= ()=> {
    const [user] = useAuthState(auth) ///של אימות מתבצע  event מחזיר את פרטי האימות של המשתמש לאחר ש  event    
    console.log(user)            /// סוג של מידע על המשתמש אם התרחש חיבור
    return( <div className={style.nav}>
              <h1 className={style.heading}>Dive Forum  </h1>
             {user? <LogOut/> :<Sign/>}   
           </div>
    );
};
export default Navbar

