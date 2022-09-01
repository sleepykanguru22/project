import { Routes, Route } from "react-router-dom";
import Photos from "./views/Photos";
import Home from "./views/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/pod" element={<Photos defaultDate="2022-08-31" />} />
      </Routes>
    </div>
  );
}

export default App;
