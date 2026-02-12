import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "/detail/:id", element: <DetailPage /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
