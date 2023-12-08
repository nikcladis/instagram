import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout/PageLayout";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
