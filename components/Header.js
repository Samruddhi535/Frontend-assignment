// components/Header.js
const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl">Mobile store</h1>
      <nav>
        <ul className="flex space-x-4 text-white-300">
          <li><a href="active" className="hover:text-white-300">Home</a></li>
          <li><a href="active" className="hover:text-white-300">Features</a></li>
          <li><a href="active" className="hover:text-white-300">About</a></li>
          <li><a href="active" className="hover:text-white-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

  