import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link
        to={{ pathname: `/confirm-delete`, state: { contact: props.contact } }}
      >
        <i
          className="trash alternate outline icon right floated"
          style={{ color: "red", marginTop: "7px" }}
        ></i>
      </Link>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          className="edit alternate outline icon right floated"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
