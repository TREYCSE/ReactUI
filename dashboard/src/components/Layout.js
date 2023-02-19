import { Outlet, Link } from "react-router-dom";

export default function Layout() {

  return (
    <div>
        <div>
          <nav>
                <Link to="/home">| Home |</Link>
                <Link to="/apod">| Astronomy Picture of the Day |</Link>
                <Link to="/earth">| Welcome to Earth, you frickin alien |</Link>
          </nav>
      </div>

      <Outlet />
    </div>
  );
}