import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom';
import { useRecoilState} from 'recoil';
import CountValueAtom from '../recoil/CountValueAtom';

const Home = () => {

    const[countValue, setCountValue] = useRecoilState(CountValueAtom);
  
  return (
    <div>
        <h1>Home</h1>

        <div>
             {/*  <h1>Current Count Value is:{countValue}</h1>
            </div>
        <div className='link-wrapper'>
            <div>
            <Link to="/counter">Counter</Link>
            </div>
 */}
            
            <div>
            <Link to="/shopping">Shopping</Link>
            </div>
            
            
        </div>
        

    </div>
  )
}

export default Home
