import React from "react";
import { MDBInput, MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

class App extends React.Component {
  state = {
    items: [],
    currentItem: "",
    showError: false
  };

  removeItem = i => {
    this.setState(state => {
      const items = state.items.filter((item, j) => i !== j);
      return {
        items
      };
    });
  };

  // show the items in a list
  showItemInList(listItem, index) {
    if (listItem === "") {
      this.setState({
        showError: true
      });
    }
    if (this.state.showError === false) {
      return (
        <li key={index}>
          {listItem}
          <MDBBtn
            color="danger"
            outline
            size={"sm"}
            onClick={() => this.removeItem(index)}
          >
            X
          </MDBBtn>
        </li>
      );
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <MDBContainer>
            <MDBRow className="body">
              <MDBCol>
                <h1>Todo List</h1>
                <MDBInput
                  label="Add Item"
                  type="text"
                  onChange={event => {
                    this.setState({ currentItem: event.target.value });
                  }}
                  value={this.state.currentItem}
                />
                {/* Add warning for when the user tries to append an empty item to the list */}

                <MDBBtn
                  color="indigo"
                  flat
                  onClick={() => {
                    this.setState({
                      items: [...this.state.items, this.state.currentItem],
                      currentItem: ""
                    });
                  }}
                >
                  Add Item
                </MDBBtn>
              </MDBCol>
            </MDBRow>

            {/* showing the list of items */}
            <MDBRow>
              <MDBCol>
                <ul>
                  {this.state.items.map((item, index) =>
                    this.showItemInList(item, index)
                  )}
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="footer">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              Muhammad F. Khan{" "}
              <a href="https://github.com/M-Faheem-Khan"> Github </a>
            </MDBContainer>
          </div>
        </div>
      </>
    );
  }
}

export default App;
