import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ListArticles from "./components/ListArticles";
import UserLogin from "./components/UserLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import SingleArticleCard from "./components/SingleArticleCard";
import ListComments from "./components/ListComments";


function App() {
  return (
    <div className="app">
      <UserLogin />
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ListArticles />}></Route>
        <Route path="/article/:article_id" element={<SingleArticleCard />}></Route>
        <Route path="/article/:article_id" element={<ListComments />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;