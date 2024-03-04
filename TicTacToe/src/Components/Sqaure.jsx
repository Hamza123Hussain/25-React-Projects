import React from 'react'

const Sqaure = ({value,onclick}) => {
  return (
    <button onClick={onclick} className="square">
    {value}
  </button>
  )
}

export default Sqaure