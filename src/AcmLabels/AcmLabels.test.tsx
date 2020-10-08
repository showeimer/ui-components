import React from 'react'
import { render } from '@testing-library/react'
import { AcmLabels } from './AcmLabels'

describe('AcmForm', () => {
    test('renders', () => {
        const { getByText } = render(<AcmLabels labels={['foo=bar', 'cluster=management']} />)
        expect(getByText('foo=bar')).toBeInTheDocument()
        expect(getByText('cluster=management')).toBeInstanceOf(HTMLSpanElement)
    })
})
