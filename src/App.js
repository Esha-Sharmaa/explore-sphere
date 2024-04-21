import Head from "./components/Head";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Watch   from "./components/Watch";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Head />
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/watch" element={<Watch />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
