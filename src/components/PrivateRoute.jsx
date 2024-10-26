import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { disconnect } from "../feature/session.slice";


export default function PrivateRoute() {
    const navigate = useNavigate();
    const { connected, expiredAt } = useSelector((state) => state.session)
    const dispatch = useDispatch()
    const now = dayjs().unix()
    const location = useLocation()

    useEffect(() => {
        const sessionIsExpired = expiredAt ? expiredAt < now : false
        if (!connected || sessionIsExpired) {
            toast.warning("Vous n'êtes pas connecter !")
            navigate(`/login`)
            dispatch(disconnect())
        }
    }, [location])

    return connected ? <Outlet /> : null
}
