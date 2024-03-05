import { Component } from "react";

class ContactList extends Component {
  render() {
    const { contacts, handleDelete } = this.props;

    return (
      <div className="d-flex gap-5 flex-wrap justify-content-center">
        {contacts.map((contact) => (
          <div className="contact__box card p-5" key={contact.id}>
            <h2 className="contact__text">{contact.firstName}</h2>
            <h2 className="contact__text">{contact.lastName}</h2>
            <p className="contact__text">{contact.number}</p>
            <p className="contact__text">{contact.gender}</p>
            <div className="btn__box d-flex gap-1">
              <button className="btn btn-primary">Update</button>
              <button className="btn btn-danger" onClick={()=>handleDelete(contact.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ContactList;
