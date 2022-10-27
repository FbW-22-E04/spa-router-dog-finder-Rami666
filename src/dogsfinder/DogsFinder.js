import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dogs from "./Dogs.js";
import SingleDog from "./SingleDog.js";

function DogsFinder() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:name" element={<SingleDog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default DogsFinder;
