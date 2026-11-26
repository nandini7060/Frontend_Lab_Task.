import './App.css'
import Props from './Props';
function Header() {
    return (
        <div>
            <h1>Header Component</h1>
        </div>
    )
}

function PersonDetails() {
    let name = "Nandini";
    let age = 19;
    let address = "Agra";
    let food = "Idli Sambar";

    return (
        <>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Address: {address}</p>
            <p>Food : {food}</p>
        </>
    )
}

function HelloWorld() {
    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}

function Footer() {
    return (
        <>
            <h1>Footer Component</h1>
        </>
    )
}

function App() {
    return (
        <>
            <Header />
            <hr />
            <PersonDetails />
            <hr />
            <HelloWorld />
            <hr />
            <Footer />
            <Props name="Nandini" age={19} />
        </>
    )
}

export default App;
