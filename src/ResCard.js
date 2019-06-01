import React from 'react';

const ResCard = (props) => {
  let {name, date, number, time} = props
  return(
    <div className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{number}</p>
      <p>{time}</p>
    </div>
  )
}

export default ResCard;