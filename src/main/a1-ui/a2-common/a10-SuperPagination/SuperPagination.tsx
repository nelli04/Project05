import React, {ChangeEvent} from 'react'
import SuperSelect from '../a4-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    isLoading: boolean
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15', isLoading
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (event: any, page: number) => {
        if (event) {
            onChange(page, itemsCountForPage)
        }
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event) {
            onChange(page, parseInt(event.currentTarget.value))
        }
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                }}
                disabled={isLoading}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                 Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                disabled={isLoading}
                onChange={onChangeSelect}
            />
            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination