import { Provider } from 'react-redux';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoList/>
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
