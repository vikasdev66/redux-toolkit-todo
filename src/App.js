import AddTodo from "./components/addTodo";
import Todo from "./components/todos";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <Todo />
    </Provider>
  );
}

export default App;
