import { render } from '@testing-library/react'
import BlockIcon from './block-icon';

describe('IBlockIconsProps', () => {
    it('renders React icon', () => {
        const { container, getByText } = render(
            <BlockIcon icon='react' klasse='klasse' />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('svg')).toBeTruthy()
        expect(container.querySelector('title')).toBeTruthy()
        expect(container.querySelector('path')).toBeTruthy()
        expect(getByText('React', { selector: 'title' })).toBeTruthy()
    })

    it('renders Node icon', () => {
        const { container, getByText } = render(
            <BlockIcon icon='node' klasse='klasse' />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('svg')).toBeTruthy()
        expect(container.querySelector('title')).toBeTruthy()
        expect(container.querySelector('path')).toBeTruthy()
        expect(getByText('NodeJs', { selector: 'title' })).toBeTruthy()
    })

    it('renders Java icon', () => {
        const { container, getByText } = render(
            <BlockIcon icon='java' klasse='klasse' />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('svg')).toBeTruthy()
        expect(container.querySelector('title')).toBeTruthy()
        expect(container.querySelector('path')).toBeTruthy()
        expect(getByText('Java', { selector: 'title' })).toBeTruthy()
    })

    it('renders AWS icon', () => {
        const { container, getByText } = render(
            <BlockIcon icon='aws' klasse='klasse' />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('svg')).toBeTruthy()
        expect(container.querySelector('title')).toBeTruthy()
        expect(container.querySelector('path')).toBeTruthy()
        expect(getByText('AWS', { selector: 'title' })).toBeTruthy()
    })

    it('renders Figma icon', () => {
        const { container, getByText } = render(
            <BlockIcon icon='figma' klasse='klasse' />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('svg')).toBeTruthy()
        expect(container.querySelector('title')).toBeTruthy()
        expect(container.querySelector('path')).toBeTruthy()
        expect(getByText('Figma', { selector: 'title' })).toBeTruthy()
    })

    it('renders VueJS icon', () => {
        const { container, getByText } = render(
            <BlockIcon icon='vuejs' klasse='klasse' />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('svg')).toBeTruthy()
        expect(container.querySelector('title')).toBeTruthy()
        expect(container.querySelector('path')).toBeTruthy()
        expect(getByText('Vue JS', { selector: 'title' })).toBeTruthy()
    })

    it('renders default nothing', () => {
        const { container } = render(
            <BlockIcon icon='' klasse='klasse' />,
        )

        expect(container).toMatchSnapshot()

        expect(container.querySelector('div')).toBeTruthy()
    })
})