import './App.css';
import { Tab, Home, Layout, Apod, Earth } from './components';
import { Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';

function App() {
   return (
   <div className="App">
    <h3>UI PROJECT</h3>
    
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />}/>
      <Route path="/apod" element={<Apod />}/>
      <Route path="/earth" element={<Earth />}/>
      </Route>
  </Routes>
  <Outlet />
</div>
  );
}

export default App;
/*

import Tabs, { TabPane } from 'rc-tabs';

  function callback(e) {
    console.log(e);
  }
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane tab="tab 1" key="1">
          TEST 1
        </TabPane>
      </Tabs>
      <Tab />
var callback = function(key) {};

React.render(
  <Tabs defaultActiveKey="2" onChange={callback}>
    <TabPane tab="tab 1" key="1">
      first
    </TabPane>
    <TabPane tab="tab 2" key="2">
      second
    </TabPane>
    <TabPane tab="tab 3" key="3">
      third
    </TabPane>
  </Tabs>,
  document.getElementById('t2'),
);


              <div className={toggleState === ? "content": "active-content"} onClick={() => toggleTab(1)}>Tab 1</div>
*/

