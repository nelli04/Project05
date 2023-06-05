import React from 'react';
import SuperButton from "./a1-ui/common/SuperButton/SuperButton";
import SuperCheckbox from "./a1-ui/common/SuperCheckbox/SuperCheckbox";
import SuperInput from "./a1-ui/common/SuperInput/SuperInput";
import SuperEditableSpan from "./a1-ui/common/SuperEditableSpan/SuperEditableSpan";
import SuperRadio from "./a1-ui/common/SuperRadio/SuperRadio";
import SuperSelect from "./a1-ui/common/SuperSelect/SuperSelect";
import SuperSort from "./a1-ui/common/SuperSort/SuperSort";
import SuperDebouncedInput from "./a1-ui/common/SuperDebouncedInput/SuperDebouncedInput";
import SuperPagination from "./a1-ui/common/SuperPagination/SuperPagination";
import SuperRange from "./a1-ui/common/SuperRange/SuperRange";
import {Pages} from "./pages/Pages";

export const Main = () => {
    return (
        <>
            <SuperCheckbox/>
            <SuperInput/>
            <SuperButton>Hello</SuperButton>
            <SuperEditableSpan/>
            <SuperRadio/>
            <SuperSelect/>
            <SuperSort/>
            <SuperDebouncedInput/>
            <SuperPagination isLoading={true} page={1} itemsCountForPage={2} totalCount={3} onChange={()=>{}}/>
            <SuperRange/>
            <Pages/>
        </>
    );
};

