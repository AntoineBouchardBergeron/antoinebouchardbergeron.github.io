import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <a href="/">Antoine Bouchard-Bergeron</a>
        </h1>
        <ul>
          <li><a href="/Software">Software Eng.</a></li>
          <li><a href="/Mec">Mecanical Eng.</a></li>
          <li><a href="/Music">Music</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <span>fr / en</span>
        <span>light / dark </span>
      </div>
    </header>
  );
};

export default Header;
