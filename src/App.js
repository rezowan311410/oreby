import Navbar from "./components/Layout/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Home from "./pages/Home";
import Shope from "./pages/Shope";
import About from "./pages/About";
import Contact from "./pages/Contact";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route index path="/shope" element={<Shope/>}></Route>
      <Route index path="/about" element={<About/>}></Route>
      <Route index path="/contacts" element={<Contact/>}></Route>
    </Route>
  )
);
function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
