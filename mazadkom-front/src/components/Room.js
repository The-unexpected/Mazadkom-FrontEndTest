import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/rooms.css'
import Monaliza from "./image/monaliza.jpg";




function Room(props) {

  const [messages, setMessages] = useState([]);
  const [prints, setPrints] = useState([]);
  const [startPrice, setStartPrice] = useState(200);
  const [click_count, setClick_count] = useState(0);
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showWinner, setShowWinner] = useState(false);
  const [username, setUsername] = useState('');

let winnerName='';

  function getwinner () {
    try {
      let id = localStorage.getItem('id');
      axios.get(`http://localhost:5000/user/${id}`).then(res => {
        let response = JSON.parse(JSON.stringify(res));
        console.log("response", response);
        setUsername(response.data.UserInfo[0].username)
        props.socket.on('resWinner', (resWinner) => {
          winnerName = resWinner;
        })
      })
    } catch (error) {
      console.log(error.message);
    }
   
  }


 

  const showButtons = () => {
   setShow(true)
  }

  useEffect(() => {
    try {
      props.socket = io('https://mazadkom.herokuapp.com');
      props.socket.on('message', (message) => {
        setMessages([message, ...messages]);
      });
      props.socket.on('print', (print) => {
        setPrints([print, ...prints]);
      });
      props.socket.on('counter', (count) => {
        setCount(count);
        // console.log(count,count);
        // ...count;
        setShowTimer(true)
        if (count === "Times UP") {
          getwinner();
          setShow(false);
          setShowWinner(true)
        }
      });
    
    } catch (error) {
      console.log(error.message);

    }
  }, [])

  function sendMessage (event){
    try {
      const body = event.target.value;
      const id = localStorage.getItem('id');
      axios.get(`https://mazadkom.herokuapp.com/user/${id}`).then(res => {
        let response = JSON.parse(JSON.stringify(res));
        console.log("response", response);
        setUsername(response.data.UserInfo[0].username);
        // console.log(this.state.username);
        return res;
      })
      // if pressing enter button and body exsit
      if (event.keyCode === 13 && body) {
        let message = {
          body: body,
          from: username,
        };
        console.log('here', message);
        setMessages([message, ...messages]);
        props.socket.emit('message', message);
      }
    } catch (error) {
      console.log(error.message);

    }

  }

  async function sendPrint(){
    try {
      const id = localStorage.getItem('id');
      await axios.get(`https://mazadkom.herokuapp.com/user/${id}`).then(res => {
        let response = JSON.parse(JSON.stringify(res));
        console.log("response", response);
        setUsername(response.data.UserInfo[0].username);
        return response;
      })
      let print = {
        body: 'has increased the bid',
        from: username,
      };
      console.log('here', print);
      setPrints([print, ...prints]);
      props.socket.emit('print', print);
    } catch (error) {
      console.log(error.message);

    }
  }

  const increaseBy50 = (e) => {
    try {
      setShowTimer(false);
      props.socket.emit('clicked', increaseBy50); //Emitting user click
      props.socket.on('click_count', (value) => {
        console.log('value', value);
        setClick_count(value);
      })
      sendPrint(e);
      props.socket.emit('winner', username);
    } catch (error) {
      console.log(error.message);

    }
  
  }

  const increaseBy100 = (e) => {
    try {
      setShowTimer(false);
      props.socket.emit('clicked1', increaseBy100); //Emitting user click
      props.socket.on('click_count', (value) => {
        console.log('value', value);
        setClick_count(value);
        console.log(value);
      });
      sendPrint(e);
      console.log('username',username);
      props.socket.emit('winner', username);
     
    } catch (error) {
      console.log(error.message);


    }

  }

  const increaseBy200 = (e) => {
    try {
      setShowTimer(false);
      props.socket.emit('clicked2', increaseBy200); //Emitting user click
      props.socket.on('click_count', (value) => {
        console.log('value', value);
        setClick_count(value);
      });
      sendPrint(e);
      props.socket.emit('winner', username);
    } catch (error) {
      console.log(error.message);

    }
  
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="bidding">
            {show &&
              <div className="btn-head">
                <Button className="w-25 m-auto" variant="secondary" onClick={increaseBy50} >increase 50$</Button>
                <Button className="w-25 m-auto" variant="secondary" onClick={increaseBy100}>increase 100$</Button>
                <Button className="w-25 m-auto" variant="secondary" onClick={increaseBy200}>increase 200$</Button>
              </div>
            }
            {!show &&
              <Button className="w-25 m-auto" variant="secondary" onClick={showButtons}>Start Bidding</Button>
            }
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Card className="image-card">
              <Card.Img variant="top" src={Monaliza} />
              <Card.Body>
                <Card.Title>Mona Liza</Card.Title>
                <Card.Text>
                  The Mona Lisa is an oil painting by Italian artist, inventor, and writer Leonardo da Vinci. Likely completed in 1506, the piece features a portrait of a seated woman set against an imaginary landscape. In addition to being one of the most famous works of art, it is also the most valuable.
                </Card.Text>
                <Card.Text className="price">Starting Price : <span>{startPrice}$</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <div className="chat">
              {showTimer &&
                <h3>Timer = {count}</h3>
              }
              <h3 id="counterroom111"> The Increase amount = {click_count}</h3>
              <input
                type="text"
                placeholder="enter your message"
                onKeyUp={sendMessage}
              />
              <div className="row">
                <div className="col" >
                  {messages.map((message) => {
                    return (
                      <div className="chat-box">
                        <p>
                          <span > Message </span>  : {message.body} from : {message.from}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="col">
                  {prints.map((print) => {
                    return (
                      <div className="chat-box note">
                        <p>
                          <span> Note !! </span> : {print.from} {print.body}.

                       </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {showWinner &&
        <div className="result">
          <h1>{winnerName} Won The Bid With <span>{click_count + startPrice}$ </span></h1>
        </div>
      }
    </div>
  )
}

export default Room
