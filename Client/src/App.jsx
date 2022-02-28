import "./app.scss";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path=""
            // if user is not authorized redirect to register
            element={user ? <Home /> : <Navigate to="register" />}
          />
          <Route
            path="movies"
            element={
              user ? <Home type="movies" /> : <Navigate to="../register" />
            }
          />
          {/* <Route path="/movies" element={<Home type="movies" />} /> */}
          <Route
            path="series"
            element={
              user ? <Home type="series" /> : <Navigate to="../register" />
            }
          />
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="watch"
            element={user ? <Watch /> : <Navigate to="../register" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
