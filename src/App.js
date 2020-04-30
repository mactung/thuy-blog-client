import React from "react";
import firebase from "firebase";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
var firebaseConfig = {
  apiKey: "AIzaSyD2nJ_CePfLGuQEt_pChSS6PUrH8rqfUdE",
  authDomain: "thuy-blog-374cd.firebaseapp.com",
  databaseURL: "https://thuy-blog-374cd.firebaseio.com",
  projectId: "thuy-blog-374cd",
  storageBucket: "thuy-blog-374cd.appspot.com",
  messagingSenderId: "820612719981",
  appId: "1:820612719981:web:d622ee455bac869ee02664",
  measurementId: "G-PVJYS7Z4K2",
};
firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
