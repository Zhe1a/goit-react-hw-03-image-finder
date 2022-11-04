import { Component } from 'react';
import PropTypes from 'prop-types';
import s from "./Searchbar.module.css"
class Searchbar extends Component {
  state = {
    value: '',
  };
  onInput = e => {
    const { value } = e.target;
    this.setState({ value: value });
  };
  onSubmitForm = () => {
    this.props.onSearchbar(this.state.value);
    this.onFormRemove()
  };
  onFormRemove = () => {
    this.setState({ value: '' });
  };
  render() {
    const { onInput, onSubmitForm } = this;
    const { value } = this.state;
    return (
      <header className={s.searchbar}>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            onSubmitForm(value);
          }}
        >
          <button type="submit" className={s.button}>
            <span className={s["button-label"]}>Search</span>
          </button>

          <input
            name="search"
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onInput}
            value={value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
 onSearchbar: PropTypes.func.isRequired,
};

export default Searchbar;
