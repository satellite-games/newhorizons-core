import { Character } from '@/character';
import { CharacterOrigin, CharacterPreset, type Blueprint, type CharacterSkillName } from '@/main';

/**
 * The context for the character creation process. This context is used to store the character
 * during the creation process and keep track of the current progress. When creating a new
 * context, you must provide a `CharacterPreset` that will be used through the process.
 */
export class CharacterCreationContext {
  private _preset: CharacterPreset;
  private _character: Character;

  constructor(preset: Blueprint<CharacterPreset>) {
    this._preset = new CharacterPreset(preset);
    this._character = Character.initialize();
  }

  get preset() {
    return this._preset;
  }

  get character() {
    return this._character;
  }

  get originSelected() {
    return !!this.character.general.originName;
  }

  /**
   * Applies the origin to the character. Cannot be called a second time.
   * @param blueprint The origin blueprint to apply.
   * @param selectedSkillBonuses The selected skill bonuses that the user has chosen.
   * @param firstLanguage The first language that the user has chosen.
   */
  applyOrigin(
    blueprint: Blueprint<CharacterOrigin>,
    selectedSkillBonuses: { value: number; name: CharacterSkillName }[],
    firstLanguage: string,
  ) {
    if (this.originSelected) throw new Error('Origin has already been selected.');
    const origin = new CharacterOrigin(blueprint);
    origin.apply(this.character, selectedSkillBonuses, firstLanguage);
    this.character.general.originName = origin.name;
  }
}
