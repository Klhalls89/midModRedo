import React from 'react';
import ResCard from './ResCard';

const ResContainer = (props) => {
  let newCards = props.reservations.map(res => {
    return <ResCard {...res} key={res.id} />
  })
  return(
    <div className='cardContainer'>
      {newCards}
    </div>
  )
}

export default ResContainer;