import React from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';
import Navbar from './Navbar';

class Palette extends React.Component {
  state = { level: 500, format: 'hex' };

  changeLevel = level => this.setState({ level });

  handleChange = format => this.setState({ format });

  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => {
      return (
        <ColorBox key={color.id} background={color[format]} name={color.name} />
      );
    });
    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.handleChange}
        />
        <div className='PaletteColors'>{colorBoxes}</div>
        <footer className='Palette-fotter'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    );
  }
}
export default Palette;
