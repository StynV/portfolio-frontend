import { render } from '@testing-library/react'
import FooterLink from './footer-link'

const staticImageData: StaticImageData = {
    src: 'https://i.picsum.photos/id/951/200/300.jpg?hmac=88jOMC9sFPf_Y7l4aMvDLBsqNuoprR9_Rvvbqb0oRPA',
    height: 1,
    width: 1
}

describe('FooterLink', () => {
    it('renders', () => {
        const { container } = render(
            <FooterLink link='link' text='text' src={staticImageData} />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('a')).toBeTruthy()
        expect(container.querySelector('span')).toBeTruthy()
        expect(container.querySelector('img')).toBeTruthy()
        expect(container.querySelector('noscript')).toBeTruthy()
    })
})