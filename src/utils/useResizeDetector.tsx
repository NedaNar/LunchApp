import { useEffect, useState } from 'react';

const MAX_PHONE_WIDTH = 600;
const MAX_TABLET_PORTRAIT_WIDTH = 900;
const MAX_TABLET_LANDSCAPE_WIDTH = 1050;
const MAX_TABLET_DESKTOP_WIDTH = 1200;
const MAX_DESKTOP_WIDTH = 1800;

interface ResizeParameters {
  isPhone: boolean;
  isTabletPortrait: boolean;
  isTabletLandscape: boolean;
  isTabletDesktop: boolean;
  isDesktop: boolean;
  isBigDesktop: boolean;
}

function useResizeDetector(): ResizeParameters {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const isPhone = width <= MAX_PHONE_WIDTH;
  const isTabletPortrait = width <= MAX_TABLET_PORTRAIT_WIDTH;
  const isTabletLandscape = width <= MAX_TABLET_LANDSCAPE_WIDTH;
  const isTabletDesktop = width <= MAX_TABLET_DESKTOP_WIDTH;
  const isDesktop = width <= MAX_DESKTOP_WIDTH;
  const isBigDesktop = width > MAX_DESKTOP_WIDTH;

  return { isPhone, isTabletPortrait, isTabletLandscape, isTabletDesktop, isDesktop, isBigDesktop };
}

export default useResizeDetector;
