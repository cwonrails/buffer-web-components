import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RetweetPanel from './index';

storiesOf('RetweetPanel')
  .add('default', () => (
    <RetweetPanel
      name={'Joel Gascoigne'}
      handle={'@joelgascoigne'}
      avatarUrl={'https://buffer-uploads.s3.amazonaws.com/503a5c8ffc99f72a7f00002e/f49c2ff693f1c307af5e1b3d84e581ca.png'}
    />
  ));
