import React, {useReducer} from "react";
import ReactDOM from "react-dom";
import User from "./components/user"
import Books from "./components/books"
import Movies from "./components/movies.js"
import Context from "./Context.js"
import user_reducer from "./reducers/user_reducer";
import books_reducer from "./reducers/books_reducer";
import movies_reducer from "./reducers/movies_reducer";

const store = {
  user: null,
  books: null,
  movies: null
}

const obj = {
  ...user_reducer,
  ...books_reducer,
  ...movies_reducer

}
const reducer = (state, action) => {
  const fn = obj[action.type]
  if (fn) {
    return fn(state, action)
  } else {
    throw new Error("你传的什么鬼 type!")
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, store)

  const api = {state, dispatch}
  return (
    <Context.Provider value={api}>
      <User/>
      <hr/>
      <Books/>
      <Movies/>
    </Context.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);


