import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages,setMessages] = useState([]);
  // api connection with backend with axios
  useEffect(()=>{
    axios.get('/messages/find')
    .then((res)=>{
      setMessages(res.data);
      // console.log(res.data);
    })
  },[]);

  console.log(messages);

  // setting up the pusher
  useEffect(()=>{
    var pusher = new Pusher('34f8dcaad3e2807dc440', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      // adding the newly message in the existing list of the messages
      setMessages([...messages, data]);
    });

    // because of the use effect task above will keep alerting...so after the executing that once we will have to unbind and unsubscribe them in the return or cleanup function
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);


  return (
    <div className="app">
      <div className="app__container">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
