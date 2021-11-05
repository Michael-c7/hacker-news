import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
    const {
        currentPage,
        setCurrentPage,
        totalAmountOfPages,
    } = useGlobalContext()

    const changeCurrentPage = direction => {
        if(direction === "previous") {
            if(currentPage <= 1) {
                setCurrentPage(totalAmountOfPages)
            } else {
                setCurrentPage(currentPage - 1)
            }

        } 


        if(direction === "next") {
            if(currentPage >= totalAmountOfPages) {
                setCurrentPage(0)
            } else {
                setCurrentPage(currentPage + 1)
            }
        }
    }

    return (
        <section className="pagination">
            <button className="pagination__prev" onClick={() => changeCurrentPage("previous")}>Prev</button>
                <div className="pagination__page-info">
                    <span>{currentPage}</span>
                    <span> of </span>
                    <span>{totalAmountOfPages}</span>
                </div>
            <button className="pagination__next"  onClick={() => changeCurrentPage("next")}>Next</button>
        </section>
    )
}

export default Pagination
