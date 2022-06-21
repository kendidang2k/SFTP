const { useState, useContext, createContext } = wp.element;

const NewsContext = createContext();

function NewsProvider({ children }) {

    const [endPoint, setEndPoint] = useState('business');
    const [newsList, setNewsList] = useState([]);
    const [newsUserList, setNewsUserList] = useState([]);

    useEffect(() => {
        const getNewsList = () => {
            fetch(`https://newsdata.io/api/1/news?apikey=pub_8269443bd894de2ee5bc7af9917cf0c32441&q=${endPoint}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log("🚀 ~ file: NewsProvider.js ~ line 16 ~ getNewsList ~ result", result)
                        setNewsList(result.results)
                    },
                    (error) => {
                        console.log("🚀 ~ file: index.js ~ line 31 ~ useEffect ~ error", error)
                    }
                )
        }

        const getUserNewsList = () => {
            fetch(`https://newsdata.io/api/1/news?apikey=pub_8269443bd894de2ee5bc7af9917cf0c32441&q=user`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log("🚀 ~ file: NewsProvider.js ~ line 16 ~ getNewsList ~ result", result)
                        setNewsUserList(result.results)
                    },
                    (error) => {
                        console.log("🚀 ~ file: index.js ~ line 31 ~ useEffect ~ error", error)
                    }
                )
        }

        getNewsList()
        getUserNewsList();
    }, [endPoint])

    return (
        <NewsContext.Provider value={{
            setEndPoint,
            newsList, setNewsList,
            newsUserList, setNewsUserList
        }}>
            {children}
        </NewsContext.Provider>
    )
}
