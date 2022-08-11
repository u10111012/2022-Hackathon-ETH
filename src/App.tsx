import './App.css';
import Home from './pages/Home';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {

    console.log('first commit');
    console.log('second commit');
    console.log('third commit');


    console.log('test');
    console.log('test2');
    


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
