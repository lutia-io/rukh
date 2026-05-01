import { Link, Outlet } from '@tanstack/react-router'

export function App() {
  return (
    <>
      <nav className="app-nav" aria-label="Main">
        <Link to="/" className="app-nav-link">
          Home
        </Link>
        <Link to="/about" className="app-nav-link">
          About
        </Link>
      </nav>
      <Outlet />
    </>
  )
}
