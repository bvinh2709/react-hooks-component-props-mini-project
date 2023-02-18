import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header
      name="Underreacted"

      />
      <About
      image="./static/media/logo.6ce24c58.svg"
      about="A blog about learning React"
      />
      <ArticleList

      />
    </div>
  );
}

export default App;
