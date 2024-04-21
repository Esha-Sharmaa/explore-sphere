import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="watch" element={<Watch />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
