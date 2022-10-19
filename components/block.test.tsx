import { render } from '@testing-library/react'
import Block from './block'
import BlockData from '../interfaces/BlockData'

const blockData: BlockData = {
    body: 'body',
    subtitle: 'subtitle',
    title: 'title',
    duration: 'duration',
    icons: ['icons'],
    position: 1,
    backgroundColor: 'backgroundColor',
    image: 'https://i.picsum.photos/id/951/200/300.jpg?hmac=88jOMC9sFPf_Y7l4aMvDLBsqNuoprR9_Rvvbqb0oRPA',
}

describe('Block', () => {
    it('renders', () => {
        const { container, getByText } = render(
            <Block block={blockData} klasse='klasse' titleClass='titleClass' />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('h1')).toBeTruthy()
        expect(getByText('title', { selector: 'h1' })).toBeTruthy()

        expect(container.getElementsByClassName('klasse')).toBeTruthy()

        expect(container.querySelector('h2')).toBeTruthy()
        expect(container.querySelector('p')).toBeTruthy()
        expect(container.querySelector('b')).toBeTruthy()
        expect(getByText('Experience:', { selector: 'b' })).toBeTruthy()
        expect(getByText('duration', { selector: 'p' })).toBeTruthy()

        expect(container.getElementsByClassName('blockFoto')).toBeTruthy()
    })
})