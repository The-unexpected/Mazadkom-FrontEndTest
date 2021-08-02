
import React from 'react';
import io from 'socket.io-client';



class Room extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            startPrice: 0,
            totalPrice: 0,
            click_count: ''
        }

        this.sendMessage = this.sendMessage.bind(this)
        this.increaseBy20 = this.increaseBy20.bind(this)


    }

    componentDidMount() {
        this.socket = io("localhost:5000")
        this.socket.on('message', (message) => {
            this.setState({
                messages: [message, ...this.state.messages],

            })
        })
        // this.increaseBy20();

    }

    sendMessage(event) {
        const body = event.target.value
        // if pressing enter button and body exsit
        if (event.keyCode === 13 && body) {

            let message = {
                body: body,
                from: 'Me'
            }


            console.log("here", message);
            this.setState({ messages: [message, ...this.state.messages] })
            this.socket.emit("message", message)

        }

    }

    // time() {
    //   setTimeout(() => {
    //     this.setState({ click_count: 0 })
    //   }, 5000);
    // }
    // time() {
    //   let countDownDate = new Date("Aug 2, 2021 18:55:00").getTime();
    //   let x = setInterval(function () {

    //     // Get today's date and time
    //     let now = new Date().getTime();

    //     // Find the distance between now and the count down date
    //     let distance = countDownDate - now;

    //     // Time calculations for days, hours, minutes and seconds

    //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     // Output the result in an element with id="demo"
    //     // document.getElementById("demo").innerHTML = seconds + "s ";

    //     // If the count down is over, write some text 
    //     if (distance < 0) {
    //       clearInterval(x);
    //       // document.getElementById("demo").innerHTML = "EXPIRED";
    //     }
    //   }, 1000);
    // }






    increaseBy20(e) {


        this.socket.emit('clicked', this.increaseBy20);//Emitting user click


        this.socket.on('click_count', (value) => {
            console.log('valueeeeeeeeee', value);
            this.setState({
                click_count: value
            })

            // setTimeout(() => { this.setState({ click_count: 0 }); }, 3000);

        });

        // this.state.socket.on("newMentions",(data)=> {
        //   this.setState({        
        //     newMentions: data
        //   })
        // })

        // socket.on('click_count', function (value) {
        //   $('#counter').html(value);//Set new count value
        // });

        // //Says to server that the button has been clicked
        // $('#btn_click').click(function () {
        //   socket.emit('clicked');//Emitting user click
        // });






        // console.log(e);
        // console.log(this.sendPrice)
        // totalPrice= Number(this.state.startPrice)+20;
        // console.log(this.state.totalPrice);
        // let a = this.state.startPrice;
        // console.log(a);

        // this.setState({ totalPrice: this.state.totalPrice + 20 })

        // console.log(typeof (e.target.value));
        // console.log(typeof (this.state.totalPrice));
        // console.log(e.target.value);

        // let total = this.state.totalPrice;

        // console.log('total', this.state.totalPrice)
        // this.setState({ totalPrice: [total, ...this.state.totalPrice] })
        // this.socket.emit("totalPrice", this.state.totalPrice)


    }

    render() {

        return (
            <div className="App">
                <button onClick={this.increaseBy20}>increase</button>


                <input type="text" placeholder="enter your message" onKeyUp={this.sendMessage} />
                {this.state.messages.map((message) => {
                    return (<p>message: {message.body} from {message.from}</p>)
                })}

                <h1 id="counter"> total={this.state.click_count}</h1>
                {/* <p>time:{this.time}</p> */}

            </div>
        );

    }

}

export default Room;

