import React, { useEffect } from 'react';
import scrollToTop from '../../lib/utils/scrollToTop';

function AboutPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return <>AboutPage works!</>;
}

export default AboutPage;
