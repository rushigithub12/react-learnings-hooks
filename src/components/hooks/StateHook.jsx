import React, { useState } from "react";

function StateHook() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name,  firstName: e.target.value})}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name,  lastName : e.target.value})}
        />
        <h2>Your firstName is: {name.firstName}</h2>
        <h1>Your last name is: {name.lastName}</h1>
        <h3>{JSON.stringify(name)}</h3>
      </form>
    </div>
  );
}

export default StateHook;
