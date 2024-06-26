import type { Blueprint } from '@satellite-games/orbit';
import type { CharacterOrigin } from '@/game-objects/character/origin/origin.go';

export const characterOrigins: Blueprint<CharacterOrigin>[] = [
  {
    name: 'character.origin.earth-urban',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.charisma': 1 },
    fixedSkillBonuses: {
      'character.skill.pistols': 1,
      'character.skill.computers': 3,
      'character.skill.cooking': 1,
      'character.skill.general-knowledge': 2,
      'character.skill.orientation': 1,
      'character.skill.judgement': 1,
      'character.skill.reasoning': 1,
      'character.skill.self-control': 1,
      'character.skill.soft-skills': 2,
      'character.skill.trading': 1,
    },
    selectableSkillBonuses: [
      {
        value: 1,
        skills: ['character.skill.melee-hands', 'character.skill.melee-weapons', 'character.skill.throwing'],
      },
      {
        value: 1,
        skills: [
          'character.skill.spaceships',
          'character.skill.airplanes',
          'character.skill.land-vehicles',
          'character.skill.water-vehicles',
        ],
      },
      {
        value: 1,
        skills: [
          'character.skill.astronomy',
          'character.skill.biology-and-medicine',
          'character.skill.chemistry',
          'character.skill.electronics',
          'character.skill.geology',
          'character.skill.history',
          'character.skill.information-technology',
          'character.skill.law',
          'character.skill.mathematics-and-economy',
          'character.skill.physics-and-mechanics',
          'character.skill.spaceflight',
        ],
      },
      {
        value: 1,
        skills: ['character.skill.art', 'character.skill.gaming', 'character.skill.music'],
      },
    ],
  },
  {
    name: 'character.origin.earth-rural',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.agility': 1 },
    fixedSkillBonuses: {
      'character.skill.pistols': 1,
      'character.skill.cooking': 1,
      'character.skill.material-processing': 2,
      'character.skill.orientation': 1,
      'character.skill.climbing': 1,
      'character.skill.inebriating': 1,
      'character.skill.perception': 1,
      'character.skill.running': 1,
      'character.skill.swimming': 1,
    },
    selectableSkillBonuses: [
      {
        value: 1,
        skills: ['character.skill.melee-hands', 'character.skill.throwing'],
      },
      {
        value: 1,
        skills: ['character.skill.energy-weapons', 'character.skill.rifles'],
      },
      {
        value: 1,
        skills: ['character.skill.airplanes', 'character.skill.land-vehicles', 'character.skill.water-vehicles'],
      },
    ],
  },
  {
    name: 'character.origin.mars',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.courage': 1 },
    fixedSkillBonuses: {
      'character.skill.pistols': 1,
      'character.skill.computers': 1,
      'character.skill.orientation': 3,
      'character.skill.body-control': 2,
      'character.skill.inebriating': 1,
      'character.skill.perception': 1,
      'character.skill.running': 1,
    },
    selectableSkillBonuses: [
      {
        value: 2,
        skills: ['character.skill.melee-hands', 'character.skill.melee-weapons', 'character.skill.throwing'],
      },
      {
        value: 1,
        skills: ['character.skill.energy-weapons', 'character.skill.onboard-weapons', 'character.skill.rifles'],
      },
      {
        value: 1,
        skills: [
          'character.skill.electronics',
          'character.skill.gaming',
          'character.skill.geology',
          'character.skill.information-technology',
          'character.skill.law',
          'character.skill.mathematics-and-economy',
          'character.skill.physics-and-mechanics',
          'character.skill.spaceflight',
          'character.skill.survival',
        ],
      },
    ],
  },
  {
    name: 'character.origin.venus',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.dexterity': 1 },
    fixedSkillBonuses: {
      'character.skill.melee-hands': 1,
      'character.skill.pistols': 2,
      'character.skill.computers': 1,
      'character.skill.cooking': 1,
      'character.skill.disguising': 1,
      'character.skill.writing': 1,
      'character.skill.general-knowledge': 2,
      'character.skill.inebriating': 1,
      'character.skill.perception': 2,
      'character.skill.judgement': 1,
      'character.skill.reasoning': 1,
      'character.skill.self-control': 1,
      'character.skill.soft-skills': 3,
    },
    selectableSkillBonuses: [
      {
        value: 1,
        skills: ['character.skill.acting', 'character.skill.flirting', 'character.skill.inspiring'],
      },
      {
        value: 1,
        skills: ['character.skill.art', 'character.skill.gaming', 'character.skill.music'],
      },
    ],
  },
  {
    name: 'character.origin.ceres',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.intuition': 1 },
    fixedSkillBonuses: {
      'character.skill.melee-hands': 1,
      'character.skill.pistols': 1,
      'character.skill.computers': 2,
      'character.skill.cooking': 1,
      'character.skill.material-processing': 2,
      'character.skill.general-knowledge': 1,
      'character.skill.inebriating': 2,
      'character.skill.perception': 1,
      'character.skill.judgement': 1,
      'character.skill.reasoning': 1,
      'character.skill.trading': 3,
      'character.skill.spaceships': 3,
    },
    selectableSkillBonuses: [
      {
        value: 1,
        skills: [
          'character.skill.astronomy',
          'character.skill.electronics',
          'character.skill.geology',
          'character.skill.information-technology',
          'character.skill.law',
          'character.skill.mathematics-and-economy',
          'character.skill.physics-and-mechanics',
          'character.skill.spaceflight',
        ],
      },
    ],
  },
  {
    name: 'character.origin.europa',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.cleverness': 1 },
    fixedSkillBonuses: {
      'character.skill.computers': 3,
      'character.skill.cooking': 1,
      'character.skill.writing': 1,
      'character.skill.general-knowledge': 3,
      'character.skill.swimming': 2,
      'character.skill.judgement': 1,
      'character.skill.reasoning': 3,
      'character.skill.self-control': 1,
      'character.skill.soft-skills': 2,
    },
    selectableSkillBonuses: [
      {
        value: 1,
        skills: [
          'character.skill.astronomy',
          'character.skill.biology-and-medicine',
          'character.skill.chemistry',
          'character.skill.geology',
          'character.skill.information-technology',
          'character.skill.mathematics-and-economy',
          'character.skill.physics-and-mechanics',
          'character.skill.spaceflight',
        ],
      },
      {
        value: 1,
        skills: [
          'character.skill.art',
          'character.skill.gaming',
          'character.skill.history',
          'character.skill.law',
          'character.skill.music',
          'character.skill.tactics-and-strategy',
        ],
      },
    ],
  },
  {
    name: 'character.origin.ganymede',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.constitution': 1 },
    fixedSkillBonuses: {
      'character.skill.pistols': 1,
      'character.skill.cooking': 2,
      'character.skill.material-processing': 3,
      'character.skill.survival': 1,
      'character.skill.body-control': 1,
      'character.skill.climbing': 2,
      'character.skill.inebriating': 1,
      'character.skill.running': 1,
      'character.skill.judgement': 2,
      'character.skill.self-control': 1,
      'character.skill.trading': 2,
      'character.skill.land-vehicles': 1,
    },
    selectableSkillBonuses: [
      {
        value: 2,
        skills: ['character.skill.melee-hands', 'character.skill.melee-weapons', 'character.skill.throwing'],
      },
    ],
  },
  {
    name: 'character.origin.titan',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.strength': 1 },
    fixedSkillBonuses: {
      'character.skill.melee-hands': 3,
      'character.skill.computers': 1,
      'character.skill.material-processing': 3,
      'character.skill.orientation': 1,
      'character.skill.body-control': 1,
      'character.skill.inebriating': 3,
      'character.skill.running': 1,
      'character.skill.judgement': 1,
      'character.skill.trading': 1,
    },
    selectableSkillBonuses: [
      {
        value: 1,
        skills: ['character.skill.energy-weapons', 'character.skill.onboard-weapons', 'character.skill.rifles'],
      },
      {
        value: 1,
        skills: ['character.skill.airplanes', 'character.skill.land-vehicles'],
      },
      {
        value: 1,
        skills: [
          'character.skill.chemistry',
          'character.skill.electronics',
          'character.skill.geology',
          'character.skill.information-technology',
          'character.skill.physics-and-mechanics',
          'character.skill.spaceflight',
        ],
      },
    ],
  },
  {
    name: 'character.origin.miranda',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.courage': 1 },
    fixedSkillBonuses: {
      'character.skill.pistols': 1,
      'character.skill.computers': 2,
      'character.skill.general-knowledge': 1,
      'character.skill.history': 1,
      'character.skill.inspiring': 1,
      'character.skill.judgement': 1,
      'character.skill.reasoning': 2,
      'character.skill.soft-skills': 1,
      'character.skill.trading': 3,
      'character.skill.spaceships': 1,
    },
    selectableSkillBonuses: [
      {
        value: 1,
        skills: [
          'character.skill.art',
          'character.skill.biology-and-medicine',
          'character.skill.chemistry',
          'character.skill.electronics',
          'character.skill.gaming',
          'character.skill.geology',
          'character.skill.information-technology',
          'character.skill.mathematics-and-economy',
          'character.skill.music',
          'character.skill.spaceflight',
        ],
      },
    ],
  },
  {
    name: 'character.origin.codex-triton',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.intuition': 1 },
    fixedSkillBonuses: {
      'character.skill.pistols': 1,
      'character.skill.computers': 1,
      'character.skill.general-knowledge': 3,
      'character.skill.body-control': 1,
      'character.skill.judgement': 1,
      'character.skill.reasoning': 2,
      'character.skill.soft-skills': 1,
    },
    selectableSkillBonuses: [
      {
        value: 2,
        skills: ['character.skill.melee-weapons', 'character.skill.throwing'],
      },
      {
        value: 1,
        skills: ['character.skill.energy-weapons', 'character.skill.onboard-weapons', 'character.skill.rifles'],
      },
      {
        value: 1,
        skills: ['character.skill.spaceships', 'character.skill.airplanes', 'character.skill.land-vehicles'],
      },
      {
        value: 1,
        skills: [
          'character.skill.art',
          'character.skill.astronomy',
          'character.skill.biology-and-medicine',
          'character.skill.chemistry',
          'character.skill.electronics',
          'character.skill.history',
          'character.skill.information-technology',
          'character.skill.mathematics-and-economy',
          'character.skill.music',
          'character.skill.physics-and-mechanics',
          'character.skill.spaceflight',
          'character.skill.tactics-and-strategy',
        ],
      },
    ],
  },
  {
    name: 'character.origin.codex-moons',
    suitableTraits: [],
    primaryAttributeBonuses: { 'character.primary-attribute.strength': 1 },
    fixedSkillBonuses: {
      'character.skill.melee-hands': 2,
      'character.skill.cooking': 1,
      'character.skill.material-processing': 3,
      'character.skill.body-control': 3,
      'character.skill.climbing': 2,
      'character.skill.inebriating': 2,
      'character.skill.perception': 1,
      'character.skill.running': 1,
      'character.skill.judgement': 1,
      'character.skill.self-control': 1,
      'character.skill.trading': 1,
      'character.skill.land-vehicles': 1,
    },
    selectableSkillBonuses: [
      {
        value: 2,
        skills: ['character.skill.melee-weapons', 'character.skill.throwing'],
      },
      {
        value: 1,
        skills: [
          'character.skill.chemistry',
          'character.skill.electronics',
          'character.skill.gaming',
          'character.skill.geology',
          'character.skill.information-technology',
          'character.skill.physics-and-mechanics',
          'character.skill.spaceflight',
          'character.skill.survival',
        ],
      },
    ],
  },
];
