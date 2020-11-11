import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardHeaderMain,
    CardBody,
    CardFooter,
    CardActions,
    CardTitle,
    Dropdown,
    KebabToggle,
    DropdownItem,
} from '@patternfly/react-core'

type CardHeaderActions = {
    text: string
}

type CardHeaderProps = {
    title: string
    description: string
    actions?: CardHeaderActions[]
    onActionClick: (e) => void
}

type CardFooterProps = {
    countDescription?: string
    countLink?: string | React.ReactNode
}

type AcmCountCardProps = {
    cardHeader?: CardHeaderProps
    cardFooter?: CardFooterProps
    count: number
    countTitle: string
    onClick?: () => void
}

export function AcmCountCard(props: AcmCountCardProps) {
    return (
        <Card onClick={props.onClick} isSelectable={!!props.onClick} isFlat={!props.onClick}>
            {props.cardHeader && (
                <CardHeader>
                    <CardHeaderMain>
                        <CardTitle>{props.cardHeader.title}</CardTitle>
                        <p>{props.cardHeader.description}</p>
                    </CardHeaderMain>
                    {props.cardHeader?.actions && props.cardHeader?.actions?.length > 0 && (
                        <CardActions>
                            <CardDropdown
                                dropdownItems={props.cardHeader.actions}
                                onSelect={props.cardHeader.onActionClick}
                            />
                        </CardActions>
                    )}
                </CardHeader>
            )}
            <CardBody>
                <div>{props.count}</div>
                <div>{props.countTitle}</div>
            </CardBody>
            {props.cardFooter && (
                <CardFooter>
                    {props.cardFooter.countDescription && <div />}
                    {props.cardFooter.countLink}
                </CardFooter>
            )}
        </Card>
    )
}

type CardDropdownProps = {
    dropdownItems: { text: string }[]
    toggle?: React.ReactNode
    onSelect: (event: React.SyntheticEvent | undefined) => void
}

export function CardDropdown(props: CardDropdownProps) {
    const [isOpen, setOpen] = useState<boolean>(false)
    const onSelect = (event: React.SyntheticEvent | undefined) => {
        setOpen(!isOpen)
        props.onSelect(event)
    }
    return (
        <Dropdown
            toggle={<KebabToggle onToggle={() => setOpen(!isOpen)} />}
            isOpen={isOpen}
            onSelect={(event) => onSelect(event)}
            isPlain
            dropdownItems={props.dropdownItems.map((item) => (
                <DropdownItem key={item.text} {...item}>
                    {item.text}
                </DropdownItem>
            ))}
            position={'right'}
        />
    )
}
