import React from 'react';

function UserGreeting() {
    const isLoggedIn = false;
  return (
    <div>
        <h1>Welcome {isLoggedIn && 'James'}</h1>
    </div>
  )
}

export default UserGreeting;