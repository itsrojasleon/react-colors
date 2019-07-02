import React from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';
import Navbar from './Navbar';

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
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className='PaletteColors'>{colorBoxes}</div>
      </div>
    );
  }
}
export default Palette;
