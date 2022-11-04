import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

function ImageGallery({ item ,openModal}) {
  return (
    <ul className={s.gallery}>
      {item.map(({ id, webformatURL, user }) => {
        return (
          <ImageGalleryItem
          id={id}
          openModal={openModal}
            key={id}
            url={webformatURL}
            alt={user}
          />
        );
      })}
    </ul>
  );
}
ImageGallery.propTypes = {
  item: PropTypes.array.isRequired,
};

export default ImageGallery;
