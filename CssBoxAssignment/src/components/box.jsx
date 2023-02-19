import React from 'react'
import '../App.css';

const Box = (props) => {
  const { heading } = props;
  const { paragraph } = props;
 
  return (
    <div id="box" className={props.className} >
      
      <h2 className='header'>
        {heading}
      </h2>
      <p>{paragraph}</p>
      <button >click Me</button>
    </div>
  )
}

export default Box