import React from 'react';
import Button from '../../../../terra-button/lib/Button';
import CenteredActionFooter from '../../../lib/CenteredActionFooter';

export default () => (
  <CenteredActionFooter
    center={
      <div>
        FakeLink Action
        <Button text="Button Action" />
      </div>
    }
  />
);
