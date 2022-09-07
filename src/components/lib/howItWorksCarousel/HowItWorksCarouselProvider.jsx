/* eslint-disable */
import { useState, createContext, useMemo } from 'react';

import HowItWorksCarousel from '.';

export const HowItWorksCarouselContext = createContext();

export const HowItWorksCarouselProvider = ({ children }) => {
  const [isOpenCarousel, setIsOpenCarousel] = useState(true);
  const value = { isOpenCarousel, setIsOpenCarousel };
  return (
    <HowItWorksCarouselContext.Provider value={value}>
      <HowItWorksCarousel
        isOpenCarousel={isOpenCarousel}
        setIsOpenCarousel={setIsOpenCarousel}
      />
      {children}
    </HowItWorksCarouselContext.Provider>
  );
};
