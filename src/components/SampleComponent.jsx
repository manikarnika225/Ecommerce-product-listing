import React from 'react'

const SampleComponent = (props) => {
  return (
    <div>
        <h1>SampleComponent</h1>
        <h1>Sample Data + 10: {props?.data + 10}</h1>
    </div>
  )
}

export default SampleComponent