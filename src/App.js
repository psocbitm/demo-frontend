import "./App.scss";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Page1 from "./Pages/Page1/Page1";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />     
          <Route path="/page1" element={<Page1 />} />     
          <Route path=":stockName" element={<Page2 />} />
          <Route path=":stockName/forecast" element={<Page3 />} />
          <Route path=":stockName/*" element={<ErrorPage />} />
        </Routes>
    </Layout>
  );
}

export default App;
