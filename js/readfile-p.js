// const fs = require('fs');

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if(err) {
//         //如果err有值，表示有錯誤發生
//         //這裡應該要處理錯誤
//         console.error('發生錯誤了', err);
//     } else {
//         //進來這裡，表示err是空的(可能是null)
//         console.log('成功讀到資料:', data);
//     }
// });

const fs = require('fs');
let p = new Promise((resolve, reject) => {
    fs.readFile('test.txt', 'utf-8', (err, data) =>{
      if (err) {
        // 如果 err 有值，表示有錯誤發生
        // 這裡應該要處理錯誤
        reject(err);
        // console.error('發生錯誤了', err);
      } else {
        // 進來這裡，表示 err 是空的 (可能是 null)
        resolve(data);
        // console.log('成功讀到資料:', data);
      }
    })
});

  p.then((data) => {
    console.log('成功讀到資料:', data);
  }).catch((err) => {
    console.error('發生錯誤了', err);
  });
