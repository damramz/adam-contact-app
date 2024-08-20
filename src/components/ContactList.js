import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = (props) => {
  const {
    contacts,
    retrieveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  });

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => {
    return <ContactCard contact={contact} key={contact.id}></ContactCard>;
  });

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
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
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
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
