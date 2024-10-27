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
import { Courses3 } from "./Courses3";
import { Courses4 } from "./courses/Courses4";
import { Courses5 } from "./courses/Courses5";
import { Gistory } from "./courses/Gistory.JSX";
import { Courses6 } from "./courses/Courses6";
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
                <Route path="/courses3" element={<Courses3 />} />
                <Route path="/courses4" element={<Courses4 />} />
                <Route path="/courses5" element={<Courses5 />} />
                <Route path="/historyGame" element={<Gistory />} />
                <Route path="/courses6" element={<Courses6 />} />





                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </>
    )
}

export default Routeur
