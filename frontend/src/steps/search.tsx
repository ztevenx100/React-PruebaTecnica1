import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useDebounce } from '@uidotdev/usehooks'
import { type Data } from '../types'
import { searchData } from '../services/search'

const DEBOUNCE_TIME = 300

export const Search = ({ initailData } : { initailData: Data }) => {
    const [data, setData] = useState<Data>(initailData)
    const [search, setSearch] = useState<string>(() => {
        const searchParams = new URLSearchParams(window.location.search)
        return searchParams.get('q') ?? ''
    })
    const deboncedSearch = useDebounce(search, DEBOUNCE_TIME)

    
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        const newPathname = deboncedSearch === '' ? window.location.pathname : `?q=${deboncedSearch}`

        //window.history.pushState({}, '', newPathname)
        window.history.replaceState({}, '', newPathname)
    }, [deboncedSearch])

    useEffect(() => {
        if (!deboncedSearch){
            setData(initailData)
            return
        }
        // LLamar API 
        searchData(deboncedSearch)
            .then((resonse) => {
                const [err, newData] = resonse

                if (err) {
                    toast.error(err.message)
                    return
                }

                if (newData) setData(newData)
            })
    }, [deboncedSearch, initailData])

    return (
        <>
            <h1>Search</h1>
            <form action="">
                <input type="search" name="" id="" placeholder='Buscar información ...' onChange={handleSearch} defaultValue={search} />

            </form>
            <ul>
                {data.map((row) => (

                    <li key={row.Id}>
                        <article>
                            {Object.entries(row).map(([key, value]) => 
                                <p key={key}><strong>{key}:</strong>{value}</p> 
                            )}
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}