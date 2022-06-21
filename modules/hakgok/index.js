// const i18next = require("./lib/i18next");

const { render, useState, createContext, useEffect } = wp.element;
const {
    Box
} = MaterialUI;

const HomePage = () => {

    useEffect(() => {
        fetch("https://test-hakgok.hahalolo.com/wp-json/wp/v2/posts/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("🚀 ~ file: index.js ~ line 25 ~ useEffect ~ result", result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("🚀 ~ file: index.js ~ line 31 ~ useEffect ~ error", error)
                }
            )
    }, [])



    // const changeLanguageButton = document.getElementById('change_language');
    // changeLanguageButton.addEventListener('click', changeLanguage('vi'))

    return (
        <LanguageProvider>
            <StoreProvider>
                {/* <TodoList/> */}
                <Banner />
                <PostList />
            </StoreProvider>
        </LanguageProvider>
    )
}
render(<HomePage />, document.getElementById(`shortcode-2-307`));

// render(<HomePage />, document.getElementById(`test`));
