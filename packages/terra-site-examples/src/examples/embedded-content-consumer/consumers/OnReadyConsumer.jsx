import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

const OnReadyConsumer = () => (
  <EmbeddedContentConsumer
    src="#/tests/embedded-content-consumer/providers/on-ready-provider"
    fill
  />
);

export default OnReadyConsumer;
