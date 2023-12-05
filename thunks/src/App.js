import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNames } from './store/namesSlice';

function App() {

  const w = useSelector(state=>state.name.names)

  console.log(w)

  const dispatch = useDispatch()

  useEffect(() => {
    // Dispatch the getNames thunk action when the component mounts
    dispatch(getNames());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {w.activity}
        </div>
      </header>
    </div>
  );
}

export default App;
