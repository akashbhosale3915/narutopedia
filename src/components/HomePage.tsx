import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <ul>
        <Link to='/characters'>
          <li>Characters</li>
        </Link>
        <Link to='/clans'>
          <li>Clans</li>
        </Link>
        <Link to='/tailed-beasts'>
          <li>Tailed-Beasts</li>
        </Link>
        <Link to='/akatsuki'>
          <li>Akatsuki</li>
        </Link>
      </ul>
    </div>
  );
};

export default HomePage;
