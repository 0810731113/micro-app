import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useImperativeHandle,
} from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { history } from 'umi';
import './index.less';
import classnames from 'classnames';

export default function IndexPage(props) {
  const { children } = props;
  const [city, setCity] = useState([]);
  const changeEmitEvent = () => {};
  const [publicPath, setPublicPath] = useState('/');
  const [message,setMessage] = useState('');
  useEffect(() => {
    history.listen((location, action) => {
      console.log(location);
      console.log(action);
      setPublicPath(location.pathname);
    });
    return () => {};
  }, []);
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

    return () => {};
  }, []);
  const goLogin = () => {
    history.push(`/login`);
  };

  const goMicro = (path) => {
    history.push(path);
  };

  const sendMessage = () => {
    if (window.BroadcastChannel) {
      const channel = new BroadcastChannel("cookieChannel");
      const masg = {from:'parent',to:'/react16',message:'我是父节点发来的消息'}
      channel.postMessage(JSON.stringify(masg));
    }
  }

  return (
    <div className={`main-container`}>
      <Button onClick={sendMessage}>发送消息</Button>
      <div>我收到来自子应用的消息: {message}</div>
      <div className={'header-bar'}>
        <div className={`menu-list`}>
          <span className={'logo'} onClick={() => goMicro('/')}>
            有巢系统
          </span>
          <span
            className={classnames('menu-item', {
              active: /vue3/.test(publicPath),
            })}
            onClick={() => goMicro('/vue3/')}
          >
            vue项目
          </span>
          <span
            className={classnames('menu-item', {
              active: /react16/.test(publicPath),
            })}
            onClick={() => goMicro('/react16/')}
          >
            react项目
          </span>
          <span
            className={classnames('menu-item', {
              active: /angular9/.test(publicPath),
            })}
            onClick={() => goMicro('/angular9/')}
          >
            angular项目
          </span>
        </div>
        <Button onClick={goLogin}>去登录页</Button>
      </div>
      <div className={'child-container'}>{children}</div>
    </div>
  );
}
