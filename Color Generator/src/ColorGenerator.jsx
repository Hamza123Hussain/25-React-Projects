import { useEffect, useState } from 'react'

export default function RandomColor() {
  const [color, setColor] = useState({
    type: 'hex',
    hexcolor: '#000000',
    rgb: 'rgb(0,2,1)',
  })

  function hexrandomcolor(length) {
    // in this function the random color of hex is set

    return Math.floor(Math.random() * length)
  }

  const Hexcolors = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexcolor = '#'

    for (let index = 0; index < 6; index++) {
      hexcolor += hex[hexrandomcolor(hex.length)]
    }

    setColor((prev) => ({ ...prev, type: 'hex', hexcolor: hexcolor }))
  }

  function rgbrandomcolor(length) {
    // in this function the random color of rgb is set

    return Math.floor(Math.random() * length)
  }

  const rgbcolor = () => {
    const b = rgbrandomcolor(256)
    const g = rgbrandomcolor(256)
    const r = rgbrandomcolor(256)
    const rgbcolors = `rgb(${r},${b},${g})`

    setColor((prev) => ({ ...prev, type: 'rgb', rgb: rgbcolors }))
  }

  const conditional = () => {
    // this function check type of color and then outputs accordingly
    return color.type === 'rgb' ? (
      <>
        <h3>"RGB Color"</h3>
        <h3>{color.rgb}</h3>
      </>
    ) : (
      <>
        <h3>"HEX Color"</h3>
        <h3>{color.hexcolor}</h3>
      </>
    )
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color.type === 'hex' ? color.hexcolor : color.rgb,
      }}
    >
      <button onClick={Hexcolors}>Create HEX Color</button>
      <button onClick={rgbcolor}>Create RGB Color</button>
      <button onClick={() => (color.type === 'hex' ? Hexcolors() : rgbcolor())}>
        Generate Random Color
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {conditional()}
      </div>
    </div>
  )
}
/*

Learning from this code:

State Management with useState: The code demonstrates the use of the useState hook to manage state in a functional component. It maintains the current color state, including its type (hex or RGB) and corresponding values.

Dynamic CSS Styling: The background color of the component is dynamically updated based on the selected color type (hex or RGB). This showcases how to apply dynamic styles using React state variables.

Random Color Generation: Functions hexrandomcolor and rgbrandomcolor are used to generate random colors for hex and RGB formats, respectively. These functions utilize Math functions and arrays to create random color values.

Conditional Rendering: The component conditionally renders the color information based on its type (hex or RGB). This is achieved using a conditional rendering function conditional() that displays different JSX based on the color type.

Event Handling: Buttons are provided to trigger the generation of random colors in hex and RGB formats. Event handlers (Hexcolors and rgbcolor) are assigned to these buttons to update the color state accordingly.

Component Composition: The component is composed of smaller functional components, such as the conditional rendering function conditional(). This promotes code organization and reusability.

CSS Styling: Inline CSS styling is applied to the component to control its appearance, including background color, button styles, and text alignment.

Interview Questions and Answers:

What is the purpose of the useState hook in React?
The useState hook is used to add state management to functional components in React. It allows components to maintain state across re-renders without using class components or external state management libraries.

How does conditional rendering work in React?
Conditional rendering in React involves rendering different components or elements based on certain conditions. This is typically achieved using JavaScript expressions or conditional operators within JSX.

Explain the difference between useState and useEffect hooks in React.
useState is used to manage state within functional components, allowing them to hold and update state values.
useEffect is used to perform side effects in functional components, such as data fetching, DOM manipulation, or subscriptions. It runs after every render and can be used to handle component lifecycle events.

How does React handle event handling in functional components?
React functional components use event handlers to respond to user interactions, such as clicks or input changes. Event handlers are functions that are passed as props to the corresponding HTML elements and are invoked when the event occurs.

Can you explain the purpose of the conditional rendering function conditional() in the code?
The conditional() function determines the JSX to render based on the current color type (hex or RGB). It encapsulates the logic for displaying the color information and allows for cleaner and more readable code.
 */
