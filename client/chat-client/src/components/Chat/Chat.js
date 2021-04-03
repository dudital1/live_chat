import React , { useState , useEffect } from 'react';
import queryString from 'query-string';
import socketio from 'socket.io-client';

import './Chat.css';

let socket;
let connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};

const Chat = ({ location }) => {
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');
    const END_POINT = 'localhost:5000';

    useEffect(() => {
        const { name , room} = queryString.parse(location.search);
        socket = socketio(END_POINT , connectionOptions);

        setName(name);
        setRoom(room);

        socket.emit('join' , {name , room} , () => {
            
        });

    }, [END_POINT , location.search]);

    return(
        <h1>Chat</h1>
    )
}

export default Chat;