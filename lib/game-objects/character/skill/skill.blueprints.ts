import type { Blueprint, Dependency } from '@satellite-games/orbit';
import type { CharacterSkill } from './skill.go';

export const characterSkills: Blueprint<CharacterSkill, 'min' | 'current' | 'max'>[] = [
  {
    name: 'character.skill.energy-weapons',
    category: 'character.skill-category.combat',
    factor: 6,
    constraintMultiplier: 1,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.heavy-weapons',
    category: 'character.skill-category.combat',
    factor: 6,
    constraintMultiplier: 1,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.strength',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.melee-hands',
    category: 'character.skill-category.combat',
    factor: 4,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.constitution',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.melee-weapons',
    category: 'character.skill-category.combat',
    factor: 4,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.agility',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.onboard-weapons',
    category: 'character.skill-category.combat',
    factor: 6,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.pistols',
    category: 'character.skill-category.combat',
    factor: 5,
    constraintMultiplier: 1,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.dexterity',
      'character.primary-attribute.dexterity',
    ],

    isCoreSkill: true,
  },
  {
    name: 'character.skill.rifles',
    category: 'character.skill-category.combat',
    factor: 6,
    constraintMultiplier: 1,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
    ],

    isCoreSkill: false,
  },
  {
    name: 'character.skill.throwing',
    category: 'character.skill-category.combat',
    factor: 4,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.dexterity',
      'character.primary-attribute.strength',
    ],

    isCoreSkill: true,
  },
  {
    name: 'character.skill.animal-handling',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.biology-and-medicine',
        key: 'current',
        value: 3,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.computers',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.cooking',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.disguising',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.drawing',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.electrical-engineering',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.dexterity',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.electronics',
        key: 'current',
        value: 3,
      },
      {
        dependencyName: 'character.skill.information-technology',
        key: 'current',
        level: 3,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.explosives',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.chemistry',
        key: 'current',
        value: 3,
      },
      {
        dependencyName: 'character.skill.electronics',
        key: 'current',
        value: 3,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.making-music',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
      'character.primary-attribute.dexterity',
    ],

    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.music',
        key: 'current',
        value: 3,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.material-processing',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.mechanical-engineering',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.dexterity',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.electronics',
        key: 'current',
        value: 3,
      },
      {
        dependencyName: 'character.skill.physics-and-mechanics',
        key: 'current',
        value: 3,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.medical-care',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.biology-and-medicine',
        key: 'current',
        value: 3,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.pharmaceutics',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.biology-and-medicine',
        key: 'current',
        value: 3,
      },
      {
        dependencyName: 'character.skill.chemistry',
        key: 'current',
        value: 3,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.playing-games',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.gaming',
        key: 'current',
        value: 3,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.programming',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
    dependencies: [
      {
        dependencyName: 'character.skill.information-technology',
        key: 'current',
        value: 5,
      },
    ] as Dependency<CharacterSkill>[],
  },
  {
    name: 'character.skill.writing',
    category: 'character.skill-category.crafting',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.art',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.astronomy',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.biology-and-medicine',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.chemistry',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.electronics',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.gaming',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.general-knowledge',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.geology',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.history',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.information-technology',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.law',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.mathematics-and-economy',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.music',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.orientation',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.physics-and-mechanics',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.spaceflight',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.survival',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.tactics-and-strategy',
    category: 'character.skill-category.knowledge',
    factor: 3,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.body-control',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.agility',
      'character.primary-attribute.constitution',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.climbing',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.agility',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.dancing',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
      'character.primary-attribute.agility',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.diving',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.agility',
      'character.primary-attribute.constitution',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.inebriating',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.constitution',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.perception',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.running',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.agility',
      'character.primary-attribute.agility',
      'character.primary-attribute.constitution',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.singing',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
      'character.primary-attribute.constitution',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.sneaking-hiding',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 1,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.agility',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.stealing',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 1,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.dexterity',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.swimming',
    category: 'character.skill-category.physical',
    factor: 5,
    constraintMultiplier: 2,
    primaryAttributes: [
      'character.primary-attribute.agility',
      'character.primary-attribute.constitution',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.acting',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.flirting',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.charisma',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.inspiring',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.intimidating',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.courage',
      'character.primary-attribute.strength',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.judgement',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.intuition',
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.reasoning',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.charisma',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.self-control',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.soft-skills',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.teaching',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.trading',
    category: 'character.skill-category.social',
    factor: 4,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.charisma',
    ],
    isCoreSkill: true,
  },
  {
    name: 'character.skill.spaceships',
    category: 'character.skill-category.vehicles',
    factor: 6,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
      'character.primary-attribute.constitution',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.airplanes',
    category: 'character.skill-category.vehicles',
    factor: 6,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.intuition',
      'character.primary-attribute.constitution',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.land-vehicles',
    category: 'character.skill-category.vehicles',
    factor: 6,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
  {
    name: 'character.skill.water-vehicles',
    category: 'character.skill-category.vehicles',
    factor: 6,
    constraintMultiplier: 0,
    primaryAttributes: [
      'character.primary-attribute.courage',
      'character.primary-attribute.cleverness',
      'character.primary-attribute.intuition',
    ],
    isCoreSkill: false,
  },
];
