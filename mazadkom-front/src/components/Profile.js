import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/profile.css";
import { Row, Col } from "react-bootstrap";
import { UserContext } from "../context/context";

function Profile(props) {
  const { user, setUser } = useContext(UserContext);
  const [header, setHeader] = useState("");
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  const [showFormUpdate, setShowFormUpdate] = useState(false);

  const [username, setUsername] = useState("");
  const [bids, setBids] = useState([]);
  const [posts, setPosts] = useState([]);
  const [deletePosts, setDeletePosts] = useState({});
  const [userEffect, setUserEffect] = useState([]);
  const [updatePosts, setUpdatePosts] = useState({});
  const [newUpdate, setNewUpdate] = useState({});

  // const [bids, setBids] = useState([]);

  const [addP, setAddP] = useState({
    title: "",
    description: "",
    picture: "",
    startingPrice: "",
  });

  const showForm = () => {
    setShow(true);
  };

  const FormUpdate = (idx, id, title) => {
    setShowFormUpdate(true);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setAddP((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...addP,
      created_at: Date.now(),
    };

    const productData = {
      title: addP.title,
      description: addP.description,
      picture: addP.picture,
      startingPrice: addP.startingPrice,
    };

    const id = localStorage.getItem("id");
    console.log("id=", id);

    const newProduct = await axios
      .post(`http://localhost:5000/posts/${id}`, productData)
      .then((res) => {
        let response = JSON.parse(JSON.stringify(res));
        console.log("newProduct", response.data);
        setPosts(response.data);
      });

    const apiProduct = await axios
      .post(`http://localhost:5000/apiElement`, productData)
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  const handleSubmitDelete = async (e, index, title) => {
    e.preventDefault();
    const productData = {
      title: addP.title,
      description: addP.description,
      picture: addP.picture,
      startingPrice: addP.startingPrice,
    };
    const id = localStorage.getItem("id");
    const id2 = index;

    const deleteProduct = await axios
      .delete(`http://localhost:5000/posts/${id}/${id2}`)
      .then((res) => {
        let response = res.data;
        setDeletePosts(response.data);
      });
    console.log(productData);
    const apiProductDelete = await axios
      .delete(`http://localhost:5000/apiElement/remove/${title}`)
      .catch((error) => {
        console.log("delete", error.response);
        alert(error.response.data.error);
      });

    console.log("apiDelete", apiProductDelete);
    getPosts();
  };

  async function getPosts() {
    const id = localStorage.getItem("id");
    // console.log("id=", id);
    try {
      const request = axios
        .get(`http://localhost:5000/posts/${id}`)
        .then((res) => {
          let response = res.data;
          setUserEffect(response);
        });
    } catch (e) {
      console.log(e.message);
    }
  }

  const handleSubmitUpdate = (e, title) => {
    e.preventDefault();
    console.log("hereeeee");
    const productData = {
      title: addP?.title,
      description: addP?.description,
      picture: addP?.picture,
      startingPrice: addP?.startingPrice,
    };
    console.log("handle", productData.title);
    const id = localStorage.getItem("id");
    // const id2 = index;
    const updateProduct = axios
      .put(`http://localhost:5000/posts/${id}/${num}`, productData)
      .then((res) => {
        let response = res.data;
        setUpdatePosts(response);
      });

    const updateProductApi = axios
      .put(`http://localhost:5000/apiElement/update/${header}`, productData)
      .then((res) => {
        let response = res.data;
        console.log("res", response);
      });
    getPosts();
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    const parsed = JSON.parse(localStorage.getItem("user"));
    setUser(parsed);
    try {
      const request = axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res) => {
          let response = JSON.parse(JSON.stringify(res));
          setUsername(response.data.UserInfo[0].username);
        });
    } catch (e) { }
    getPosts();
  }, [userEffect]);

  return (

    <div className="container">
      {userEffect.map((element, idx) => {
        return (

          <Card className="NewStyleCard">
            <div key={idx}>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={element.picture}
                      alt="Avatar"
                      style={{ width: "450px", height: "600px" }}
                    />
                  </div>
                  <div class="flip-card-back">
                    {element._id}
                    <h1>{element.title}</h1>
                    <p>{element.description}</p>
                    <p>{element.startingPrice}</p>
                    <Button
                      className="buttonD"
                      variant="outline-secondary"
                      onClick={(e) => {
                        handleSubmitDelete(e, element._id, element.title);
                      }}
                    >
                      Delete
                    </Button>{" "}
                    <Button
                      className="buttonU"
                      variant="outline-secondary"
                      onClick={(e) => {
                        FormUpdate(idx, element._id, element.title);
                        setNum(element._id);
                        setHeader(element.title);
                        console.log(idx, element._id, element.title);
                      }}
                    >
                      Update
                    </Button>{" "}
                  </div>
                </div>
              </div>

            </div>
          </Card >

        );
      })}

      <div className="signin-form">
        {show && (
          <Form className="form-product" onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formGridPassword">
              <Form.Label>Title </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product title"
                name="title"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>description </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a short description"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Picture URL </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL"
                name="picture"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Starting Price </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your name"
                name="startingPrice"
                onChange={handleChange}
              />
            </Form.Group>

            <div className="button-add">
              <Button variant="secondary" type="submit">
                Add Product
              </Button>{" "}
            </div>
          </Form>
        )}
        {!show && (
          <Button
            className="w-25 m-auto"
            variant="secondary"
            onClick={showForm}
          >
            Add Product
          </Button>
        )}
        {/* {bids && (
        <Card
          bg="primary"
          text="white"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header>Claimed bid</Card.Header>
          <Card.Body>
            <Card.Title>{bids.title} </Card.Title>
            <Card.Text>{bids.description}</Card.Text>
          </Card.Body>
          <Card.Footer>{bids.startingPrice}</Card.Footer>
        </Card> */}
        {/* )} */}
      </div>

      <div className="signin-form">
        {showFormUpdate && (
          <Form className="form-product" onSubmit={handleSubmitUpdate}>
            <Form.Group className="mb-2" controlId="formGridPassword">
              <Form.Label>Title </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product title"
                name="title"
                onChange={handleChange}
                value={newUpdate.title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>description </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a short description"
                name="description"
                onChange={handleChange}
                value={newUpdate.description}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Picture URL </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL"
                name="picture"
                onChange={handleChange}
                value={newUpdate.picture}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Starting Price </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your name"
                name="startingPrice"
                onChange={handleChange}
                value={newUpdate.startingPrice}
              />
            </Form.Group>

            <div className="button-add">
              <Button variant="secondary" type="submit">
                Update Product
              </Button>{" "}
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Profile;
