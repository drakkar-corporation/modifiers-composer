#modifiers-composer

An utility function to compose BEM modifiers in React with EmotionSH or styled-components

## Install

```
# With npm
npm i modifiers-composer

# With yarn
yarn add modifiers-composer
```

## Usage

### modifiers-composer

```
import modifiersComposer from 'modifiers-composer'
import styled from 'react-emotion'

const modifiersComposed = modifiersComposer({
  uppercase: () => `text-transform: uppercase`,
  colorRed: () => `color: red`
})

const Text = styled.div`
  ${props => modifiersComposed(props)};
`

const Container = () => (
  <Text modifiers={['uppercase', 'colorRed']}>
    Hello World!
  </Text>)
```

### withModifiers

```
import { withModifiers } from 'modifiers-composer'
import styled from 'react-emotion'

const modifiersConfig = {
    uppercase: () => `text-transform: uppercase`,
    colorRed: () => `color: red`
}

const Text = styled.div`
  ${({ modifiers }) => modifiers};
`

const Element = withModifiers(modifiersConfig)(({ modifiers }) => (
  <Text modifiers={['uppercase', 'colorRed']}>
    Hello World!
  </Text>))
```
