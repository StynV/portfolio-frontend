import { render } from '@testing-library/react'
import Header from './header'

describe('Header', () => {
    it('renders', () => {
        const { container, getByText } = render(
            <Header />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('header')).toBeTruthy()
        expect(container.querySelector('nav')).toBeTruthy()
        expect(getByText('Styn Vercauteren', { selector: 'span' })).toBeTruthy()
        expect(getByText('FULLSTACK DEVELOPER', { selector: 'p' })).toBeTruthy()
        expect(getByText('STYN.VERCAUTEREN@OUTLOOK.COM', { selector: 'p' })).toBeTruthy()
    })
})