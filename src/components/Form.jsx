import React, { useState } from "react";

function Form() {
    const [userName, setUserName] = useState('');
    const [textContent, setTextContent] = useState('');
    const [selectMenu, setSelectMenu] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Username : ${userName}, textContent: ${textContent}, selected option: ${selectMenu}`);
    }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <button type="submit">Submit</button>
      <div>
      <textarea value={textContent} cols="30" rows="10" onChange={(e) => setTextContent(e.target.value)}></textarea>
      </div>
      <div>
          <select value={selectMenu} onChange={(e) => setSelectMenu(e.target.value)}>
              <option >Option-1</option>
              <option >Option-2</option>
          </select>
      </div>
    </form>
  );
}

export default Form;
