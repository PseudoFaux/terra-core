/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-modal-manager/docs/README.md';
import { version } from 'terra-modal-manager/package.json';

import ModalManagerDemo from './ModalManagerDemo';

// Example Files

const ModalManagerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <div style={{ height: '150px' }}>
      <ModalManagerDemo />
    </div>
  </div>
);

export default ModalManagerExamples;
