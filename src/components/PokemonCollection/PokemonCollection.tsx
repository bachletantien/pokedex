import { Pokemon } from 'pokenode-ts';
import PokemonList from '../PokemonCard/PokemonCard';
import './pokemon.scss';

interface PokemonCollectionProps {
  pokemons: Pokemon[];
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection = (props: PokemonCollectionProps) => {
  const { pokemons, viewDetail, setDetail } = props;
  const selectPokemon = (id: number) => {
    setDetail({
      id: id,
      isOpened: true,
    });
  };

  return (
    <div>
      <section className="collection-container">
        {pokemons?.map((pokemon) => {
          return (
            <div key={pokemon.name + pokemon} onClick={() => selectPokemon(pokemon.id)}>
              <PokemonList
                viewDetail={viewDetail}
                setDetail={setDetail}
                name={pokemon.name}
                id={pokemon.id}
                abilities={pokemon.abilities}
                types={pokemon.types}
                image={pokemon.sprites.other.dream_world.front_default || ''}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PokemonCollection;
