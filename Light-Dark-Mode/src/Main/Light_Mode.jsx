import React, { useEffect, useState } from 'react';
import './style.css';

const Light_Mode = () => {
  // State variable to track dark mode status
  const [darkmode, setDarkMode] = useState(() => {
    // Get the theme from localStorage or default to false (light mode)
    return JSON.parse(localStorage.getItem('theme')) || false; // this is getting the value of the dark mode that has been set in the localStorage
  });

  // Effect to save the current theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkmode));
  }, [darkmode]); // updates are done whenever state is changed

  // Function to toggle between light and dark mode
  const changeMode = () => {
    setDarkMode(!darkmode); // Toggle the dark mode state
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
      className={darkmode ? 'dark' : 'white'} // Apply dark or white class based on dark mode state
    >
      <button onClick={changeMode}>Change Mode</button> {/* Button to toggle mode */}
      <h1>I AM A DEVELOPER</h1>
    </div>
  );
};

export default Light_Mode;

/*
Learnings:
1. **State Management with useState**: The component utilizes the useState hook to manage the dark mode state, allowing the user to toggle between light and dark modes.

2. **Effect Hook (useEffect)**: The useEffect hook is used to save the current theme (dark mode status) to localStorage whenever it changes, ensuring persistence across page reloads.

3. **Conditional CSS Styling**: The component applies different CSS classes (`dark` or `white`) based on the dark mode state, demonstrating conditional styling to change the appearance of the component dynamically.

4. **Local Storage Usage**: Local storage is used to store and retrieve the dark mode preference, providing a seamless experience for users across sessions.

5. **Event Handling**: The component utilizes event handling to trigger the change in mode when the user clicks the "Change Mode" button.

Interview Questions and Answers:

1. **How does the Light_Mode component toggle between light and dark modes?**
   - The Light_Mode component uses the darkmode state variable to track the current mode (light or dark).
   - When the user clicks the "Change Mode" button, the changeMode function is called, toggling the value of darkmode using setDarkMode.

2. **Explain the role of useEffect in the Light_Mode component.**
   - The useEffect hook is used to save the current theme (dark mode status) to localStorage whenever it changes.
   - This ensures that the user's preference for light or dark mode persists across page reloads.

3. **How is local storage utilized in the Light_Mode component?**
   - Local storage is used to store and retrieve the dark mode preference.
   - The component checks localStorage for the current theme on initial render and updates it whenever the theme changes.

4. **Describe the conditional CSS styling applied in the Light_Mode component.**
   - The className of the main div element is dynamically set based on the dark mode state.
   - If darkmode is true, the 'dark' class is applied, changing the background color and text color to dark mode.
   - If darkmode is false (light mode), the 'white' class is applied, reverting the background color and text color to light mode.

5. **How does event handling work in the Light_Mode component?**
   - Event handling is used to trigger the change in mode when the user clicks the "Change Mode" button.
   - The onClick event of the button is bound to the changeMode function, which toggles the dark mode state.
*/
