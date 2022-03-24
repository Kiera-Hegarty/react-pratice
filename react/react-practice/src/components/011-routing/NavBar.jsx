import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <span><Link to="/"> Home </Link></span>
      <span><Link to="/about"> About </Link></span>
      <span><Link to="/zoo"> Zoo </Link></span>
      <span><Link to="/profile"> Profile </Link></span>
    </>
  );
};

export default NavBar;
