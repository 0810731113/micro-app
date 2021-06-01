import React, {lazy, Suspense, useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {Button, Divider} from 'antd';

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

    const sendMsgToParent = () => {
        if (window.BroadcastChannel) {
            const channel = new BroadcastChannel("cookieChannel");
            const masg = {from:'react16',to:'parent',message:'我是子应用发来的消息'}
            channel.postMessage(JSON.stringify(masg));
        }
    }

  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react16' : '/'}>
        <div>我是父节点发送来的消息: {message}</div>
      <nav>
        <Link to="/">Home</Link>

        <Divider type="vertical" />
        <Link to="/about">About</Link>
      </nav>
        <div>
            <Button onClick={sendMsgToParent}>发送消息</Button>
        </div>
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
