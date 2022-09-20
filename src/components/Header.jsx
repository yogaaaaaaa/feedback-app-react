import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import {FaToggleOff} from 'react-icons/fa'

function Header({ text, bgColor, textColor }) {
  //
  let headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <Link
          to={{ pathname: "/" }}
          style={{
            textDecoration: "none",
          }}
        >
          <h2>{text}</h2>
        </Link>
      </div>
          {/* <FaToggleOff></FaToggleOff> */}

    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
