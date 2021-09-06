import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/rooms.css'
import Monaliza from "./image/monaliza.jpg";
import queryString from "query-string";

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      prints: [],
      startPrice: 200,
      click_count: 0,
      username: '',
      count: 10,
      show: false,
      showTimer: false,
      showWinner: false,
      title: '',
      users: []

    };
    this.sendMessage = this.sendMessage.bind(this);
    this.increaseBy50 = this.increaseBy50.bind(this);
    this.increaseBy100 = this.increaseBy100.bind(this);
    this.increaseBy200 = this.increaseBy200.bind(this);
    this.sendPrint = this.sendPrint.bind(this);
    this.showButtons = this.showButtons.bind(this);
    this.winnerName = '';
    this.getwinner();


  }


  getwinner() {
    let id = localStorage.getItem('id');
    axios.get(`http://localhost:5000/user/${id}`).then(res => {
      let response = JSON.parse(JSON.stringify(res));
      console.log("response", response);
      this.setState({
        username: response.data.UserInfo[0].username,

      })
      this.socket.on('resWinner', (resWinner) => {
        this.winnerName = resWinner;

      })
    })

  }

  showButtons() {
    this.setState({
      show: true,
    })

  }

  async componentDidMount() {
    this.socket = io('http://localhost:5000');
    const localtitle = await localStorage.getItem('header')
    const localname = await localStorage.getItem('username')

    // console.log('up',update);
    this.setState({
      title: localtitle,
      username: localname,

    });
    
    this.socket.emit("join", { username: this.state.username, title: this.state.title }, () => { });

    this.socket.on('message', (message) => {
      console.log('message', message)
      this.setState({
        messages: [message.message, ...this.state.messages],
      });
      console.log('messagesssss', this.state.messages)
    });


    this.socket.on('print', (print) => {
      this.setState({
        prints: [print, ...this.state.prints],
      });
    });


    this.socket.on('counter', (count) => {
      this.setState({
        count: count,
        ...this.state.count,
        showTimer: true
      });
      if (count === "Times UP") {
        this.setState({
          show: false,
          showWinner: true
        })

        console.log("showw", this.state.show);
      }
      console.log(count);
    });

    // this.socket.on("roomData", (user) => {
    //   users = [];
    //   user.users.forEach((el) => {
    //     users.push(el.name);
    //   });
    //   setUsers(users);
    // });
  }

  
  // remove.catch if we get an error
  sendMessage(event) {
    const body = event.target.value;
    const id = localStorage.getItem('id');
    axios.get(`http://localhost:5000/user/${id}`).then(res => {
      let response = JSON.parse(JSON.stringify(res));
      console.log("response", response);
      this.setState({
        username: response.data.UserInfo[0].username,
      })
      console.log(this.state.username);
      return res;
    })



    // if pressing enter button and body exsit
    if (event.keyCode === 13 && body) {
      let message = {
        body: body,
        from: this.state.username,
      };


      this.setState({ messages: [message, ...this.state.messages] });
      console.log('here emit messagesssssss', this.state.messages);
      this.socket.emit('message', message);
      console.log('here emit message', message);
    }
  }

  // remove.catch if we get an error
  async sendPrint(event) {
    const id = localStorage.getItem('id');
    await axios.get(`http://localhost:5000/user/${id}`).then(res => {
      let response = JSON.parse(JSON.stringify(res));
      console.log("response", response);
      this.setState({
        username: response.data.UserInfo[0].username,
      })
      return response;
    })

    let print = {
      body: 'has increased the bid',
      from: this.state.username,
    };
    console.log('here', print);
    this.setState({ prints: [print, ...this.state.prints] });
    this.socket.emit('print', print);
  }


  increaseBy50(e) {
    this.setState({ showTimer: false });
    this.socket.emit('clicked', this.increaseBy50); //Emitting user click
    this.socket.on('click_count', (value) => {
      console.log('value', value);
      this.setState({
        click_count: value,
      });
    });
    this.sendPrint(e);
    this.socket.emit('winner', this.state.username);

  }


  increaseBy100(e) {
    this.setState({ showTimer: false });
    this.socket.emit('clicked1', this.increaseBy100); //Emitting user click
    this.socket.on('click_count', (value) => {
      console.log('value', value);
      this.setState({
        click_count: value,
      });
    });
    this.sendPrint(e);
    this.socket.emit('winner', this.state.username);

  }

  increaseBy200(e) {
    this.setState({ showTimer: false });
    this.socket.emit('clicked2', this.increaseBy200); //Emitting user click
    this.socket.on('click_count', (value) => {
      console.log('value', value);
      this.setState({
        click_count: value,
      });
    });
    this.sendPrint(e);
    this.socket.emit('winner', this.state.username);

  }

  render() {
    return (
      <>
        {/* <Main/> */}
        <div className="App">
          <div className="container">




            <div className="row">
              <div className="bidding">
                {this.state.show &&
                  <div className="btn-head">
                    <Button className="w-25 m-auto" variant="secondary" onClick={this.increaseBy50} >increase 50$</Button>
                    <Button className="w-25 m-auto" variant="secondary" onClick={this.increaseBy100}>increase 100$</Button>
                    <Button className="w-25 m-auto" variant="secondary" onClick={this.increaseBy200}>increase 200$</Button>
                  </div>
                }
                {!this.state.show &&
                  <Button className="w-25 m-auto" variant="secondary" onClick={this.showButtons}>Start Bidding</Button>
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
                    <Card.Text className="price">Starting Price : <span>{this.state.startPrice}$</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">

                <div className="chat">
                  {this.state.showTimer &&
                    <h3>Timer = {this.state.count}</h3>
                  }


                  <h3 id="counterroom111"> The Increase amount = {this.state.click_count}</h3>
                  <input
                    type="text"
                    placeholder="enter your message"
                    onKeyUp={this.sendMessage}
                  />
                  <div className="row">
                    <div className="col" >
                      {this.state.messages.map((message) => {
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
                      {this.state.prints.map((print) => {
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
          {this.state.showWinner &&
            <div className="result">
              <h1>{this.winnerName} Won The Bid With <span>{this.state.click_count + this.state.startPrice}$ </span></h1>
            </div>
          }
        </div>
      </>

    );
  }
}

export default Room;