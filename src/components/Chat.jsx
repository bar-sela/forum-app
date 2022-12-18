import React from "react";
import { useState,useEffect,useRef } from "react";
import Message from './Message'
const style = {
    main: 'flex flex-col p-[10px] relative' // write a bit under the previues window (the gray one)
}
const Chat = () =>{
    const scroll = useRef()
    return ( 
    <>
        <main className = {style.main}>
           <Message/>
        </main>
        
    </>
    
    )
}
export default Chat
