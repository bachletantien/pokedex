import PokemonList from '../PokemonCard/PokemonList';
import './pokemon.scss';

interface PokemonCollectionProps {
  pokemons: Pokemon[];
}

const PokemonCollection = (props: PokemonCollectionProps) => {
  const { pokemons } = props;
  return (
    <div>
      <section className="collection-container">
        {pokemons?.map((pokemon) => {
          return (
            <PokemonList
              key={pokemon.name + pokemon}
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default || ''}
            />
          );
        })}
      </section>
    </div>
  );
};

export default PokemonCollection;
