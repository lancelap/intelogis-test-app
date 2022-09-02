import 'antd/dist/antd.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import Map from './components/Map';
import ListRequests from './components/ListRequests';
import './App.css';

function App() {
    return (
        <div className="App">
            <SplitterLayout>
                <ListRequests />
                <Map />
            </SplitterLayout>
        </div>
    );
}

export default App;
