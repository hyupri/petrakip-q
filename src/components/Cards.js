import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/petrakip-q/images/img-1.jpg'
              text='Hier können Sie unser Team kennen lernen'
              label='Team'
              path='/petrakip-q/App'
            />
            <CardItem
              src='/petrakip-q/images/petrakip-architecture.png'
              text='Die erste Verion der App können Sie hier runterladen'
              label='App'
              path='/petrakip-q/Team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
