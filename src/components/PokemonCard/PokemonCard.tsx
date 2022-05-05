/** @jsxImportSource @emotion/react */
import './pokemon.scss';
import { PokemonAbility, PokemonType } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';

interface PokemonCardProps {
  abilities: PokemonAbility[];
  types: PokemonType[];
  name: string;
  id: number;
  image: string;
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCard = (props: PokemonCardProps) => {
  const { name, id, image, abilities, viewDetail, setDetail, types } = props;
  const type = types[0].type.name;
  const [isSelected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail.id, id]);

  return (
    <div data-color={type} className="pokemon-list-container  box-wrapper">
      <div className="overlay-before"></div>
      <div className="overlay-after"></div>
      <div className="pokemon-item">
        <p className="pokemon-name">{name}</p>
        <img className="w-[100px] h-[100px]" src={image} alt={name} />
        {isSelected &&
          abilities.map((ab) => {
            return <div key={ab.ability.name}>{ab.ability.name}</div>;
          })}
      </div>
    </div>
  );
};

export default PokemonCard;
