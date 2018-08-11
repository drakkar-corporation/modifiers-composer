import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import withModifiers from './with-modifiers'

configure({ adapter: new Adapter() })

test('It should add modifiers property', () => {
  const modifiersConfig = {
    uppercase: () => 'text-transform: uppercase;'
  }
  const HelloWorld = withModifiers(modifiersConfig)(() => (
    <div>Hello World !</div>
  ))
  const wrapper = shallow(<HelloWorld modifiers={['uppercase']} />)
  console.log(wrapper.props(), 'wrapper props')
  expect(wrapper.prop('modifiers')).toEqual(['text-transform: uppercase;'])
})
