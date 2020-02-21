import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { default as S } from "./galleryStyles";
// import useWindowSize from "../../../getWindowSize";
import Cat from "../../../cat.jpg";

const Gallery = ({ photos = [] }) => {
  const [images, setImages] = useState([]);

  // const windowSize = useWindowSize()
  // console.log(windowSize);

  useEffect(() => {
    setImages(
      photos.map(item => {
        return {
          fullscreen: item.photo.full_size,
          original: item.photo.medium_square_crop,
          thumbnail: item.photo.small_square_crop
        };
      })
    );
  }, [photos]);


  return (
    <S.Wrapper>
      <S.MainFrame>
        <S.MainF__row>
          <S.MainF__left>left |</S.MainF__left>
          <S.MainF__screen>
            {images.length > 0 && (
              <ImageGallery
                thumbnailPosition="left"
                // showBullets={true}
                autoPlay={true}
                items={images}
              />
            )}
          </S.MainF__screen>
          <S.MainF__right>right</S.MainF__right>
        </S.MainF__row>
        {/* <S.DotLine>*******</S.DotLine> */}
      </S.MainFrame>
      {/* <S.ThumbsFrame>Thumbs Frame</S.ThumbsFrame> */}
    </S.Wrapper>
  );
};

Gallery.defaultProps = {
  photos: [
    {
      photo: {}
    }
  ]
};

export default Gallery;
