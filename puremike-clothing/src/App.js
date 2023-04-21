import Home from "./routes/home-component";
import Navigation from "./routes/navigation-component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in-component";

const Shop = () => {
  return (
    <div>
      <div>I am in the shop page</div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
