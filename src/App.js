import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (state.todo.isLoading) {
    return <h1>Загрузка....</h1>;
  }

  return (
    <div className="App">
      <button className="button" onClick={(e) => dispatch(fetchTodos())}>
        Показать Список
      </button>
      {state.todo.data &&
        state.todo.data.map((user) => (
          <div key={user.id} className="user">
            <p>Username: {user.username}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
    </div>
  );
}

export default App;