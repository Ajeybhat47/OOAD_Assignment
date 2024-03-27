// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import UpdateRecipe from "./components/UpdateRecipe";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/update/" element={<UpdateRecipe/>} />
      </Routes>
    </>
  );
};

export default App;
