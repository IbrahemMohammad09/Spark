import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;
