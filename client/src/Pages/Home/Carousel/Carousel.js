import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import sekil1 from './sa.jpg'
import sekil3 from './sa3.jpg'
import sekil2 from './sa2.jpg'
import './style.scss'
function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            position:'absolute',
            zIndex:1,
            right:"0.1%",
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            left:"0.1%",
            position:'absolute',
            zIndex:1,
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={2000}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div className='carusel1'>
            <h1>Welcome Pato Place</h1>
          <img height={1000} width={2200} src={sekil1}/>
        </div>
        <div className='carusel1'>
        <h1>Welcome Pato Place</h1>
          <img height={1000} width={2200} src={sekil2}/>
        </div>
        <div className='carusel1'>
        <h1>Welcome Pato Place</h1>
          <img height={1000} width={2200} src={sekil3}/>
        </div>
       
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;