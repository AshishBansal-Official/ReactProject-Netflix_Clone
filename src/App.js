import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Home, Login, Browse, Detail, PageNotFound } from "./pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/browse" element={<Browse />}></Route>
                <Route exact path="/title/:id" element={<Detail />}></Route>
                <Route exact path="/404page" element={<PageNotFound />}></Route>
                <Route path="/*" element={<PageNotFound />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
