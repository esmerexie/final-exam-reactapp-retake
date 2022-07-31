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
                <Item key={item._id} itemData={item} />
              )
            }
          </tbody>
        </Table>


      </section>
    );
  }
}

class Item extends Component {

  render() {

    const itemData = this.props.itemData;

    return (
      <tr>
        <td>{itemData.name}</td>
        <td>{itemData.description}</td>
        <td>
          <Button data-testid={`delete-button-${itemData.name}`}>Delete Item</Button>
        </td>
      </tr>
    );
  }
}

export default Items;
