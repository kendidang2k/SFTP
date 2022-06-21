const { render, useState, createContext } = wp.element;

const Test = () => {
    return (
        <StoreProvider>
            <TodoList/>
        </StoreProvider>
    )
}
// render(<Test />, document.getElementById(`test`));
