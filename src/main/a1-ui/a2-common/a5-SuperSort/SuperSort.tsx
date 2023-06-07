import React from 'react'
import polygon5 from './polygon_5.svg'
import polygon6 from './polygon_6.svg'

const downIcon = polygon6
const upIcon = polygon6
const noneIcon = polygon5

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') {
        return down;
    } else if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span id={id + '-sort-' + value} onClick={onChangeCallback}>
            <img id={id + '-icon-' + sort} src={icon}/>
        </span>
    )
}

export default SuperSort