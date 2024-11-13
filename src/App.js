import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'
function App() {
    // Zadanie 1
    //Nazwa funkcji: z1Add
    //parametr wejściowy: brak
    //wartość zwracana: brak
    //informacje dodatkowe: funkcja zwiększa wartość nr o 1
    let [nr, setNr] = useState(0);
    function z1Add(){
        setNr(nr + 1);
    }
    //Nazwa funkcji: z1Sub
    //parametr wejściowy: brak
    //wartość zwracana: brak
    //informacje dodatkowe: funkcja zmniejsza wartość nr o 1
    function z1Sub(){
        if(nr!=0)setNr(nr - 1);
    }
    ///////////////////////////////////////////
    //Zadanie 2
    let [mode, setMode] = useState(1);
    //Nazwa funkcji: z2
    //parametr wejściowy: brak
    //wartość zwracana: brak
    //informacje dodatkowe: funkcja zmienia kolor tła i kolor tekstu w zależności od wartości mode
    function z2(){
        setMode(mode * -1);
        if(mode > 0 ){
            document.getElementsByClassName("App")[0].style.backgroundColor = "white";
            document.getElementsByClassName("App")[0].style.color = "black";
            console.log(mode);
        }
        else {
            document.getElementsByClassName("App")[0].style.backgroundColor = "black";
            document.getElementsByClassName("App")[0].style.color = "white";
            console.log(mode);
        }
    }
    /////////////////////////////////////////////
    //Zadani 3
    // const endpoint = 'https://jsonplaceholder.typicode.com/users'
    //
    // const useFetch = url => {
    //     const [state, setState] = useState([null, false])
    //
    //     useEffect(() => {
    //         setState([null, true]);
    //
    //         (async () => {
    //             const data = await fetch(url)
    //                 .then(res => res.json())
    //
    //             setState([data.body, false])
    //         })()
    //     }, [url])
    //
    //     return state
    // };
    //     const [users, loading] = useFetch(endpoint)
    //
    //     if (loading) {
    //         return <h1>Loading...</h1>
    //     }

    //     if (!users?.length) {
    //         return <h1>There are no users to be displayed 🤕</h1>
    //
    // }


    return (
        <div className="App">
            <button onClick={z1Add}>Zwiększ o 1</button>
            <button onClick={z1Sub}>Zmniejsz o 1</button>
            <p>{nr}</p>
            <br/>
            <button onClick={z2}>Przełącz</button>
            <br/><br/>

            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>ID</th>*/}
            {/*        <th>Name (Username)</th>*/}
            {/*        <th>Email</th>*/}
            {/*        <th>Phone</th>*/}
            {/*        <th>Website</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {users.map(user => (*/}
            {/*        <tr key={user.id}>*/}
            {/*            <td>{user.id}</td>*/}
            {/*            <td>{user.name} ({user.username})</td>*/}
            {/*            <td>*/}
            {/*                <a href={`mailto:${user.email}`}>*/}
            {/*                    {user.email}*/}
            {/*                </a>*/}
            {/*            </td>*/}
            {/*            <td>{user.phone}</td>*/}
            {/*            <td>*/}
            {/*                <a href={`https://${user.website}`} target="_blank">*/}
            {/*                    {user.website}*/}
            {/*                </a>*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*    </tbody>*/}
            {/*</table>*/}
        </div>
    );
}

export default App;
