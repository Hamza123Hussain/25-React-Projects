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
