import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Landing from "./Components/Landing";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
