interface Pokemon {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The base experience gained for defeating this Pokémon */
  base_experience: number;
  /** The height of this Pokémon in decimetres */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number;
  /** The weight of this Pokémon in hectograms */
  weight: number;
  /** A list of abilities this Pokémon could potentially have */
  abilities: PokemonAbility[];
  /** A list of forms this Pokémon can take on */
  forms: NamedAPIResource[];
  /** A list of game indices relevent to Pokémon item by generation */
  game_indices: VersionGameIndex[];
  /** A list of items this Pokémon may be holding when encountered */
  held_items: PokemonHeldItem[];
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: PokemonMove[];
  /** A set of sprites used to depict this Pokémon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: PokemonSprites;
  /** The species this Pokémon belongs to */
  species: NamedAPIResource;
  /** A list of base stat values for this Pokémon */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has */
  types: PokemonType[];
}

interface PokemonStat {
  /** The stat the Pokémon has */
  stat: NamedAPIResource;
  /** The effort points (EV) the Pokémon has in the stat */
  effort: number;
  /** The base value of the stat */
  base_stat: number;
}

/**
 * A set of sprites used to depict this Pokémon in the game.
 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
 */
interface PokemonSprites {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pokémon from the front in battle */
  front_shiny: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pokémon from the front in battle */
  front_shiny_female: string | null;
  /** The default depiction of this Pokémon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pokémon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pokémon from the back in battle */
  back_female: string | null;
  /** The shiny female depiction of this Pokémon from the back in battle */
  back_shiny_female: string | null;
  /** Dream World, Official Artwork and Home sprites */
  other: OtherPokemonSprites;
  /** Version Sprites of this Pokémon */
  versions: VersionSprites;
}

/** Other Pokemon Sprites (Dream World and Official Artwork sprites) */
interface OtherPokemonSprites {
  /** Dream World Sprites of this Pokémon */
  dream_world: DreamWorld;
  /** Official Artwork Sprites of this Pokémon */
  'official-artwork': OfficialArtwork;
  /** Home Artwork Sprites of this Pokémon */
  home: Home;
}

/** Version Sprites */
interface VersionSprites {
  /** Generation-I Sprites of this Pokémon */
  'generation-i': GenerationISprites;
  /** Generation-II Sprites of this Pokémon */
  'generation-ii': GenerationIISprites;
  /** Generation-III Sprites of this Pokémon */
  'generation-iii': GenerationIIISprites;
  /** Generation-IV Sprites of this Pokémon */
  'generation-iv': GenerationIVSprites;
  /** Generation-V Sprites of this Pokémon */
  'generation-v': GenerationVSprites;
  /** Generation-VI Sprites of this Pokémon */
  'generation-vi': GenerationVISprites;
  /** Generation-VII Sprites of this Pokémon */
  'generation-vii': GenerationVIISprites;
  /** Generation-VIII Sprites of this Pokémon */
  'generation-viii': GenerationVIIISprites;
}

/** Dream World sprites */
interface DreamWorld {
  /** The default depiction of this Pokémon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pokémon from the front in battle */
  front_female: string | null;
}

interface NamedAPIResource {
  /** The name of the referenced resource */
  name: string;
  /** The URL of the referenced resource */
  url: string;
}
