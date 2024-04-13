import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/slice';
import Header from './Header';
import Cart from './Cart';

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
      <Header />
      <Cart />
    </div>
  );
}

export default App;