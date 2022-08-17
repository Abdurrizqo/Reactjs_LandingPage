import { useState } from "react";
import "./App.css";
import Body from "./component/Body/Body";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const [search, setSearch] = useState("");

  const getSearch = (data) => {
    setSearch(data);
  };
  return (
    <>
      <Navbar />
      <Header sendFilter={getSearch} />
      <Body resultSearch={search} />
      <Footer />
    </>
  );
}

export default App;
