import "./Header.css";
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Header = ({user, setUser}) => {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          <div className="d-flex align-items-center logo">
            <div className="brand-name">
              <p>Book Buddy</p>
            </div>
            <Icon icon="bx:book" color="#f8f8f8" height={72}/>
          </div>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center">
              <NavLink to="/add-book">
                Add a book
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button className="dropdown-toggle btn-text text-white" data-bs-toggle="dropdown" aria-expanded="false">
                {user.email}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="btn-text" to="/favorites">
                    Favorites
                  </NavLink>
                </li>
                <li>
                <button type="button" className="btn-text" onClick={handleLogoutClick}>
                  Logout
                </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
