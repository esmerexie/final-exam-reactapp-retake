import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddItem.js';
import Items from './components/Items.js';


const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (items) => {
    await axios.post(`${API_SERVER}/items`, items);
    this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState({ items });
  }

  handleDelete = async (id) => {
    const url = `${API_SERVER}/items/${id}`;
    try {
      const response = await axios.delete(url);
      console.log(response.data);
      const filteredItems = this.state.items.filter(item => id !== item._id)
      this.setState({ items: filteredItems });
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    await this.getItems();
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col><h1>Our Items</h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form handleAddItem={this.addItem} />
            </Col>
            <Col>
              <Items itemsList={this.state.items} handleDelete={this.handleDelete} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
