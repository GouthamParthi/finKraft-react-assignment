import "./styles.css";
import DropDown from "./components/dropdown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/grid" element={<Table />} />
          <Route path="/" element={<DropDown />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
