/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import {StyledLeftArrow, StyledRightArrow, StyledUpArrow, StyledDownArrow, StyledExpand} from './styledIcons.js';
import ImageCarousel from './ImageCarousel.jsx';
import ImageSidebar from './ImageSidebar.jsx';

const StyledCarousel = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
`

const StyledThumbnailAlign = styled.div`
  text-align: left;
  position: absolute;
`

const StyledCarouselImageSize = styled.div`
  width: 500px;
`

const DefaultView = ( {styleImages, activeThumbnails, current, setCurrent, nextSlide, prevSlide, verticalScroll, upSlide, downSlide, length, start, end} ) => {

  return (
    <>
      <StyledCarousel>
        {current !== length-1 && <StyledRightArrow onClick={nextSlide} />}
        {current !== 0 && <StyledLeftArrow onClick={prevSlide} />}
        <StyledCarouselImageSize>
          <ImageCarousel styleImages={styleImages} current={current} />
        </StyledCarouselImageSize>
        <StyledThumbnailAlign>
          <ImageSidebar activeThumbnails={activeThumbnails} current={current} setCurrent={setCurrent} />
        </StyledThumbnailAlign>
        {verticalScroll && start !== 0 && <StyledUpArrow onClick={upSlide} />}
        {verticalScroll && end !== length && <StyledDownArrow onClick={downSlide} />}
      </StyledCarousel>
    </>
  );
}

export default DefaultView;