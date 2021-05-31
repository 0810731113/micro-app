import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
  useImperativeHandle,
} from 'react';
import axios from 'axios';
import { Button } from 'antd';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import SentryRRWeb from '@sentry/rrweb';
import { history } from 'umi';
import './index.less';

Sentry.init({
  dsn:
    'https://981843871d71497385a832b825f4c5b0@o749530.ingest.sentry.io/5791400',
  integrations: [
    new Integrations.BrowserTracing(),
    new SentryRRWeb({
      // ...options
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  release: '0.0.1',
  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id ,lang: 'zn'});
    }
    return event;
  },
});

Sentry.setUser({ email: "431397516@qq.com" ,username:'Libo'});

export default function IndexPage(props) {
  const [city, setCity] = useState([]);
  const { children } = props;
  const changeEmitEvent = () => {};

  return (
    <div className={`layout-container`}>
      {/*<h1>我是layout</h1>*/}
      {children}
    </div>
  );
}
