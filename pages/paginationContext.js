import React, {useState} from "react"

export const PageContext= React.createContext()

export default function PaginationProvider(props){
    const [page, setPage] = useState([])
    function pageInfo(data){
        console.log(data)
        setPage(data)
    }
    return(
        <PageContext.Provider
            value={{
                ...page,
                pageInfo
            }}>
            {props.children}
        </PageContext.Provider>
    )
}
