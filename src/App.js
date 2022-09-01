import { DatePicker } from 'antd';
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Allotment>
        <Allotment.Pane minSize={500}>
          <div>ComponentA</div>
        </Allotment.Pane>
        <Allotment.Pane minSize={500}>
          <div>ComponentB</div>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}

export default App;
