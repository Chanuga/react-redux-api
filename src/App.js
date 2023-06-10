import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todoSlice'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state);
  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Click</button>
      <br/>
      {state?.todo?.isLoading && <><b>Loading...</b></>}
      {state?.todo?.data?.map((i) => { return (
        <li>{i.title}</li>
      )})}
    </div>
  );
}

export default App;
