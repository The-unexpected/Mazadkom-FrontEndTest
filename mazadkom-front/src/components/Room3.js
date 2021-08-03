import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
class Room3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      startPrice: 0,
      totalPrice: 0,
      click_count: '',
      username: '',

      count: 0,
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.increaseBy20 = this.increaseBy20.bind(this);
    this.increaseBy100 = this.increaseBy100.bind(this);
    this.increaseBy200 = this.increaseBy200.bind(this);
    alert('hello in room 3');
  }

  componentDidMount() {
    this.socket = io('localhost:5000');
    this.socket.on('message3', (message3) => {
      this.setState({
        messages: [message3, ...this.state.messages],
      });
    });

    this.socket.on('counter', (count) => {
      this.setState({
        count: count,
        ...this.state.count,
      });
    });

    
}

  sendMessage(event) {
    const body = event.target.value;
    const id = localStorage.getItem('id');
    const request = axios.get(`http://localhost:5000/user/${id}`).then(res => {
        let response = JSON.parse(JSON.stringify(res));
        console.log(response);
       
        this.setState({
          username: response.data.UserInfo[0].username,
       
        })
   

        return res;
  
  })
    
    // if pressing enter button and body exsit
    if (event.keyCode === 13 && body) {
      let message3 = {
        body: body,
        from:this.state.username ,
      };

      console.log('here', message3);
      this.setState({ messages: [message3, ...this.state.messages] });
      this.socket.emit('message3', message3);
    }
  }

  increaseBy20(e) {
    this.socket.emit('clicked', this.increaseBy20); //Emitting user click
    this.socket.on('click_count', (value) => {
      console.log('value', value);
      this.setState({
        click_count: value,
      });
    });
  }

  increaseBy100(e) {
    this.socket.emit('clicked1', this.increaseBy100); //Emitting user click
    this.socket.on('click_count', (value) => {
      console.log('value', value);
      this.setState({
        click_count: value,
      });
    });
  }

  increaseBy200(e) {
    this.socket.emit('clicked2', this.increaseBy200); //Emitting user click
    this.socket.on('click_count', (value) => {
      console.log('value', value);
      this.setState({
        click_count: value,
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
        {this.state.messages.map((message3) => {
          return (
            <p>
              message: {message3.body} from {message3.from}
            </p>
          );
        })}
        <h1>Counter = {this.state.count}</h1>
        <h1 id="counter"> total={this.state.click_count}</h1>
      </div>
    );
  }
}

export default Room3;
