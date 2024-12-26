import React from 'react'

function Food() {
    const list=["samosa","vadapav","jalebi"];

  return (
     <>
     <div>
     <ul>
        {
            list.map((val) => {
                return <li>{val}</li>;
            })
        }
     </ul>
     </div>
     </>
  )
}

export default Food