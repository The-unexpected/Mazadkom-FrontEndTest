import axios from 'axios';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      image: '',
      title: '',
      description: ''

    }
  }



  componentDidMount() {
    const id = localStorage.getItem('id');
    console.log(id);
    try {
      const request = axios.get(`http://localhost:5000/user/${id}`).then(res => {
        let response = JSON.parse(JSON.stringify(res));
        console.log(response);
        console.log(res.data.UserInfo[0]);
        this.setState({
          username: response.data.UserInfo[0].username,
          image: response.data.UserInfo[0].image,
          bids: response.data.UserInfo[0].bids[0],
          title: response.data.UserInfo[0].bids[0].title,
          description: response.data.UserInfo[0].bids[0].description,
          price: response.data.UserInfo[0].bids[0].startingPrice,

        })
        console.log('bids', this.state.price);
        console.log('bids', this.state.bids.length);

        return res;
      })
    }
    catch (e) {
      console.log(e.message);
    }
  }



  render() {
    return (
      <div>
        <h1>Greetings {this.state.username} ! </h1>
        {this.state.title &&
          <Card
            bg="primary"
            text="white"
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Claimed bid</Card.Header>
            <Card.Body>
              <Card.Title>{this.state.title} </Card.Title>
              <Card.Text>
                {this.state.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>{this.state.price}</Card.Footer>
          </Card>}

      </div>
    )
  }
}
