import { characterOriginMocks, characterPresetMocks } from '@/mocks';
import { describe, expect, it, beforeEach } from 'vitest';
import { CharacterCreationContext } from './character-creation.context';
import { constants } from '@/constants';
import type { CharacterPrimaryAttributeName, CharacterSkillName } from '@/main';

describe('constructor', () => {
  it('should create a new context with the provided preset and initialize the character', () => {
    const preset = characterPresetMocks.default;
    const context = new CharacterCreationContext(preset);
    expect(context.preset).toEqual(preset);
    expect(context.character).toBeDefined();
    expect(context.character.general.name).toBe(constants.CHARACTER_DEFAULT_NAME);
  });
});

describe('applyOrigin', () => {
  let context: CharacterCreationContext;
  let origin = characterOriginMocks.simple;
  let primaryAttributeBonus = Object.keys(origin.primaryAttributeBonuses)[0] as CharacterPrimaryAttributeName;
  let selectedSkillBonuses: { value: number; name: CharacterSkillName }[] = [
    {
      value: origin.selectableSkillBonuses[0].value,
      name: origin.selectableSkillBonuses[0].skills[1],
    },
    {
      value: origin.selectableSkillBonuses[1].value,
      name: origin.selectableSkillBonuses[1].skills[0],
    },
  ];

  beforeEach(() => {
    const preset = characterPresetMocks.default;
    context = new CharacterCreationContext(preset);
  });

  it('should correctly apply the origin', () => {
    const { character } = context;
    expect(character.general.originName).toBe('');
    context.applyOrigin(origin, selectedSkillBonuses, 'Esperanto');
    expect(character.general.originName).toBe(origin.name);
  });

  it('should throw an error when attempting to call a second time', () => {
    context.applyOrigin(origin, selectedSkillBonuses, 'Esperanto');
    expect(() => context.applyOrigin(origin, selectedSkillBonuses, 'Esperanto')).toThrow();
  });
});
