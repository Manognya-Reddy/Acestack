
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Flashcards from "./pages/Flashcards";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
     <AppNavbar />
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/roadmap" element={<Roadmap/>} />
         <Route path="/flashcards" element={<Flashcards/>} />
         <Route path="/resources" element={<Resources/>} />
         <Route path="/profile" element={<Profile/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
