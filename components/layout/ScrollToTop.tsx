import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes, but only if there's no hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

