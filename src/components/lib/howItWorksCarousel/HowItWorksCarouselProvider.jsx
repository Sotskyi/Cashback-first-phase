import { useState, createContext } from 'react';

import HowItWorksCarousel from '.';

export const HowItWorksCarouselContext = createContext();

export const HowItWorksCarouselProvider = ({ children }) => {
  const [isOpenCarousel, setIsOpenCarousel] = useState(true);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
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
