import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Notfound from "./components/Notfound";
import Courses from "./Pages/Courses";
import AddJourneys from "./Pages/AddJourneys";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import DisableRouteWhenUserIsLog from "./components/DisableRouteWhenUserIsLog";
import RegisterPage from "./Pages/RegisterPage";
import { Courses1 } from "./Courses1";
import { Gaming } from "./components/Gaming";

const Routeur = () => {

    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<PrivateRoute />}>
                        <Route path="/add-journey" element={<AddJourneys />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>

                    <Route path="/" element={<Courses />} />

                    <Route element={<DisableRouteWhenUserIsLog />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>

                    <Route path="*" element={<Notfound />} />
                </Route>
                <Route path="/courses1" element={<Courses1 />} />
                <Route path="/game" element={<Gaming />} />

                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </>
    )
}

export default Routeur
