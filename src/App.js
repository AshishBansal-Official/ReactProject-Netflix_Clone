import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Home, Login, Browse } from "./pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Navigate to="/in" />}></Route>
                <Route exact path="/in" element={<Home />}></Route>
                <Route
                    exact
                    path="/login"
                    element={<Navigate to="/in/login" />}
                ></Route>
                <Route exact path="/in/login" element={<Login />}></Route>
                <Route
                    exact
                    path="/browse/*"
                    element={<Navigate to="/in/browse*" />}
                ></Route>
                <Route exact path="/in/browse" element={<Browse />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
