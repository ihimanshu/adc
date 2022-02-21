import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import UserDetails from "./components/users/UserDetails";
import { createBrowserHistory } from "history";
import "./App.css";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const customHistory = createBrowserHistory();
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    fetch(`https://randomuser.me/api/?seed=seed&results=10`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  return (
    <Router history={customHistory}>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home error={error} isLoaded={isLoaded} users={users} />}
            />
            <Route path="/search" element={<Search />} />
            <Route
              exact
              path="/userdetails/:username"
              element={<UserDetails users={users} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
