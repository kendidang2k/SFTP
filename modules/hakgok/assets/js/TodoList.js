const testImg = '/modules/hakgok/assets/img/bg-button.png'

function TodoList() {

    const { testData } = useContext(StoreContext)

    console.log("testData",  conf_vars)

    return (
        <div>TodoList
            <img src={testImg} alt='img' />
            <Button />
        </div>
    )
}
