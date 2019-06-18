import React from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';

class Palette extends React.Component {
  render() {
    const colorBoxes = this.props.colors.map(color => {
      return <ColorBox key={color.color} background={color.color} />;
    });
    return (
      <div className='Palette'>
        <div className='PaletteColors'>{colorBoxes}</div>
      </div>
    );
  }
}
export default Palette;
