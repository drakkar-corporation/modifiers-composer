export const composeModifiers = (modifiersConfig) => ({ theme, modifiers }) => {
  if (!modifiers) return;

  if (!modifiersConfig) {
    console.warn('No config was provided to modifiers-composer')
    return
  }

  if (!Array.isArray(modifiers)) {
    console.warn('Invalid modifiers provided. It should be an array')
    return
  }

  return modifiers
    .map(modifier => {
      if (!modifier) {
        console.warn(
          `${modifier} modifier key doesn't exists in provided modifiers config`
        )
        return ''
      }
      return modifiersConfig[modifier]({ theme })
    })
}
