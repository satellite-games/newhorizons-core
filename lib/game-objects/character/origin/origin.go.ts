import { GameObject } from '@/base/game-object';
import type { CharacterPrimaryAttributeName } from '@/game-objects/character/primary-attribute';
import type { CharacterOriginName } from './origin.registry';
import type { Character } from '@/character';

/**
 * The character origin defines the cultural background of a character. It usually matches the
 * region where the character was born and raised, the region where the character has spent
 * most of their life or simply the culture that had the most influence on the character's identity.
 */
export class CharacterOrigin extends GameObject {
  declare name: CharacterOriginName;
  /**
   * The list of primary attributes that the character will receive a bonus for.
   * Note: At this time, each origin only provides a bonus of +1 to a single primary attribute.
   */
  declare primaryAttributeBonuses: Partial<Record<CharacterPrimaryAttributeName, number>>;
  /**
   * The list of traits that usually suit characters of this origin. This is merely
   * a suggestion and is intended to help players create characters that fit the origin.
   */
  declare suitableTraits: string[];
  /**
   * The list of skill bonuses that the character will receive.
   */
  declare fixedSkillBonuses: Record<string, number>;
  /**
   * The list of selectable skill bonuses that the character can choose from. These allow
   * the player to choose which skills they want to receive a bonus for.
   */
  declare selectableSkillBonuses: { value: number; skills: string[] }[];

  /**
   * Applies the origin to the character. This method should be called during character creation
   * to apply the origin's bonuses. It should be called after the character has been initialized.
   * @param character The character the origin should be applied to.
   */
  apply(character: Character): void {
    character.general.originName = this.name;
  }
}
