import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/slice';

function App() {
  const count = useSelector(state => state.counter.count)
  const disptach = useDispatch();
  return (
    <div className="App">
      {/* <div className="counter">
        <div>{count}</div>
        <button type="button" onClick={() => { disptach(increment()) }}>Increment</button>
        <button type="button" onClick={() => { disptach(decrement()) }}>Decrement</button>
      </div> */}
      <div className="header">
        <div className="title">MyCart</div>
        <div className="total-item"></div>
      </div>
      <div className="cart-container">

      </div>
    </div>
  );
}

export default App;