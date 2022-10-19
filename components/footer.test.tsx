import { render } from '@testing-library/react'
import Footer from './footer'

describe('Footer', () => {
    it('renders', () => {
        const { container, getByText } = render(
            <Footer />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('footer')).toBeTruthy()
        expect(container.getElementsByClassName('footer')).toBeTruthy()
        expect(getByText('STYN.VERCAUTEREN@OUTLOOK.COM', { selector: 'div' })).toBeTruthy()
    })
})