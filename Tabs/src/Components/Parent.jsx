import React from 'react'
import Main from './Main'

const Parent = () => {
const Tabs=[{
    id:0,
    label:`content for 1`
},
{
    id:1,
    label:`content for 2`
},{
    id:2,
    label:`content for 3`
}]

// console.log(Tabs)


  return (
    <div>


        <Main tabs={Tabs}/>
    </div>
  )
}

export default Parent