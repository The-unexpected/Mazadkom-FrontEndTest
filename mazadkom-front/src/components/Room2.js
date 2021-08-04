import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maddona from "./image/monaliza.jpg";
class Room2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      startPrice: 0,
      totalPrice: 0,
      click2_count: '',
      username: '',

      count: 0,
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.increaseBy20 = this.increaseBy20.bind(this);
    this.increaseBy100 = this.increaseBy100.bind(this);
    this.increaseBy200 = this.increaseBy200.bind(this);
    alert('hello in room 2');
  }

  componentDidMount() {
    this.socket = io('https://mazadkom.herokuapp.com');
    this.socket.on('message2', (message2) => {
      this.setState({
        messages: [message2, ...this.state.messages],
      });
    });

    this.socket.emit('room222', () => {
      console.log('room222');
    })
    this.socket.on('counterroom222', (count) => {
      this.setState({
        count: count,
        ...this.state.count,
      });
    });


  }

  sendMessage(event) {
    const body = event.target.value;
    const id = localStorage.getItem('id');
    const request = axios.get(`https://mazadkom.herokuapp.com/user/${id}`).then(res => {
      let response = JSON.parse(JSON.stringify(res));
      console.log(response);

      this.setState({
        username: response.data.UserInfo[0].username,

      })


      return res;

    })

    // if pressing enter button and body exsit
    if (event.keyCode === 13 && body) {
      let message2 = {
        body: body,
        from: this.state.username,
      };

      console.log('here', message2);
      this.setState({ messages: [message2, ...this.state.messages] });
      this.socket.emit('message2', message2);
    }
  }

  increaseBy20(e) {
    this.socket.emit('clickedroom222', this.increaseBy20); //Emitting user click
    this.socket.on('click2_count', (value) => {
      console.log('value', value);
      this.setState({
        click2_count: value,
      });
    });
  }

  increaseBy100(e) {
    this.socket.emit('clicked1room222', this.increaseBy100); //Emitting user click
    this.socket.on('click2_count', (value) => {
      console.log('value', value);
      this.setState({
        click2_count: value,
      });
    });
  }

  increaseBy200(e) {
    this.socket.emit('clicked2room222', this.increaseBy200); //Emitting user click
    this.socket.on('click2_count', (value) => {
      console.log('value', value);
      this.setState({
        click2_count: value,
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
        {this.state.messages.map((message2) => {
          return (
            <p>
              message: {message2.body} from {message2.from}
            </p>
          );
        })}
        <h1>Counter = {this.state.count}</h1>
        <h1 id="counterroom222"> total={this.state.click2_count}</h1>
        <Card className="image-card">
          <Card.Img variant="top" src={Maddona} />
          <Card.Body>
            <Card.Title>Portrait of a Musician</Card.Title>
            <Card.Text>
              The Portrait of a Musician is an unfinished painting widely attributed to the Italian Renaissance artist Leonardo da Vinci, dated to circa 1483–1487. Produced while Leonardo was in Milan, the work is painted in oils, and perhaps tempera, on a small panel of walnut wood.
            </Card.Text>
            <Card.Text>Price : {this.state.startPrice + this.state.click1_count}$
            </Card.Text>
          </Card.Body>

        </Card>
      </div>
    );
  }
}

export default Room2;
