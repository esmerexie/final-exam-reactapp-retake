import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Items extends Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.itemsList.map((item, idx) =>
                <Item key={item._id} itemData={item} handleDelete={this.props.handleDelete} />
              )
            }
          </tbody>
        </Table>


      </section>
    );
  }
}

class Item extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleDelete(this.props.itemData._id)
  }

  render() {

    const itemData = this.props.itemData;

    return (
      <tr>
        <td>{itemData.name}</td>
        <td>{itemData.description}</td>
        <td>
          <Button data-testid={`delete-button-${itemData.name}`} onClick={this.handleSubmit}>Delete Item</Button>
        </td>
      </tr>
    );
  }
}

export default Items;
