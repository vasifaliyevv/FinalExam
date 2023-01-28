import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'
import {  useParams } from 'react-router-dom';

import './style.scss'
const Product = ({food}) => {

  function Delete() {
    axios.delete(`http://localhost:8080/api/foods/${food._id}`)
        .then(() => console.log({ status: 'Delete successful' }));
}
  return (
    <div className='restuarant'>
    <img src={food.img}/>
    <h4>{food.name}
</h4>
<h3>{food.price}</h3>
<p>
{food.desc}
</p>
<Link className='link' to={'/detail/:'}><div className='learnmore'>LEARN MORE 🠚</div></Link>
<button onClick={Delete}>
Delete
</button>
</div>
  )
}

export default Product