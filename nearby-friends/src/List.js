import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, city, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{city}</p>
          </article>
        );
      })}
    </>
  );
};

export default List;
