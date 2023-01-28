import React ,{useState,useEffect} from 'react'
import Carousel from './Carousel/Carousel'
import './style.scss'
import pic from './itailainfood.jpg' 
import Add from '../Add/index'
import food1 from './food2.jpg'
import Food from '../Food/index'
import axios from 'axios'
import {Helmet} from "react-helmet";
const Index = () => {




    const [foods,setFoods] = useState([])

    useEffect(()=>{
        axios
        .get('http://localhost:8080/api/foods')
        .then((res)=> {setFoods(res.data)
            console.log(res.data);
        })
    },[])
    
    const sortHandler = () => {
        setFoods(
          [...foods].sort((a, b) => {
            
            return a.price - b.price
          }),
        )
      }
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

<section className='carusel'> <Carousel/></section>


<section className='itailanfood'>

<div className='itailanmain'>
<div className='itailantext'>

<span>
    Itailan Restuarant
</span>
<h3>WELCOME</h3>
<p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
</p>
<div className='story'>
    OUR STORY 🠚
</div>
</div>
<div className='itailanpicture'>
<img width={400} src={pic}/>
</div>
</div>

</section>

<section className='discover'>
<span>
Discover
</span>
<h3>
PATO PLACE

</h3>
</section>
<div className='sort'><button onClick={sortHandler} >sort by price</button></div>

<section className='restuarants'>
    
<div className='restuarantsmain'>
{
    foods.map((food,_id)=>{
        return(
            <div>
<Food key={_id} food={food}/>
</div>
        )
    })
}
</div>
</section>

<section className='addrestuarant'>

<Add/>
</section>




    </>
  )
}

export default Index