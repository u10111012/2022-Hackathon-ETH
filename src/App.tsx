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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
