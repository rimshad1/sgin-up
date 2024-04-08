import Dashboard from "./components/Dashboard";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/dashboard" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
