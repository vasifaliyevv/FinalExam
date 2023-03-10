import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Index = () => {
  return (
<>
<nav className='navbar'>
<div className='nav'>
<div className='navleft'>
<Link to='/'><img alt='sa1' src='data:image/png;base64,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'/></Link>
<img src=''/>
</div>
<div className='navmid'>
<ul>

<Link className='link' to='/'><li>Home</li></Link>
<Link className='link' to='/add'><li>Add</li></Link>
<li>Menu</li>
<li>Reservation</li>
<li>Gallery</li>
<li>About</li>
<li>Blog</li>


</ul>
</div>
<div className='navright'>
<div className='rightlogo'>
    <img width={22} src='https://i.pinimg.com/originals/b0/82/1c/b0821c77d829f3b7075682d4dd25438f.png'/>
<img alt='sa' width={22} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png'/>
<img alt='picture' width={22} src='https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png'/>
</div>
<div className='rightbar'>
<img width={35} alt='dsad' src='http://cdn.onlinewebfonts.com/svg/img_562391.png'/>
</div>
</div>
</div>


</nav>


</>
    )
}

export default Index