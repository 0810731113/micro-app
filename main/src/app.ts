import { enableES5 } from 'immer';
// import { addLocale } from '@@/plugin-locale/localeExports';
// import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';
// import {addLocale} from 'umi';
enableES5();

import axios from 'axios';


// addLocale(
//   'zh_CN',
//   {
//     // id 列表
//     zhangsan: '妳好，我是张三',
//   },
//   {
//     momentLocale: 'zh_cn',
//     antd: zhCN,
//   })
//
// addLocale(
//   'en_US',
//   {
//     // id 列表
//     zhangsan: 'Hi, 我是张三',
//   },
//   {
//     momentLocale: 'en_us',
//     antd: enUS,
//   },
// );

// export const  render = async (oldRender) => {
//   try{
//
//     function fetchLocal(locale){
//       return axios.post('/api/omp-service/getI18nValues', {
//         appId: 'trialos',
//         // i18nKeys: KEY,
//         // locale: 'zh_CN'
//         locale,
//       })
//     }
//     const [localZhCN,localenUS] = await Promise.all([fetchLocal('zh_CN'),fetchLocal('en_US')]);
//
//     // console.log(`-----------localZhCN--------`);
//     // console.log(localZhCN);
//     // console.log(`-----------localenUS--------`);
//     // console.log(localenUS);
//     addLocale(
//       'zh_CN',
//       {
//         // id 列表
//         ...(localZhCN?.data?.data || {})
//       },
//       {
//         momentLocale: 'zh_cn',
//         antd: zhCN,
//       })
//     addLocale(
//       'en_US',
//       {
//         // id 列表
//         ...(localenUS?.data?.data || {})
//       },
//       {
//         momentLocale: 'en_us',
//         antd: enUS,
//       },
//     );
//   }catch(e){
//     console.log(e);
//   }
//   oldRender()
// }

// export const ssr = {
//   modifyGetInitialPropsCtx: async (ctx) => {
//     ctx.title = '微前端实践';
//     // ctx.store = getApp()._store;
//     // ctx.store = useStore();
//
//     return ctx;
//   },
// };