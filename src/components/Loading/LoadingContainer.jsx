import React from 'react';
import { getTypeLoader } from './../../util/';
function LoadingContainer({ type }) {
  const loadingArray = getTypeLoader(type);
  return <>{loadingArray.map(item => item)}</>;
}

export default LoadingContainer;
