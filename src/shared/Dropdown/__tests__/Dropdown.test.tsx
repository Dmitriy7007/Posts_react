import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { shallow } from 'enzyme'
import React from 'react'
import { Dropdown } from '../Dropdown'

Enzyme.configure({ adapter: new Adapter() })

describe('Dropdown', () => {
	test('should render', () => {
		const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
		expect(wrapper).toBeDefined()
		console.log(wrapper.find('div.container').debug())
		expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy()
	})

	test('should render (snapshot)', () => {
		const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
		expect(wrapper).toMatchSnapshot()
	})
})
