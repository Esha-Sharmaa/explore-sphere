import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Watch   from "./components/Watch";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "watch",
        element: <Watch/>
      }
    ]
  }]);
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
