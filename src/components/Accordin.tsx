import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { SetttingState } from '../reducers/settingReducer';
import './accordin.css';

interface AccordinProps {
  temp: string;
  time: string;
  windSpeed: string;
  humidity: string;
  feelsLike: string;
}
const Accordin: React.FC<AccordinProps> = ({
  humidity,
  time,
  windSpeed,
  temp,
  feelsLike,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const { temperatureFormat } = useSelector<SetttingState, SetttingState>(
    (state) => state
  );

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
              <p className='info__text'>
                {temp} &deg; {temperatureFormat === 'metric' ? 'C' : 'F'}
              </p>
            </div>
          </div>
          <div className='info'>
            <h2 className='info__title'>humidity</h2>
            <div className='info__detail'>
              <div className='info__icon mr-2'>
                <i className='wi wi-humidity' />
              </div>
              <p className='info__text'>{humidity}%</p>
            </div>
          </div>
          <div className='info'>
            <h2 className='info__title'>wind speed</h2>
            <div className='info__detail'>
              <div className='info__icon mr-2'>
                <i className='wi wi-cloudy-windy' />
              </div>
              <p className='info__text'>
                {windSpeed} {temperatureFormat === 'metric' ? 'm/s' : 'mi/hr'}
              </p>
            </div>
          </div>

          <div className='info'>
            <h2 className='info__title'>feel like</h2>
            <div className='info__detail'>
              <div className='info__icon mr-2'>
                <i className='wi wi-thermometer' />
              </div>
              <p className='info__text'>
                {feelsLike} &deg; {temperatureFormat === 'metric' ? 'C' : 'F'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordin;
