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
  useEffect(() => {
    history.listen((location, action) => {
      console.log(location);
      console.log(action);
      setPublicPath(location.pathname);
    });
    return () => {};
  }, []);
  const goLogin = () => {
    history.push(`/login`);
  };

  const goMicro = (path) => {
    history.push(path);
  };

  return (
    <div className={`main-container`}>
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
