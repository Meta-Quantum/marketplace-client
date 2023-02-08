// stylesheet import
import { RouterProvider } from "react-router";
import router from "./routes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <h1>React Template</h1>
    </div>
  );
}

export default App;
