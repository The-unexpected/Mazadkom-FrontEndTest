import React from 'react';
import io from 'socket.io-client';

class Room extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      startPrice: 0,
      totalPrice: 0,
      click_count: '',
    

      count: 0,
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.increaseBy20 = this.increaseBy20.bind(this);
    this.increaseBy100 = this.increaseBy100.bind(this);
    this.increaseBy200 = this.increaseBy200.bind(this);
  }
  componentDidMount() {
    this.socket = io('localhost:5000');
    this.socket.on('message', (message) => {
      this.setState({
        messages: [message, ...this.state.messages],
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
    // if pressing enter button and body exsit
    if (event.keyCode === 13 && body) {
      let message = {
        body: body,
        from: 'Me',
      };

      console.log('here', message);
      this.setState({ messages: [message, ...this.state.messages] });
      this.socket.emit('message', message);
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
        {this.state.messages.map((message) => {
          return (
            <p>
              message: {message.body} from {message.from}
            </p>
          );
        })}
        <h1>Counter = {this.state.count}</h1>
        <h1 id="counter"> total={this.state.click_count}</h1>
       
      </div>
    );
  }
}

export default Room;
