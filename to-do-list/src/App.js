import { Provider } from 'react-redux';
import ToDoList from './components/ToDoList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoList/>
      </div>
    </Provider>
  );
}

export default App;
