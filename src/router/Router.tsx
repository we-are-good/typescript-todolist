import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from "../pages/MainPage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
