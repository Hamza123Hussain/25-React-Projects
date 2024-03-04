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
      if (data && data.length>0) {
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

// Learnings:
// - Fetching data from an API using useEffect and async/await
// - Handling user input and triggering actions based on it
// - Conditional rendering based on loading state and fetched data
// - Handling Enter key press event for form submission

// Interview Questions and Answers:
// 1. How do you fetch data from an API in React?
//    Answer: We can use the fetch API or libraries like axios to make HTTP requests to fetch data from an API.
// 2. What is the purpose of useEffect hook in React?
//    Answer: useEffect hook is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
// 3. How do you handle form submissions in React?
//    Answer: We can handle form submissions by attaching event handlers to form elements (e.g., onSubmit) and executing the necessary logic when the event is triggered.
// 4. Explain the concept of conditional rendering in React.
//    Answer: Conditional rendering allows us to render different components or UI elements based on certain conditions or states in our application.
// 5. What is the significance of useState hook in React?
//    Answer: useState hook is used to add state management capabilities to functional components in React. It allows us to define and update state variables within functional components.