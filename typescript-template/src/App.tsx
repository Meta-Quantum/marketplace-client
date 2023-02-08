// stylesheet import
import "./App.scss";
// router import
import { RouterProvider } from "react-router";
import router from "./routes";
// components import
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
