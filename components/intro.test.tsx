import { render } from '@testing-library/react'
import IntroData from '../interfaces/IntroData'
import Intro from './intro'

const introData: IntroData = {
    body: 'body',
    subtitle: 'subtitle',
    title: 'title'
}

describe('Intro', () => {
    it('renders', () => {
        const { container, getByText } = render(
            <Intro intro={introData} />,
        )

        expect(container).toMatchSnapshot()

        expect(container.getElementsByClassName('intro')).toBeTruthy()
        expect(container.getElementsByClassName('introText')).toBeTruthy()

        expect(getByText('subtitle', { selector: 'h2' })).toBeTruthy()
        expect(getByText('body', { selector: 'p' })).toBeTruthy()
    })
})