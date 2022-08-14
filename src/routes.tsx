import { 
    BrowserRouter,
    Routes as Switch,
    Route
} from 'react-router-dom'
import { NewRoom, Room } from './Pages';

function Routes() {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<NewRoom/>}/>
                <Route path="/room/:code" element={<Room/>}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;