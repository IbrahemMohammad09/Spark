import { useState, useEffect } from 'react';


function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {

    const path = window.location.pathname;
    setActiveSection(path); 
  }, []);

  return activeSection;
}

export default useActiveSection;