import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./routes/Homepage/Homepage";
import { NotFoundPage } from "./routes/NotFoundpage/NotFoundPage";
import { Editor } from "./routes/Editor/Editor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
