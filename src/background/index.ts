/* eslint-disable no-console */
console.info('chrome-ext template-react-ts background script')

// chrome.action.onClicked.addListener(() => {
//   // 查询当前窗口的所有标签页
//   chrome.tabs.query({ currentWindow: true }, (tabs) => {
//     // 遍历所有标签页
//     for (let i = 0; i < tabs.length; i++) {
//       // 检查是否已经打开了目标网站
//       if (tabs[i].url && (tabs[i].url as unknown as any).includes('popup.html')) {
//         // 如果已经存在打开的标签页，则将其激活
//         chrome.tabs.update(tabs[i].id as unknown as any, { selected: true })
//         return
//       }
//     }
//     // 如果不存在打开的标签页，则创建新标签页
//     chrome.tabs.create({ url: 'popup.html' })
//   })
// })

console.log('Service worker started.')

export { }
