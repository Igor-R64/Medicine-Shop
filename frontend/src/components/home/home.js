import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://zagranmaster.ru/wp-content/uploads/2018/12/mozhno-li-v-ruchnoj-kladi-provozit-tabletki.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://web.kpi.kharkov.ua/nanochem/wp-content/uploads/sites/126/2015/01/intresting-facts-vitamins-e1427202215449.jpg',
    altText: 'Витамины',
    caption: 'Витамины'
  },
  {
    src: 'https://24.kz/media/k2/items/cache/5ed0299f66909d1964e6659d60466222_XL.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

function HomePage (props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="img-fluid" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HomePage;