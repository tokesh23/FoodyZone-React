import React from 'react';
import './Foodorder.css'

const FoodOrder = ({ data }) => {
  if (!data.length) {
    return <div>No food orders available.</div>;
  }
  console.log(data);
  return (
    <div>
      <div className='row'>
      <img src="https://st5.depositphotos.com/1558912/64667/i/450/depositphotos_646673554-stock-photo-easter-food-background-white-plate.jpg" alt="" className='img-bg' />
      <div className='imgtext'> 
      <h2>Food Orders</h2>
      <ul>
        {data.map(order => (
          <li key={order.id}>
              <div className='divgit'>
          <div className='Box'> <div className='order'>{order.name}</div>  <div>{order.quantity} </div> <img src={order.image} alt="" srcset=""  />  <div className='text'>{order.text} </div>  <div className='price'>Rupees {order.price}</div>
          </div>
          </div>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default FoodOrder; 
