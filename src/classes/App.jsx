import React, { Component } from 'react';

import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selected: '',
    };

    this.select = this.select.bind(this);
  }

  select(type) {
    const { selected } = this.state;

    this.setState({
      selected: selected === type ? '' : type,
    });
  }

  render() {
    const { data } = this.props;
    const { selected } = this.state;

    const caught = [data[0], data[3]];

    let types = data.map(pokemon => pokemon.types.map(t => t.type.name)).flat();

    types = [...new Set(types)];

    const displayedPokemons = selected
      ? data.filter(pokemon =>
          pokemon.types.map(t => t.type.name).includes(selected),
        )
      : data;

    return (
      <div className="App">
        <Trainer
          name="Sacha"
          caught={caught}
          address="1 rue de Bourg palette"
        />
        <Filters types={types} selected={selected} select={this.select} />
        <PokemonList items={displayedPokemons} />
      </div>
    );
  }
}

export default App;
