import React from 'react';
import UserMenu from '../Navigation/UserMenu';

const Contacts = () => {
  const userEmail = 'mango@mail.com';

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div>
      <h1>Contacts</h1>
      <UserMenu userEmail={userEmail} onLogout={handleLogout} />
      {}
    </div>
  );
};

export default Contacts;
