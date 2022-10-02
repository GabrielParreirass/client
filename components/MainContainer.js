import Header from "./Header"

function MainContainer({ children }) {
    return (
        <div>
            <Header/>
            <div>{children}</div>
        </div>
    )
}

export default MainContainer