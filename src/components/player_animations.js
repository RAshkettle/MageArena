/**
 * @module player_animations
 * @description Constants mapping for player animation names
 * This file maps the complex animation names from the Skeleton.glb file
 * to simpler, more readable constants for use in code.
 */

/**
 * Removes all instances of "CharacterArmature" and "|" from animation names
 *
 * @param {string} animName - The original animation name from the GLTF file
 * @returns {string} The simplified animation name
 */
const simplifyAnimationName = (animName) => {
  return animName
    .replace(/CharacterArmature\|/g, "")
    .replace(/CharacterArmature/g, "")
    .replace(/\|/g, "");
};

/**
 * Animation name constants for the player character
 * These are derived from the original animation names in the Skeleton.glb file
 * by removing all instances of "CharacterArmature" and "|"
 */
export const PLAYER_ANIMS = {
  // Idle animations
  IDLE: "CharacterArmature|CharacterArmature|CharacterArmature|Idle|CharacterArmature|Idle",

  // Movement animations
  WALK: "CharacterArmature|CharacterArmature|CharacterArmature|Walk|CharacterArmature|Walk",
  RUN: "CharacterArmature|CharacterArmature|CharacterArmature|Run|CharacterArmature|Run",
  JUMP: "CharacterArmature|CharacterArmature|CharacterArmature|Jump|CharacterArmature|Jump",

  // Combat animations
  ATTACK:
    "CharacterArmature|CharacterArmature|CharacterArmature|Attack|CharacterArmature|Attack",
  SPELL_CAST:
    "CharacterArmature|CharacterArmature|CharacterArmature|Spell_Cast|CharacterArmature|Spell_Cast",

  // Other animations
  DEATH:
    "CharacterArmature|CharacterArmature|CharacterArmature|Death|CharacterArmature|Death",
  HIT_REACT:
    "CharacterArmature|CharacterArmature|CharacterArmature|Hit-React|CharacterArmature|Hit-React",
};

/**
 * Simplified animation names for UI display
 * Maps the complex animation names to their simplified versions
 */
export const ANIM_DISPLAY_NAMES = Object.entries(PLAYER_ANIMS).reduce(
  (acc, [key, value]) => {
    acc[value] = simplifyAnimationName(value);
    return acc;
  },
  {}
);

/**
 * Gets the simplified name for an animation
 *
 * @param {string} complexName - The complex animation name from the GLTF file
 * @returns {string} The simplified animation name
 */
export const getSimpleName = (complexName) => {
  return ANIM_DISPLAY_NAMES[complexName] || simplifyAnimationName(complexName);
};

export default PLAYER_ANIMS;
