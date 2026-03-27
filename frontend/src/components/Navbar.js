import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav className="bg-purple-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ArVr Store</Link>
        <div className="flex gap-6">
          {user ? (
            <>
              <span>Hello, {user.username}</span>
              <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-200">Login</Link>
              <Link to="/signup" className="bg-blue-600 px-4 py-2 rounded">Sign Up</Link>
            </>
          )}
          <Link to="/cart" className="hover:text-gray-200">Cart</Link>
        </div>
      </div>
    </nav>
  );
}