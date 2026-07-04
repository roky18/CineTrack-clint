import logo from '../../assets/logo.png'; 

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-3 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        
        <a href="/" className="flex items-center">
          <img 
            src={logo} 
            alt="CineTrack Logo" 
            className="w-12 h-12 object-contain hover:opacity-90 transition" 
          />
        </a>
        
        
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="/" className="hover:text-blue-400 transition">Dashboard</a>
          </li>
          <li>
            <a href="/not-found" className="hover:text-blue-400 transition">Watchlist</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}