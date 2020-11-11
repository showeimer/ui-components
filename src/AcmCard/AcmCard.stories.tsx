import '@patternfly/react-core/dist/styles/base.css'
import React from 'react'
import { Meta } from '@storybook/react'
import { AcmCountCard } from './AcmCard'

const meta: Meta = {
    title: 'CountCard',
    component: AcmCountCard,
}
export default meta

export const CountCard = () => {
    return (
        <AcmCountCard
            cardHeader={{
                title: 'Workloads',
                description: 'A pre-defined search to help you manage your workloads',
                actions: [{ text: 'Save search' }],
                onActionClick: (e) => console.log(e.target.value),
            }}
            count={4000}
            countTitle="Results"
            onClick={() => console.log('Clicked')}
        />
    )
}
