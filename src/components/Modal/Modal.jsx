import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };
  render() {
    const { onClose, largeImageId } = this.props;
    const { largeImageURL, user } = largeImageId[0];
    return (
      <div
        className={s.overlay}
        onClick={e => {
          onClose(e);
        }}
      >
        <div className={s.modal}>
          <img src={largeImageURL} alt={user} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  largeImageId: PropTypes.arrayOf(PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  })).isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Modal;
