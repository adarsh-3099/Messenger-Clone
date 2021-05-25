import { Button, FormControl, InputLabel ,Input } from '@material-ui/core';
import React , { useState, useEffect } from 'react'
import './App.css';
import db from './Firebase'

import Message from './Messages/Message'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

function App() {

  const [input,setInput] = useState('')
  
  const [messages,setMessages] = useState([])

  const [userName,setUserName] = useState('')

  useEffect(() => {
    db.collection('messages')
    .orderBy('timeStamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id , message: doc.data()})))
    })
    }, [])

  useEffect(() => {
    // if [] is blank it'll run once
    setUserName(prompt('Please Enter User Name - '))
  }, [] // conditions
  )

  const sendMessage = (event) =>{

    event.preventDefault()

    db.collection('messages').add({
      message : input,
      userName : userName,
      timeStamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
    console.log(messages)
  }

  return (
    <div className='App'>
      <h1>Facebook Messanger</h1>
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h3>Welcome - {userName}</h3>
      <form className="app_form" onSubmit={sendMessage}>
         <FormControl>
            <InputLabel>Enter Message</InputLabel>
            <Input placeholder='TODO Here' value={input} onChange={event => setInput(event.target.value)} />
          </FormControl>
        <Button type='submit' onClick={sendMessage} color='primary' variant='contained' disabled={!input}>Send Message</Button>
      </form>  
      <FlipMove>
        {messages.map(({id,message}) =>(
          <Message key={id} userName={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
      }

export default App;
