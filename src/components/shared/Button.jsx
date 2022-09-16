import PropTypes from 'prop-types'

function Button({ isDisabled, version, children, type }) {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    type: PropTypes.string, 
}

export default Button;
