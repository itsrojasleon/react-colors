import React from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/Palette.css';

class Palette extends React.Component {
  state = {
    level: 500,
  };
  changeLevel = level => {
    this.setState({ level });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(({ hex, name, id }) => {
      return <ColorBox key={id} background={hex} name={name} />;
    });
    return (
      <div className='Palette'>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          onAfterChange={this.changeLevel}
          step={100}
        />
        <div className='PaletteColors'>{colorBoxes}</div>
      </div>
    );
  }
}
export default Palette;
