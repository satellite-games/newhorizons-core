import { describe, expect, it } from 'vitest';
import { GameObject } from '@/main';
import { getOwnerCharacter } from './character.util';

describe('getOwnerCharacter', () => {
  it('should return the owner character of a game object', () => {
    class Child extends GameObject {}
    class Parent extends GameObject {
      children: Record<string, Child[]> = { child: [] };
    }
    const parent = new Parent({ name: 'parent' });
    const child = new Child({ name: 'child' });
    parent.addChild(child as never);
    expect(getOwnerCharacter(child)).toBe(parent);
  });

  it('should throw an error if the game object does not have an owner or the owner is not a character', () => {
    class Child extends GameObject {}
    const gameObject = new Child({ name: 'child' });
    expect(() => getOwnerCharacter(gameObject)).toThrow();
  });
});
