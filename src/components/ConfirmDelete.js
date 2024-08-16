import React from "react";
import { useHistory } from "react-router-dom";

const ConfirmDelete = (props) => {
  console.log(props);
  const history = useHistory();

  const handleConfirm = () => {
    props.getContactId(props.location.state.contact.id);
    history.push("/");
  };

  const handleCancel = () => {
    history.goBack();
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
