import React, { useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id}></ContactCard>;
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div>
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui fluid icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0 ? renderContactList : "No Contact Result"}
      </div>
    </div>
  );
};

export default ContactList;
