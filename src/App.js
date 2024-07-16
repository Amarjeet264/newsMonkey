import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize = 5;
  const apiKey="e88099895b284643b5555f006a15587e"
  const [progress,setProgress] = useState(0);
  // setProgress(progress)
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey}   key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/Business" element={<News setProgress = {setProgress} apiKey={apiKey}   key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/General" element={<News setProgress = {setProgress} apiKey={apiKey}   key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/Health" element={<News setProgress = {setProgress} apiKey={apiKey}   key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/Technology" element={<News setProgress = {setProgress} apiKey={apiKey}   key="technology" pageSize={pageSize} country="in" category="technology" />} />
            <Route exact path="/Science" element={<News setProgress = {setProgress} apiKey={apiKey}   key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/Entertainment" element={<News setProgress = {setProgress} apiKey={apiKey}   key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/Sports" element={<News setProgress = {setProgress} apiKey={apiKey}   key="sports" pageSize={pageSize} country="in" category="sports" />} />
          </Routes>
        </Router>
      </div>
    );
  }
  export default App;
