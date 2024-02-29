import React from 'react';

const User = ({ user }) => {
  // Function to format the date strinWg
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString(); // Get the date portion in a human-readable format
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", border: "3px solid white", margin: '30px', backgroundColor: 'black' }}>
      <center>
        <img style={{ borderRadius: '70px', width: "30%", marginTop: '10px' }} src={user.avatar_url} alt="" />
      </center>
      <a style={{ color: 'red' }} href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>

      <h3>{user.bio?`Bio : ${user.bio}`:""}</h3>
      <h3>Account Created On : {formatDate(user.created_at)}</h3> {/* Format the created_at date */}
      <h3>Updated  On : {formatDate(user.updated_at)}</h3> {/* Format the updated_at date */}
      <h3>Public Repo : {user.public_repos}</h3>
      <h3>Followers : {user.followers}</h3>

    </div>
  );
};

export default User;
