import PropTypes from "prop-types";

export const DogImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="犬の画像" />;
};

DogImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
