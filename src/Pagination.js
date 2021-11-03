import React from 'react'

const Pagination = () => {
    return (
        <section className="pagination">
            <button className="pagination__prev">Prev</button>
                <div className="pagination__page-info">
                    <span>1</span>
                    <span> of </span>
                    <span>50</span>
                </div>
            <button className="pagination__next">Next</button>
        </section>
    )
}

export default Pagination
