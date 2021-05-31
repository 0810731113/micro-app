import React, {lazy, Suspense, useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Divider } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import LibVersion from './components/LibVersion';
import HelloModal from './components/HelloModal';

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
// import { useModel } from '@umijs/preset-react';

const RouteExample = () => {
    // const masterProps = useModel('@@qiankunStateFromMaster');
    const [message,setMessage] = useState('')
    useEffect(() => {
        if (window.BroadcastChannel) {
            const channel = new BroadcastChannel("cookieChannel");
            channel.onmessage = ({data}) => {
                console.log(`cookieChannel`);
                console.log(data);
                setMessage(JSON.stringify(data));
            };
            return () => {
                channel.close();
            };
        }
    },[]);

  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react16' : '/'}>
        <div>{message}</div>
      <nav>
        <Link to="/">Home</Link>

        <Divider type="vertical" />
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default function App() {
  return (
    <div className="app-main">
      <LibVersion />
      <HelloModal />

      <Divider />

      <RouteExample />
    </div>
  );
}
