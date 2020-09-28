import React, { useRef, useState } from 'react';
import './accordin.css';

interface AccordinProps {
  weatherData: {
    temp: string;
    time: string;
    windSpeed: string;
    humidity: string;
  };
}
const Accordin: React.FC<AccordinProps> = ({
  weatherData: { humidity, time, windSpeed, temp },
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  // the state to show the contains of the accordin
  const [hasHeight, setHasHeight] = useState<boolean>(false);

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    btnRef.current?.classList.toggle('active');
    if (hasHeight) {
      divRef.current!.style.maxHeight = '0';
      setHasHeight(!hasHeight);
    } else {
      divRef.current!.style.maxHeight = divRef.current!.scrollHeight + 'px';
      setHasHeight(!hasHeight);
    }
  }
  return (
    <div className='accordion-container'>
      <button ref={btnRef} className='collapsible' onClick={handleClick}>
        {time}
      </button>
      <div ref={divRef} className='content'>
        <div className='grid'>
          <div className='info'>
            <h2 className='info__title'>temperture</h2>
            <div className='info__detail'>
              <div className='info__icon mr-2'>
                <i className='wi wi-thermometer' />
              </div>
              <p className='info__text'>18 &deg; C</p>
            </div>
          </div>
          <div className='info'>
            <h2 className='info__title'>humidity</h2>
            <div className='info__detail'>
              <div className='info__icon mr-2'>
                <i className='wi wi-humidity' />
              </div>
              <p className='info__text'>100%</p>
            </div>
          </div>
          <div className='info'>
            <h2 className='info__title'>wind speed</h2>
            <div className='info__detail'>
              <div className='info__icon mr-2'>
                <i className='wi wi-cloudy-windy' />
              </div>
              <p className='info__text'>2.2 knots</p>
            </div>
          </div>

          <div className='info'>
            <h2 className='info__title'>feel like</h2>
            <div className='info__detail'>
              <div className='info__icon mr-2'>
                <i className='wi wi-thermometer' />
              </div>
              <p className='info__text'>18 &deg; C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordin;
