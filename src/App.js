import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import MdFile2023W1 from "./mdFile/2023/W1"
import MdFile2023W2 from "./mdFile/2023/W2"
import MdFile2023W3 from "./mdFile/2023/W3"

const Main = () => {
  return (
    <div>
      目录
      这是一句测试的话
      <ul>
      <li>
          <Link to="/2023/W1">2023#1</Link>
        </li>        <li>
          <Link to="/2023/W2">2023#2</Link>
        </li>        <li>
          <Link to="/2023/W3">2023#3</Link>
        </li>
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route index element={<Main />} />
        <Route path="2023/W1" element={<MdFile2023W1 />}></Route>
        <Route path="2023/W2" element={<MdFile2023W2 />}></Route>
        <Route path="2023/W3" element={<MdFile2023W3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const domNode = document.getElementById("app");
const root = createRoot(domNode);

root.render(<App />);
