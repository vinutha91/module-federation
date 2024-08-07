import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 2000,
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_consumer',
          remotes: {
            'federation_provider': 'federation_provider@http://localhost:3000/mf-manifest.json',
            'sample_module':'sample_module@http://localhost:2001/mf-manifest.json'
          },
          exposes: {
            './App': './src/App.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});