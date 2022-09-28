import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage/Homepage";
import { NotFoundPage } from "./pages/Notfoundpage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Homepage />} />
          {/*<Route path="/posts" element={<Blogpage />} />*/}
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
