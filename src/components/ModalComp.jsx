import { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class ModalComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        firstName: "",
        lastName: "",
        number: "",
        gender: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        [e.target.id]: e.target.value,
      }
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.addCloseModal();
    this.props.addContact(this.state.contact)
    this.setState({
      contact: {
        firstName: "",
        lastName: "",
        number: "",
        gender: "",
      },
    })
  }

  render() {
    const { addCloseModal, addModal } = this.props;
    const { firstName, lastName, number, gender } = this.state.contact;
    const { handleChange, handleAdd } = this;
    return (
      <div>
        <Modal show={addModal} onHide={addCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  className="form-control"
                  placeholder="+998 99 999 99 99"
                  value={number}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select id="gender" className="form-select" value={gender}
                  onChange={handleChange}>
                  <option value="gender">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={addCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalComp;
