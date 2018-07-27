import util from 'util'
import modifiersComposer from './modifiers-composer'

const modifiersConfig = {
  modifier1: () => 'modifier_1',
  modifier2: () => 'modifier_2',
  modifier3: () => 'modifier_3'
}

test('should return empty modifiers', () => {
  const composedModifiers = modifiersComposer(modifiersConfig)
  expect(composedModifiers([])).toEqual([])
})

test('should throw an error with noConfig', () => {
  const composedModifiers = modifiersComposer()
  expect(() => composedModifiers({ theme: {}, modifiers: [] })).toThrow(
    /No config/
  )
})

test('It should throw an error with bad modifiers type', () => {
  const composedModifiers = modifiersComposer(modifiersConfig)
  expect(() => composedModifiers({ theme: {}, modifiers: 'foo' })).toThrow(
    /Invalid modifiers/
  )
})

test('It should return a modifiers array', () => {
  const uppercase = () => 'text-transform: uppercase;'
  const colorRed = () => 'color: red;'
  const composedModifiers = modifiersComposer({ uppercase, colorRed })
  const modifiers = ['uppercase', 'colorRed']
  expect(composedModifiers({ theme: {}, modifiers })).toEqual([
    'text-transform: uppercase;',
    'color: red;'
  ])
})
