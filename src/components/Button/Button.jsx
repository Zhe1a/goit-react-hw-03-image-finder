import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ hendelPageClick }) {
  return (
    <div className={s.box}>
      <button type="button" className={s.button} onClick={hendelPageClick}>
        Page
      </button>
    </div>
  );
}
Button.propTypes = {
  hendelPageClick: PropTypes.func.isRequired,
};
export default Button;
