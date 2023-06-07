import React, {useState} from 'react';
import SuperButton from "./a1-ui/a2-common/a1-SuperButton/SuperButton";
import SuperCheckbox from "./a1-ui/a2-common/a2-SuperCheckbox/SuperCheckbox";
import SuperInput from "./a1-ui/a2-common/a3-SuperInput/SuperInput";
import SuperEditableSpan from "./a1-ui/a2-common/a8-SuperEditableSpan/SuperEditableSpan";
import SuperRadio from "./a1-ui/a2-common/a6-SuperRadio/SuperRadio";
import SuperSelect from "./a1-ui/a2-common/a4-SuperSelect/SuperSelect";
import SuperSort from "./a1-ui/a2-common/a5-SuperSort/SuperSort";
import SuperDebouncedInput from "./a1-ui/a2-common/a9-SuperDebouncedInput/SuperDebouncedInput";
import SuperPagination from "./a1-ui/a2-common/a10-SuperPagination/SuperPagination";
import SuperRange from "./a1-ui/a2-common/a7-SuperRange/SuperRange";
import style from './Main.module.css'

export const Main = () => {

    const arr = [
        {id: 1, value: 'Pre-junior'},
        {id: 2, value: 'Junior'},
        {id: 3, value: 'Junior +'},
    ]
    const [value, onChangeOption] = useState(arr[0].id)

    return (
        <div className={style.mainClass}>
            <SuperCheckbox/>
            <SuperInput/>
            <SuperButton>Hello</SuperButton>
            <SuperEditableSpan spanProps={{id: 'hw6-editable-span', defaultText: 'enter text...'}}/>
            <SuperSelect options={arr} value={value}/>
            <SuperRadio options={arr} value={value}/>
            <SuperDebouncedInput/>
            <SuperPagination isLoading={false} page={2} itemsCountForPage={2} totalCount={7} onChange={() => {}}/>
            <SuperSort value={'developer'} onChange={() => {}} sort={''}/>
            <SuperRange/>
        </div>
    );
};

