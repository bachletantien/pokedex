/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import './App.scss';
import PokemonCollection from './components/PokemonCollection/PokemonCollection';
import Footer from './components/Footer/Footer';
import tw from 'twin.macro';
import { ReactComponent as ProgressIcon } from 'assets/svg/progress.svg';
import { Pokemon, PokemonClient } from 'pokenode-ts';

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [viewDetail, setDetail] = useState<Detail>({
    id: 0,
    isOpened: false,
  });

  const pokemonClient = new PokemonClient({ logOptions: { enabled: false } });
  const getPokemons = async () => {
    const res = await pokemonClient.listPokemons(offset);

    setOffset(offset + res.results.length);

    const _pokemons = await Promise.all(
      res.results.map(async ({ name }) => {
        const poke = await pokemonClient.getPokemonByName(name);
        return poke;
      })
    );
    return _pokemons;
  };

  useEffect(() => {
    (async () => {
      try {
        const _pokemons = await getPokemons();
        setPokemons(_pokemons);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onLoadMore = async () => {
    setLoading(true);
    try {
      const _pokemons = await getPokemons();
      setTimeout(() => {
        setPokemons((p) => [...p, ..._pokemons]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection pokemons={pokemons} viewDetail={viewDetail} setDetail={setDetail} />
        <div onClick={onLoadMore} css={tw`flex justify-center my-5 cursor-pointer`}>
          <a css={tw`bg-black text-white inline-block p-2 rounded-[15px ]`}>
            {loading ? (
              <span css={tw`flex items-center justify-center gap-5 `}>
                Loading
                <ProgressIcon css={tw`animate-spin text-[#3d405b]  w-5 h-5  `} />
              </span>
            ) : (
              'Load more'
            )}
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
