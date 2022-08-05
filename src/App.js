import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Browse, Detail, PageNotFound, Register } from "./pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { useDispatch } from "react-redux";
import { setUser, resetUser } from "./features/user/userSlice";
import PrivateRoute from "./utils/privateRoute";

function App() {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState("");

    useEffect(() => {
        const authStateChange = onAuthStateChanged(auth, (user) => {
            if (user == null) {
                setIsLoggedIn(false);
                dispatch(resetUser());
            } else {
                setIsLoggedIn(true);
                dispatch(setUser({ uid: user?.uid, email: user?.email }));
            }
        });
        return () => {
            authStateChange();
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/404page" element={<PageNotFound />} />
                {/* <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}> */}
                <Route exact path="/browse/*" element={<Browse />} />
                <Route exact path="/title/:id" element={<Detail />} />
                {/* </Route> */}
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
