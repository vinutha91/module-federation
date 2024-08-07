import './App.css';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

/*init({
  name: 'federation_provider',
  remotes: [
    {
      name: 'federation_consumer',
      entry: 'http://localhost:2000/mf-manifest.json',
      alias: 'federation_consumer',
    },
  ],
});

loadRemote('federation_consumer/App').then(() =>{
  console.log("loaded consumer from Provider")
})*/

const App = () => {
  return (
    <div className="content">
      <h1>Provider App</h1>
      <p>Start building amazing things with Rsbuild.</p>
      testaa
    </div>
  );
};

export default App;
