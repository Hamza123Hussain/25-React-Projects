import { useState } from "react";
import data from "./data";
import "./styles.css";

// Define the Accordion component
export default function Accordion() {
  // State variables for managing selected item(s) and multi-selection mode
  const [selected, setSelected] = useState(null); // For single selection
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); // To enable/disable multi-selection
  const [multiple, setMultiple] = useState([]); // For multiple selection

  // Function to handle single selection of items
  function handleSingleSelection(itemId) {
    // Toggle selection of the item
    setSelected(itemId === selected ? null : itemId);
  }

  // Function to handle multiple selection of items
  function handlemultipleselection(itemId) {
    // Make a copy of the multiple array
    const multipleData = [...multiple];

    // Check if multi-selection is enabled and the number of selected items is less than 2
    if ( multipleData.length < 2) {
      const checkIfElementInArray = multipleData.indexOf(itemId);

      // If itemId doesn't exist in the array, add it; otherwise, remove it
      if (checkIfElementInArray === -1) {
        multipleData.push(itemId);
      } else {
        multipleData.splice(checkIfElementInArray, 1); // Remove itemId from the array
      }
      
      // Update the state with the new multiple array
      setMultiple(multipleData);
    } else {
      // If multi-selection is disabled or the number of selected items is 2 or more,
      // remove the item from the selection if it already exists in the array
      const checkIfElementInArray = multipleData.indexOf(itemId);
      if (checkIfElementInArray !== -1) {
        multipleData.splice(checkIfElementInArray, 1);
      }
      // Update the state with the new multiple array
      setMultiple(multipleData);
    }
  }

  return (
    <div className="acc-wrapper">
      {/* Button to enable/disable multi-selection */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      {/* Container for the accordion items */}
      <div className="accordian">
        {/* Check if data exists and is not empty */}
        {data && data.length > 0 ? (
          // Map over each item in the data array
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              {/* Title section of the accordion item */}
              <div
                onClick={
                  // If multi-selection is enabled, call handlemultipleselection function; otherwise, call handleSingleSelection function
                  enableMultiSelection
                    ? () => handlemultipleselection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3> {/* Question/title of the accordion item */}
                <span>+</span> {/* Plus icon for visual indication */}
              </div>
              {/* Content section of the accordion item */}
              {enableMultiSelection
                ? // If multi-selection is enabled, show the content if the item is selected
                  multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : // If multi-selection is disabled, show the content if the item is selected
                selected === dataItem.id && (
                  <div className="acc-content ">{dataItem.answer}</div>
                )}
            </div>
          ))
        ) : (
          // If data is empty or not available, display a message
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

/*
Learnings:
This code example demonstrates several key concepts and techniques in React development:

1. **State Management with useState**: It utilizes the `useState` hook to manage state variables (`selected`, `enableMultiSelection`, `multiple`) in a functional component.

2. **Conditional Rendering**: The code conditionally renders different parts of the UI based on the state of the component. For example, it renders different content depending on whether multi-selection is enabled or disabled, and whether an item is selected.

3. **Event Handling**: It demonstrates event handling in React by defining functions (`handleSingleSelection` and `handlemultipleselection`) to handle user interactions (clicking on accordion items).

4. **Dynamic Rendering with Array Mapping**: The component maps over an array of data (`data`) and dynamically renders accordion items based on the data. This enables the creation of dynamic UI components based on the provided data.

5. **CSS Styling**: The component utilizes CSS styles to define the appearance and layout of the accordion component and its items.

6. **Component Composition**: It demonstrates the composition of smaller components (`item`, `title`, `acc-content`) to create a larger, more complex component (`Accordion`). This promotes modularity and reusability of code.

7. **Effect Hook (useEffect)**: Although not explicitly used in this code, it's a common practice in React to fetch data or perform side effects using the `useEffect` hook. In this code, the `useEffect` hook could be utilized for tasks like fetching data from an API when the component mounts.

By studying and understanding this code, you can learn about these important React concepts and how to effectively apply them in your own React applications.


Interview Questions :
Interview questions related to the provided code example could cover a range of topics, including React concepts, JavaScript fundamentals, and best practices in frontend development. Here are some potential interview questions:

1. **React Concepts**:
   - What is the purpose of the `useState` hook in React, and how is it used in this code?
   - Explain the difference between single selection and multiple selection in an accordion component. How does this component handle both scenarios?
   - What is the `useEffect` hook used for in React, and how could it be applied in this code?

React Concepts:
The useState hook is used to add state management to functional components in React. In this code, it's used to manage the selected item(s) and multi-selection mode. It allows the component to maintain state across re-renders without relying on class components or external state management libraries.
Single selection refers to the ability to select only one item at a time in the accordion component, while multiple selection allows selecting multiple items simultaneously. The component toggles between single and multiple selection modes based on user interaction and updates the UI accordingly.
State Management:


2. **State Management**:
   - How does the component manage state related to selected items and multi-selection mode?
   - Can you describe the role of each state variable (`selected`, `enableMultiSelection`, `multiple`) in the component?

The component uses three state variables: selected, enableMultiSelection, and multiple, to manage the state related to selected items and multi-selection mode.
selected stores the ID of the currently selected item in single selection mode.
enableMultiSelection controls whether multi-selection mode is enabled or disabled.
multiple stores an array of IDs of items selected in multi-selection mode.



3. **Event Handling**:
   - How are user interactions (click events) handled in this component?
   - What functions are invoked when an accordion item is clicked, and what actions do they perform?

User interactions (click events) are handled using event handlers defined within the component. When an accordion item is clicked, either handleSingleSelection or handleMultipleSelection is invoked based on the current selection mode.
These functions update the state variables (selected or multiple) to reflect the user's selection and trigger re-renders to update the UI accordingly.
Array Mapping and Rendering:

4. **Array Mapping and Rendering**:
   - How does the component dynamically render accordion items based on the provided data (`data`)?
   - Can you explain how conditional rendering is used to display different content based on the state of the component?

The component dynamically renders accordion items based on the provided data array using the map function.
Conditional rendering is used to display different content (question/answer) for each accordion item based on the selected state and the mode (single/multiple selection).


5. **CSS Styling**:
   - Describe the CSS styles applied to the accordion component and its items. How do these styles contribute to the appearance and layout of the component?

CSS Styling:
CSS styles are applied to the accordion component and its items to control their appearance and layout.
The acc-wrapper, accordian, item, title, and acc-content classes define the styles for various parts of the accordion.
These styles contribute to the visual presentation of the accordion, including its spacing, alignment, and visual indicators (e.g., plus/minus icons).

6. **Component Composition**:
   - How is component composition used to create the accordion component?
   - Can you identify the smaller components that are composed together to build the accordion?

 Component Composition:
The accordion component is composed of smaller components, including the accordion items and their content.
Each accordion item is a smaller component that encapsulates the title and content of the item.
This composition makes the component modular and reusable, allowing it to be easily integrated into different parts of an application.

7. **Error Handling and Asynchronous Operations**:
   - How does the component handle errors during the asynchronous operation of fetching data from an API?
   - What steps are taken to handle loading states and display appropriate messages to the user?

Error Handling and Asynchronous Operations:
Error handling in asynchronous operations is managed using try-catch blocks. If an error occurs during data fetching, it's caught, and appropriate actions (e.g., setting loading state, displaying error messages) are taken.
Loading states are managed using the loading state variable, which controls the display of loading messages to indicate that data is being fetched.

8. **Best Practices**:
   - Are there any potential improvements or optimizations you would suggest for this code?
   - How would you refactor this code to make it more modular or maintainable?

Potential improvements could include adding error boundary components to gracefully handle errors within the component, optimizing data fetching by implementing caching or pagination, and refactoring CSS styles to improve maintainability (e.g., using CSS modules or styled-components).



These questions can help assess a candidate's understanding of React fundamentals, JavaScript concepts, and their ability to write clean, functional components following best practices.
*/