import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";

function App() {
  return (
    <div className="App font-poppins bg:white dakr:bg-slate-900">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
