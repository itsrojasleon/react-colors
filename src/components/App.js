import React from 'react';
import Palette from './Palette';
import seedColors from '../seedColors';
import { generatePalette } from '../colorHelpers';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
