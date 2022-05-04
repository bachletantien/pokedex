import './pokemon.scss';
import tw from 'twin.macro';

interface PokemonListProps {
  name: string;
  id: number;
  image: string;
}

const PokemonList = (props: PokemonListProps) => {
  const { name, id, image } = props;
  return (
    <div className="pokemon-list-container box-wrapper">
      <div className="overlay-before"></div>
      <div className="overlay-after"></div>
      <div className="pokemon-item">
        <p className="pokemon-name">{name}</p>
        <img className="w-[100px] h-[100px]" src={image} alt={name} />
      </div>
    </div>
  );
};

export default PokemonList;
