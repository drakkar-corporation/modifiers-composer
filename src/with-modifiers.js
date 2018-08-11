import React from 'react'
import modifiersComposer from './modifiers-composer'

export default modifiersConfig => Component => {
  const modifiersComposed = modifiersComposer(modifiersConfig)
  return class WithModifiers extends React.Component {
    render() {
      const { modifiers, theme } = this.props;
      const composedModifiers = modifiersComposer(modifiersConfig)
      return <Component {...this.props} modifiers={composedModifiers({ modifiers, theme })} />
    }
  }
}
