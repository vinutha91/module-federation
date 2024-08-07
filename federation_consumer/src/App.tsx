import React, { Suspense, lazy } from 'react';

import './App.css';
// The remote component provided by federation_provider
import ProviderButton from 'federation_provider/button';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
  name: 'federation_consumer',
  remotes: [
    {
      name: 'federation_provider',
      entry: 'http://localhost:3000/mf-manifest.json',
      alias: 'federation_provider',
    },
  ],
});
loadRemote('federation_provider/button').then(() =>{
  console.log("loaded")
});

init({
  name: 'federation_consumer',
  remotes: [
    {
      name: 'sample_module',
      entry: 'http://localhost:2001/mf-manifest.json',
      alias: 'sample_module',
    },
  ],
});
loadRemote('sample_module/App').then(() =>{
  console.log("loaded sample app")
});
const App = () => {
  return (
    <div className="content">
      <h1>Consumer App</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton />
      </div>
    </div>
  );
};

export default App;