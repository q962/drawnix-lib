import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

export function create(root_el: HTMLElement) {

  const root = ReactDOM.createRoot(root_el);

  root.render(
    React.createElement(
      StrictMode,
      null,
      React.createElement(App, null)
    )
  );

  return root
}
