import { render } from '@testing-library/react'
import Certificate from './certificate'
import CertificateData from '../interfaces/CertificateData'

const certificateData: CertificateData = {
    title: 'title',
    icons: ['aws', 'vuejs', 'react'],
    backgroundColor: 'backgroundColor',
    received: 'received',
}

describe('Certificate', () => {
    it('renders', () => {
        const { container, getByText } = render(
            <Certificate certificate={certificateData} />,
        )

        expect(container).toMatchSnapshot()

        expect(getByText('AWS', { selector: 'title' })).toBeTruthy()
        expect(getByText('Vue JS', { selector: 'title' })).toBeTruthy()
        expect(getByText('React', { selector: 'title' })).toBeTruthy()

        expect(container.querySelector('h2')).toBeTruthy()
        expect(getByText('title', { selector: 'h2' })).toBeTruthy()

        expect(container.querySelector('p')).toBeTruthy()
        expect(container.querySelector('b')).toBeTruthy()
        expect(getByText('Received:', { selector: 'b' })).toBeTruthy()
        expect(getByText('received', { selector: 'p' })).toBeTruthy()
    })
})