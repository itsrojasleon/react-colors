import React from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';

class Palette extends React.Component {
  render() {
    const colorBoxes = this.props.colors.map(({ color, name, id }) => {
      return <ColorBox key={color} background={color} name={name} />;
    });
    return (
      <div className='Palette'>
        <div className='PaletteColors'>{colorBoxes}</div>
      </div>
    );
  }
}
export default Palette;
