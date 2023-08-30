import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <div className="min-h-screen App dark:bg-oscurito">
      <Provider store={store}>
        <Outlet></Outlet>
      </Provider>
    </div>
  );
}

export default App;
