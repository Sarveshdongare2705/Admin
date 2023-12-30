import React from "react";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import New from "./pages/new/New.jsx";
import Single from "./pages/single/Single.jsx";
import List from "./pages/list/List.jsx";
import { Route , createBrowserRouter,RouterProvider,BrowserRouter,Router , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}/>
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new"  element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new"  element={<New />} />
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
