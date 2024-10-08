import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ConfirmDelete = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const location = useLocation();
  const { removeContactHandler } = useContactsCrud();

  const handleConfirm = () => {
    removeContactHandler(location.state.contact.id);
    navigate("/");
  };

  // const handleConfirm = () => {
  //   props.getContactId(props.location.state.contact.id);
  //   history.push("/");
  // };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="ui center aligned container" style={{ marginTop: "10px" }}>
      <h1>Are you sure you want to delete this item?</h1>
      <div className="ui divider"></div>
      <button className="ui red button" onClick={handleConfirm}>
        Confirm
      </button>
      <button className="ui button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default ConfirmDelete;
