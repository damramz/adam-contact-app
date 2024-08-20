import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import ConfirmDelete from "./ConfirmDelete";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";

  // useEffect(() => {
  //   const getAllContacts = async () => {
  //     const allContacts = await retrieveContacts();
  //     if (allContacts) setContacts(allContacts);
  //   };

  //   getAllContacts();
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={<ContactList />}
              // render={(props) => (
              //   <ContactList
              //     {...props}
              //     contacts={searchTerm.length < 1 ? contacts : searchResults}
              //     term={searchTerm}
              //     searchKeyword={searchHandler}
              //   />
              // )}
            />

            <Route
              path="/confirm-delete"
              element={<ConfirmDelete />}
              // render={(props) => (
              //   <ConfirmDelete {...props} getContactId={removeContactHandler} />
              // )}
            />

            <Route
              path="/add"
              element={<AddContact />}
              // render={(props) => (
              //   <AddContact {...props} addContactHandler={addContactHandler} />
              // )}
            />

            <Route
              path="/edit"
              element={<EditContact />}
              // render={(props) => (
              //   <EditContact
              //     {...props}
              //     updateContactHandler={updateContactHandler}
              //   />
              // )}
            />

            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </ContactsCrudContextProvider>
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
