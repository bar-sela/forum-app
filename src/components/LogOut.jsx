import React from 'react'
import { auth } from '../firebase'
const style = {
    button : 'bg-red-200 px-4 py-2 hover: bg-red-100' /// הגדרת ריבוע אפור 
}

 const LogOut = () => {
  return (
    // logout כפתור שמגדירים לו מראש שיהיה ריבוע אפור ויהיה כתוב עליו 
    <button onClick={()=>auth.signOut()} className={style.button}> 
        Logout
    </button>
  )
}
 
export default LogOut