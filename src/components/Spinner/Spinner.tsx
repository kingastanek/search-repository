import React from 'react';
import { Wrapper, Loader } from './Spinner.style';

const Spinner = (): JSX.Element => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

export default Spinner;
