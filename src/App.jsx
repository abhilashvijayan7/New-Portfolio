import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import WorkDetailPage from "./pages/WorkDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="works" element={<WorksPage />} />
          {/* <Route path="contact" element={<ContactPage />} /> */}
          <Route path="/work/:id" element={<WorkDetailPage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
