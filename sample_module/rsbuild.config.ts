import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 2001,
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'sample_module',
          remotes: {
            federation_provider:
              'federation_provider@http://localhost:3000/mf-manifest.json',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});