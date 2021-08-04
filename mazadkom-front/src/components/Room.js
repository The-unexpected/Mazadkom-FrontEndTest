import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Monaliza from "./image/monaliza.jpg";
class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      startPrice: 100,
      totalPrice: 0,
      click1_count: '',
      username: '',

      count: 0,

    };
    this.sendMessage = this.sendMessage.bind(this);
    this.increaseBy20 = this.increaseBy20.bind(this);
    this.increaseBy100 = this.increaseBy100.bind(this);
    this.increaseBy200 = this.increaseBy200.bind(this);
  }

  componentDidMount() {
    this.socket = io('https://mazadkom.herokuapp.com');
    this.socket.on('message', (message) => {
      this.setState({
        messages: [message, ...this.state.messages],
      });
    });
    this.socket.emit('room111', () => {
      console.log('room111');
    })

    this.socket.on('counterroom111', (count) => {
      this.setState({
        count: count,
        ...this.state.count,
      });
    });


  }

  sendMessage(event) {
    const body = event.target.value;
    const id = localStorage.getItem('id');
    axios.get(`https://mazadkom.herokuapp.com/user/${id}`).then(res => {
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

      console.log('here', message);
      this.setState({ messages: [message, ...this.state.messages] });
      this.socket.emit('message', message);
    }
  }

  increaseBy20(e) {
    this.socket.emit('clickedroom111', this.increaseBy20); //Emitting user click
    this.socket.on('click1_count', (value) => {
      console.log('value', value);
      this.setState({
        click1count: value,
      });
    });
  }

  increaseBy100(e) {
    this.socket.emit('clicked1room111', this.increaseBy100); //Emitting user click
    this.socket.on('click1_count', (value) => {
      console.log('value', value);
      this.setState({
        click1_count: value,
      });
    });
  }

  increaseBy200(e) {
    this.socket.emit('clicked2room111', this.increaseBy200); //Emitting user click
    this.socket.on('click1_count', (value) => {
      console.log('value', value);
      this.setState({
        click1_count: value,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increaseBy20}>increase 50$</button>
        <button onClick={this.increaseBy100}>increase 100$</button>
        <button onClick={this.increaseBy200}>increase 200$</button>

        <input
          type="text"
          placeholder="enter your message"
          onKeyUp={this.sendMessage}
        />
        {this.state.messages.map((message) => {
          return (
            <p>
              message: {message.body} from {message.from}
            </p>
          );
        })}
        <h1>Counter = {this.state.count}</h1>
        <h1 id="counterroom111"> total={this.state.click1_count}</h1>

        <Card className="image-card">
          <Card.Img variant="top"  src={Monaliza} />
          <Card.Body>
            <Card.Title>Portrait of a Musician</Card.Title>
            <Card.Text>
              The Portrait of a Musician is an unfinished painting widely attributed to the Italian Renaissance artist Leonardo da Vinci, dated to circa 1483–1487. Produced while Leonardo was in Milan, the work is painted in oils, and perhaps tempera, on a small panel of walnut wood.
            </Card.Text>
            <Card.Text>Price : {this.state.startPrice+this.state.click1_count}$
            </Card.Text>
          </Card.Body>

        </Card>
      </div>
    );
  }
}

export default Room;
