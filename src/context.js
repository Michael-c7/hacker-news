import React, {useState,useEffect,createContext, useContext } from "react";


const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("react");
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    
    let url = "https://hn.algolia.com/api/v1/search?query=";
    let page = `&page=${currentPage}`



    const getPosts = async _ => {
        setLoading(true)
        try {
            // update request to include page
            const res = await fetch(`${url}${searchQuery}${page}`)
            const data = await res.json()
            setPostData(data.hits)
            setCurrentPage(data.page)
            setTotalAmountOfPages(data.nbPages)
            setLoading(false)

        }catch(error) {
            setLoading(false)
            console.log(error)
        }
    }


    useEffect(() => {
        getPosts()
        // searchQuery, currentPage
    }, [])

    return (
        <UserContext.Provider value={{
            searchQuery,setSearchQuery,
            postData,setPostData,
            loading,setLoading,
            currentPage,setCurrentPage,
            totalAmountOfPages,setTotalAmountOfPages,
            }}>
        {children}
        </UserContext.Provider>
    )
}

export const useGlobalContext = _ => {
    return useContext(UserContext)
}

export  {UserProvider, UserContext}
