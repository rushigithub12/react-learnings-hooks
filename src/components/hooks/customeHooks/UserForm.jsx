import React, { useState } from "react";
import useInput from "../../../createHook/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="">First Name</label>
        <input type="text" {...bindFirstName} />
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" {...bindLastName} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
