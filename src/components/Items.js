import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

class Items extends Component {

  render() {

    return (
      <section>
        <h2>To Do Tasks</h2>

            <Accordion>
              <Accordion.Header>Items</Accordion.Header>
              <Accordion.Body>
            {
              this.props.itemsList.map((item, idx) =>
                <Item key={item._id} itemData={item} handleDelete={this.props.handleDelete} />
              )
            }
            </Accordion.Body>
            </Accordion>



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
