import renderer from 'react-test-renderer';
import BlockIcon from './block-icon';


describe('IBlockIconsProps', () => {
    it('renders', () => {
        const container = renderer.create(
            <BlockIcon icon={'react'} klasse='klasse' />,
        )

        expect(container).toMatchSnapshot()
    })
})