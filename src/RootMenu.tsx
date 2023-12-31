import { Link, Outlet } from "react-router-dom"

export const RootMenu = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/reduxthunk">reduxthunk</Link>
                    </li>
                    <li>
                        <Link to="/useeffect">useeffect</Link>
                    </li>
                    <li>
                        <Link to="/popuptest">popuptest</Link>
                    </li>
                    <li>
                        <Link to="/toasttest">toasttest</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
