import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeDetail from "./pages/HomeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <Home />
        } />

        <Route path="/account/:id" element={
        <HomeDetail />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
