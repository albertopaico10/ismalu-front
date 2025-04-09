import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <h2 className="text-xl font-bold p-4 border-b">Ismalu - Intranet</h2>
      <ul className="p-4 space-y-2">
        <li>
          <Link to="/" className="block p-2 hover:bg-gray-700">Home</Link>
        </li>
        <li>
          <Link to="/about" className="block p-2 hover:bg-gray-700">About</Link>
        </li>
        <li>
          <Link to="/contact" className="block p-2 hover:bg-gray-700">Contact</Link>
        </li>
        <li>
          <Link to="/provider" className="block p-2 hover:bg-gray-700">Provider</Link>
        </li>
        <li>
          <Link to="/manifest" className="block p-2 hover:bg-gray-700">Manifest</Link>
        </li>
      </ul>
    </div>
  );
}