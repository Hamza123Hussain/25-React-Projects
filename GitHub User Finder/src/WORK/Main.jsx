import React, { useEffect, useState } from 'react';
import User from './User';

const Main = () => {
  const [userName, setUserName] = useState("Hamza123Hussain");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data) {
        setUserData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchdata();
    setUserName('')
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {/* Call handleSubmit when Enter key is pressed */}
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} onKeyPress={handleKeyPress} />

      <button onClick={handleSubmit}>Search</button>

      {loading ? <div>Loading...</div> :
        userData ? (
          <User user={userData} />
        ) : <div>No user data found</div>
      }
    </div>
  );
};

export default Main;
