import { Component } from 'react';
import ArticlesApi from './ArticlesApi';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Loader from './Loader';
import Modal from './Modal';

export class App extends Component {
  state = {
    articles: [],
    value: '',
    page: 1,
    per_page: 12,
    totalPage: 0,
    isLoading: false,
    error: null,
    isModalOpen: false,
    largeImageId: [],
  };

  onSearchbar = value => {
    this.setState({ value: value });
  };
  hendelPageClick = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  componentDidUpdate(prevProps, perpeSpate) {
    if (perpeSpate.value !== this.state.value) {
      this.setState({ page: 1 });
    }
    if (
      perpeSpate.value !== this.state.value ||
      perpeSpate.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      ArticlesApi(this.state.value, this.state.page)
        .then(res => {
          this.setState(prev => ({
            articles:
              this.state.page === 1
                ? res.hits
                : [...prev.articles, ...res.hits],
            totalPage: Math.ceil(res.total / this.state.per_page),
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  openModal = id => {
    this.setState({
      isModalOpen: true,
      largeImageId: this.state.articles.filter(el => el.id === id && el),
    });
  };

  closeModal = e => {
      this.setState({ isModalOpen: false });
  };

  render() {
    const { articles, isLoading, totalPage, page, isModalOpen, largeImageId } =
      this.state;
    const { onSearchbar, hendelPageClick } = this;
    return (
      <>
        <Searchbar onSearchbar={onSearchbar} />
        {isLoading && <Loader />}
        {articles.length > 0 ? (
          <ImageGallery item={articles} openModal={this.openModal} />
        ) : null}
        {articles.length > 0 && totalPage > page && (
          <Button hendelPageClick={hendelPageClick} />
        )}
        {isModalOpen && (
          <Modal onClose={this.closeModal} largeImageId={largeImageId} />
        )}
      </>
    );
  }
}
