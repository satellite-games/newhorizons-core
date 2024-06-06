import type { NonFunctionPropertyNames, NumericProperty } from '../../types/private-types';
import type { GameObject } from '../game-object';
/**
 * Modifiers are used to increase or decrease specific values of a game object.
 * They are commonly used to modify character stats like primary or secondary attributes
 * or item values like damage or accuracy
 */
export class Modifier<TModifiedGameObject extends GameObject | unknown> {
  /**
   * The cause of the modifier. Usually matches the name or id of the game object that is causing
   * the modification.
   */
  declare cause: string;
  /*
   * The name of the game object that is being modified.
   */
  declare modifiedName: string;
  /**
   * The unique identifier of the game object that is being modified. This is optional. If none
   * is provided, the modifier will be applied to all game objects matching `modifiedName`.
   */
  declare modifiedId?: string;
  /**
   * The key of the value that is being modified. Must be a property key of the modified game object.
   * Can also be multiple keys.
   */
  declare modifiedKeys: NumericProperty<TModifiedGameObject> | NumericProperty<TModifiedGameObject>[];
  /**
   * The amount by which the value is modified. This can be positive or negative.
   */
  declare amount: number;

  constructor(init: Pick<Modifier<TModifiedGameObject>, NonFunctionPropertyNames<Modifier<TModifiedGameObject>>>) {
    Object.assign(this, init);
  }

  /**
   * Returns the modified keys as an array.
   */
  getModifiedKeys(): NumericProperty<TModifiedGameObject>[] {
    return Array.isArray(this.modifiedKeys) ? this.modifiedKeys : [this.modifiedKeys];
  }
}

/**
 * Returns the modified value of the specified key by applying all matching modifiers to the
 * given game object.
 * @param gameObject The game object to get the modified value for.
 * @param key The key of the value to get the modified value for.
 * @param modifiers The modifiers to apply to the value.
 * @returns The modified value.
 */
export const getModifiedValue = <TGameObject extends GameObject>(
  gameObject: TGameObject,
  key: NumericProperty<TGameObject>,
  modifiers: Modifier<TGameObject>[],
) => {
  const unmodifiedValue = gameObject[key as keyof typeof gameObject];
  if (typeof unmodifiedValue !== 'number') {
    throw new Error(
      `${gameObject.constructor.name}.${key as string} is not a numeric property and thus cannot be modified.`,
    );
  }
  const matchingModifiers = modifiers.filter((modifier) => {
    if (modifier.modifiedId) {
      return modifier.modifiedId === gameObject.id && modifier.getModifiedKeys().includes(key);
    } else {
      return modifier.modifiedName === gameObject.name && modifier.getModifiedKeys().includes(key);
    }
  });
  let modifiedValue = unmodifiedValue as number;
  for (const modifier of matchingModifiers) {
    modifiedValue += modifier.amount;
  }
  return modifiedValue;
};
