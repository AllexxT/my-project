import React, { useState, useEffect } from "react";
import { default as S } from "./galleryStyles";
import Cat from "../../../cat.jpg";

const Gallery = ({ photos = [] }) => {
  const [indx, setIndx] = useState(0);

  const photoStack = photos.map(item => item.photo.full_size);
  useEffect(() => {
    const inter = setInterval(() => {
      indx < photoStack.length-1 ? setIndx(indx + 1) : setIndx(0);
    }, 3000);
    return () => {
      clearInterval(inter);
    };
  }, [indx]);

  console.log(photoStack);

  return (
    <S.Wrapper>
      <S.MainFrame>
        <S.MainF__row>
          <S.MainF__left>left |</S.MainF__left>
          <S.MainF__screen>
            <img src={photoStack[indx]} alt="cat" />
          </S.MainF__screen>
          <S.MainF__right>right</S.MainF__right>
        </S.MainF__row>
        <S.DotLine>*******</S.DotLine>
      </S.MainFrame>
      <S.ThumbsFrame>Thumbs Frame</S.ThumbsFrame>
    </S.Wrapper>
  );
};

export default Gallery;
