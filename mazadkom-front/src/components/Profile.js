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
    getPosts();
  }, []);

  return (
    <div className="cardSize">
      {userEffect.map((element, idx) => {
        return (
          <div key={idx} class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={element.picture} alt="..." class="img-fluid" />
              </div>
              <div class="col-md-8">
                <div class="card-body1">
                  <h5 class="card-title">{element.title}</h5>
                  <p class="card-text">{element.description}</p>
                  <p class="card-text">
                    <small class="text-muted">
                      <span className="priceColor">Price: &nbsp;</span>{" "}
                      {element.startingPrice}$
                    </small>
                  </p>
                </div>
                <div className="up-de">
                  <button
                    className="buttonD"
                    variant="outline-secondary"
                    onClick={(e) => {
                      handleSubmitDelete(e, element._id, element.title);
                    }}
                  >
                    Delete
                  </button>{" "}
                  <button
                    className="buttonU"
                    variant="outline-secondary"
                    onClick={(e) => {
                      FormUpdate(idx, element._id, element.title);
                      setNum(element._id);
                      setHeader(element.title);
                      setShow(false);
                      console.log(idx, element._id, element.title);
                    }}
                  >
                    Update
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>

          // <div key={idx} class="card" >

          //   <div class="card-body">
          //   <img
          // className='imgProduct'
          //           src={element.picture}
          //           alt="Avatar"

          //         />
          //     <h5 class="card-title">{element.title}</h5>
          //     <h6 class="card-subtitle mb-2 text-muted">{element.description}</h6>
          //     <p class="card-text"><span className='priceColor'>price:</span> {element.startingPrice}</p>
          //     <button
          //           className="buttonD"
          //           variant="outline-secondary"
          //           onClick={(e) => {
          //             handleSubmitDelete(e, element._id, element.title);
          //           }}
          //         >
          //           Delete
          //         </button>{" "}
          //         <button
          //           className="buttonU"
          //           variant="outline-secondary"
          //           onClick={(e) => {
          //             FormUpdate(idx, element._id, element.title);
          //             setNum(element._id);
          //             setHeader(element.title);
          //             setShow(false);
          //             console.log(idx, element._id, element.title);
          //           }}
          //         >
          //           Update
          //         </button>{" "}

          //   </div>

          // </div>

          // <div key={idx} className='allCards' >

          //   <img
          //   className='imgProduct'
          //             src={element.picture}
          //             alt="Avatar"

          //           />
          //           <div className='info'>
          //           <h1 className='title'>{element.title}</h1>
          //           <p className='desc'>{element.description}</p>
          //           <p className='desc'><span className='priceColor'>price:</span> {element.startingPrice}</p>
          //           </div>

          //           <div className='up-de'>
          //           <button
          //           className="buttonD"
          //           variant="outline-secondary"
          //           onClick={(e) => {
          //             handleSubmitDelete(e, element._id, element.title);
          //           }}
          //         >
          //           Delete
          //         </button>{" "}
          //         <button
          //           className="buttonU"
          //           variant="outline-secondary"
          //           onClick={(e) => {
          //             FormUpdate(idx, element._id, element.title);
          //             setNum(element._id);
          //             setHeader(element.title);
          //             setShow(false);
          //             console.log(idx, element._id, element.title);
          //           }}
          //         >
          //           Update
          //         </button>{" "}
          //           </div>

          // </div>
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
                placeholder="Enter price"
                name="startingPrice"
                onChange={handleChange}
              />
            </Form.Group>

            <div className="button-add">
              <Button
                variant="secondary"
                type="submit"
                style={{ backgroundColor: "#393737" }}
              >
                Add Product
              </Button>{" "}
            </div>
          </Form>
        )}

        {!show && (
          <Button className="addButton" variant="secondary" onClick={showForm}>
            Add Product
          </Button>
        )}
      </div>

      <div className="signin-form1">
        {showFormUpdate && (
          <Form className="form-product1" onSubmit={handleSubmitUpdate}>
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
                placeholder="Enter price"
                name="startingPrice"
                onChange={handleChange}
                value={newUpdate.startingPrice}
              />
            </Form.Group>

            <div className="button-add">
              <Button
                variant="secondary"
                type="submit"
                style={{ backgroundColor: "#393737" }}
              >
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
