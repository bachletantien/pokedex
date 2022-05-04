/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection/PokemonCollection';
import Footer from './components/Footer/Footer';
// import tw from 'twin.macro';

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get<ApiResponse<NamedAPIResource[]>>(
        'https://pokeapi.co/api/v2/pokemon?limit=20'
      );

      const _pokemons = await Promise.all(
        res.data?.results.map(async ({ url }: NamedAPIResource) => {
          const poke = await axios.get<Pokemon>(url);
          return poke.data;
        })
      );
      setPokemons(_pokemons);
    };

    getPokemon();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection pokemons={pokemons} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
