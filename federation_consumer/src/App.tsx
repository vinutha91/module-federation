import React, { Suspense, lazy } from 'react';

import './App.css';
// The remote component provided by federation_provider
import ProviderButton from 'federation_provider/button';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton />
      </div>
    </div>
  );
};

export default App;