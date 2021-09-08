import React from "react";
import io from "socket.io-client";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/rooms.css";

import { UserContext } from "../context/context";

class Room extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      prints: [],
      startPrice: 0,
      click_count: 0,
      username: "",
      count: 10,
      show: false,
      showTimer: false,
      showWinner: false,
      preview: {},
      title: "",
      users: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.increaseBy50 = this.increaseBy50.bind(this);
    this.increaseBy100 = this.increaseBy100.bind(this);
    this.increaseBy200 = this.increaseBy200.bind(this);
    this.sendPrint = this.sendPrint.bind(this);
    this.showButtons = this.showButtons.bind(this);
    this.winnerName = "";
    this.getwinner();
  }

  getwinner() {
    let id = localStorage.getItem("id");
    axios.get(`https://mazadkom.herokuapp.com/user/${id}`).then((res) => {
      let response = JSON.parse(JSON.stringify(res));
      console.log("response", response);
      this.setState({
        username: response?.data?.UserInfo[0].username,
      });
      this.socket.on("resWinner", (resWinner) => {
        this.winnerName = resWinner;
      });
    });
  }

  showButtons() {
    this.setState({
      show: true,
    });
  }

  getProd() {
    const context = this.context;
    console.log("context", context.value);
    try {
      const request = axios
        .get(`https://mazadkom.herokuapp.com/apiElement/${context.value}`)
        .then((res) => {
          let response = res.data;
          console.log("roomdata", response);
          this.setState({
            preview: response?.productElementInfo[0],
            startPrice: response?.productElementInfo[0]?.startingPrice,
          });
        });
    } catch (e) {
      console.log(e.message);
    }
  }

  async componentDidMount() {
    const ism = localStorage.getItem("username");
    this.setState({ username: ism });
    const context = this.context;
    console.log("context", context.value);
    await this.getProd();
    this.socket = io("https://mazadkom.herokuapp.com");
    const localtitle = await localStorage.getItem("header");
    const localname = await localStorage.getItem("username");

    // console.log('up',update);
    this.setState({
      title: localtitle,
      username: localname,
    });

    this.socket.emit(
      "join",
      { username: this.state.username, title: this.state.title },
      () => {}
    );

    this.socket.on("message", (message) => {
      console.log("message", message);

      this.setState({
        messages: [message.message, ...this.state.messages],
      });
      console.log("messagesssss", this.state.messages);
    });

    this.socket.on("print", (print) => {
      this.setState({
        prints: [print, ...this.state.prints],
      });
    });

    this.socket.on("counter", (count) => {
      this.setState({
        count: count,
        ...this.state.count,
        showTimer: true,
      });
      if (count === "Times UP") {
        this.setState({
          show: false,
          showWinner: true,
        });

        console.log("showw", this.state.show);
      }
      console.log(count);
    });
  }

  // remove.catch if we get an error
  sendMessage(event) {
    const body = event.target.value;

    const id = localStorage.getItem("id");
    axios.get(`https://mazadkom.herokuapp.com/user/${id}`).then((res) => {
      let response = JSON.parse(JSON.stringify(res));
      console.log("response", response);
      this.setState({
        username: response?.data?.UserInfo[0].username,
      });
      console.log(this.state?.username);
      return res;
    });

    // if pressing enter button and body exsit
    if (event.keyCode === 13 && body) {
      let message = {
        body: body,
        from: this.state?.username,
      };

      this.setState({ messages: [message, ...this.state.messages] });
      console.log("here emit messagesssssss", this.state.messages);
      this.socket.emit("message", message);
      console.log("here emit message", message);
    }
  }

  // remove.catch if we get an error
  async sendPrint(event) {
    const id = localStorage.getItem("id");
    await axios.get(`https://mazadkom.herokuapp.com/user/${id}`).then((res) => {
      let response = JSON.parse(JSON.stringify(res));
      console.log("response", response);
      this.setState({
        username: response?.data?.UserInfo[0]?.username,
      });
      return response;
    });

    let print = {
      body: "has increased the bid",
      from: this.state?.username,
    };
    console.log("here", print);
    this.setState({ prints: [print, ...this.state.prints] });
    this.socket.emit("print", print);
  }

  increaseBy50(e) {
    this.setState({ showTimer: false });
    this.socket.emit("clicked", this.increaseBy50); //Emitting user click
    this.socket.on("click_count", (value) => {
      console.log("value", value);
      this.setState({
        click_count: value,
      });
    });
    this.sendPrint(e);
    this.socket.emit("winner", this.state?.username);
  }

  increaseBy100(e) {
    this.setState({ showTimer: false });
    this.socket.emit("clicked1", this.increaseBy100); //Emitting user click
    this.socket.on("click_count", (value) => {
      console.log("value", value);
      this.setState({
        click_count: value,
      });
    });
    this.sendPrint(e);
    this.socket.emit("winner", this.state?.username);
  }

  increaseBy200(e) {
    this.setState({ showTimer: false });
    this.socket.emit("clicked2", this.increaseBy200); //Emitting user click
    this.socket.on("click_count", (value) => {
      console.log("value", value);
      this.setState({
        click_count: value,
      });
    });
    this.sendPrint(e);
    this.socket.emit("winner", this.state?.username);
  }

  render() {
    return (
      <>
        {/* <Main/> */}
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="bidding">
                {this.state.show && (
                  <div className="btn-head">
                    <Button
                      className="w-25 m-auto"
                      variant="secondary"
                      style={{ backgroundColor: "#393737" }}
                      onClick={this.increaseBy50}
                    >
                      increase 50$
                    </Button>
                    <Button
                      className="w-25 m-auto"
                      variant="secondary"
                      style={{ backgroundColor: "#393737" }}
                      onClick={this.increaseBy100}
                    >
                      increase 100$
                    </Button>
                    <Button
                      className="w-25 m-auto"
                      variant="secondary"
                      style={{ backgroundColor: "#393737" }}
                      onClick={this.increaseBy200}
                    >
                      increase 200$
                    </Button>
                  </div>
                )}
                {!this.state.show && (
                  <Button
                    className="w-25 m-auto"
                    variant="secondary"
                    style={{ backgroundColor: "#393737" }}
                    onClick={this.showButtons}
                  >
                    Start Bidding
                  </Button>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                {this.state.preview && (
                  <Card className="image-card">
                    <Card.Img variant="top" src={this.state.preview.picture} />
                    <Card.Body>
                      <Card.Title className="header-card">
                        {this.state.preview.title}
                      </Card.Title>
                      <Card.Text>{this.state.preview.description}</Card.Text>
                      <Card.Text className="price">
                        Starting Price :<span> </span>
                        <span>{this.state.preview.startingPrice}$</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </div>
              <div className="col">
                <div className="chat">
                  {this.state.showTimer && (
                    <h3
                      style={{ color: "rgb(211, 51, 51)", fontFamily: "serif" }}
                    >
                      Timer = {this.state.count}
                    </h3>
                  )}

                  <h3
                    style={{ color: "rgb(211, 51, 51)", fontFamily: "serif" }}
                    id="counterroom111"
                  >
                    {" "}
                    The Increase amount = {this.state.click_count}
                  </h3>
                  <input
                    type="text"
                    placeholder="enter your message"
                    onKeyUp={this.sendMessage}
                  />
                  <div className="row">
                    <div className="col">
                      {this.state.messages.map((message) => {
                        return (
                          <div className="chat-box">
                            <p>
                              <span> Message </span> : {message?.body}
                              <span style={{ marginLeft: "10rem" }}>
                                from :<span style={{ color: "white" }}> </span>
                              </span>
                              {message?.from}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="col">
                      {/* {this.state.showTimer && <h3><h3>Bid Updates</h3></h3>} */}

                      {this.state.prints.map((print) => {
                        return (
                          <div className="chat-box note">
                            <p>
                              <span> Note </span>{" "}
                              <span style={{ color: "white" }}>
                                {print.from} {print.body}
                              </span>
                              .
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
          {this.state.showWinner && (
            <div className="result">
              <h1>
                <span style={{ color: "#393737" }}>
                  {this.winnerName?.toUpperCase()}{" "}
                </span>{" "}
                Won The Bid With{" "}
                <span>
                  {this.state.click_count + Number(this.state.startPrice)}${" "}
                </span>
              </h1>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Room;
