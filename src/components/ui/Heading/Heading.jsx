import React from 'react'
import './Heading.scss';

export default function Heading(props) {
  let { level, text } = props;

  // use heading 1 by default if level entered is invalid
  if(typeof(level) != 'number') {
    level = 1;
  } else if(level < 1 || level > 6) {
    level = 1;
  }

  return (
    <>
      {level === 1 &&<h1>{text}</h1>}
      {level === 2 &&<h2>{text}</h2>}
      {level === 3 &&<h3>{text}</h3>}
      {level === 4 &&<h4>{text}</h4>}
      {level === 5 &&<h5>{text}</h5>}
      {level === 6 &&<h6>{text}</h6>}
    </>
  )
}
