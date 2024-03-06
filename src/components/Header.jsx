import { Component } from "react";
import ModalComp from "./ModalComp";
import ContactList from "./ContactList";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      contacts: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          number: "+998 99 999 99 99",
          gender: "Male",
        },
        {
          id: 2,
          firstName: "Tom",
          lastName: "Smith",
          number: "+998 88 888 88 88",
          gender: "Male",
        },
        {
          id: 3,
          firstName: "Tom",
          lastName: "Smith",
          number: "+998 88 888 88 88",
          gender: "Male",
        },
        {
          id: 4,
          firstName: "Tom",
          lastName: "Smith",
          number: "+998 88 888 88 88",
          gender: "Male",
        },
        {
          id: 5,
          firstName: "Tom",
          lastName: "Smith",
          number: "+998 88 888 88 88",
          gender: "Male",
        },
        {
          id: 6,
          firstName: "Tom",
          lastName: "Smith",
          number: "+998 88 888 88 88",
          gender: "Male",
        },
        {
          id: 7,
          firstName: "Tom",
          lastName: "Smith",
          number: "+998 88 888 88 88",
          gender: "Male",
        },
      ],
      search: "",
      filter: "",
      filteredContact: [],
    };
  }

  addCloseModal = () =>
    this.setState({
      addModal: false,
    });
  addOpenModal = () =>
    this.setState({
      addModal: true,
    });
  addContact = (contact) => {
    const newContact = [
      ...this.state.contacts,
      { ...contact, id: this.state.contacts.length + 1 },
    ];
    this.setState({
      contacts: newContact,
      filteredContact: newContact,
    });
  };
  handleSearch = (e) => {
    let text = e.target.value.toLowerCase();
    this.setState({ search: text });
    this.setState({
      filteredContact: this.state.contacts.filter(
        (e) =>
          e.firstName.toLowerCase().includes(text) ||
          e.lastName.toLowerCase().includes(text)
      ),
    });
  };
  handleDelete = (id) => {
    this.setState({
      filteredContact: this.state.filteredContact.filter(
        (contact) => contact.id !== id
      ),
    });
  };
  handleFilter = (e) => {
    const gender = e.target.value;
    this.setState({ filter: gender });
    let filtered;
    if (gender == "All") {
      filtered = this.state.contacts;
    } else {
      filtered = this.state.contacts.filter(
        (contact) => contact.gender == gender
      );
    }
    this.setState({
      filteredContact: filtered,
    });
  };

  componentDidMount() {
    this.setState({
      filteredContact: this.state.contacts,
    });
  }

  render() {
    const { addModal, filteredContact, search, filter } = this.state;
    const {
      addCloseModal,
      addOpenModal,
      addContact,
      handleSearch,
      handleDelete,
      handleFilter,
    } = this;
    return (
      <div className="container">
        <div className="header py-5 d-flex gap-4">
          <input
            type="text"
            id="search"
            className="form-control w-70 p-2"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
          <select
            id="group"
            className="form-select w-auto"
            value={filter}
            onChange={handleFilter}
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button
            className="btn btn-outline-success w-auto"
            onClick={addOpenModal}
          >
            New Contact
          </button>
        </div>
        <ModalComp
          addCloseModal={addCloseModal}
          addModal={addModal}
          addContact={addContact}
        />
        <ContactList contacts={filteredContact} handleDelete={handleDelete} />
      </div>
    );
  }
}

export default Header;
