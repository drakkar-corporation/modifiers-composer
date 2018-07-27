const composeModifiers = modifiersConfig => props => {
  if (!props) {
    return
  }

  const { modifiers, theme } = props

  if (!modifiersConfig) {
    throw new Error('No config was provided to modifiers-composer')
  }

  if (!modifiers) return []

  if (!Array.isArray(modifiers)) {
    throw new Error('Invalid modifiers provided. It should be an array')
  }

  return modifiers.map(modifier => {
    if (!modifier) {
      console.warn(
        `${modifier} modifier key doesn't exists in provided modifiers config`
      )
      return ''
    }
    return modifiersConfig[modifier]({ theme })
  })
}

export default composeModifiers
