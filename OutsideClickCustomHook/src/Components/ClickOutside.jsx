import { useEffect } from "react";

// Define a custom hook called ClickOutside, which listens for clicks outside a specified ref element
export default function ClickOutside(ref, handler) {
  
  // Use the useEffect hook to perform side effects in a function component
  useEffect(() => {
    
    // Define a function called listener that will handle click events
    function listener(event) {
      // Check if the ref is null 
      if (!ref.current) {
        return; // If so, return early and do nothing
      }
      
      // If the clicked element is outside the ref element, call the provided handler function
      handler(event);
    }

    // Add event listeners for mousedown and touchstart events, calling the listener function
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Clean up by removing the event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Specify dependencies to trigger re-runs of the effect when these values change
}
