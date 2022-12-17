
const axios = require('axios');
const fs = require('fs/promises');

// let p = new Promise((resolve, reject) => {
//     fs.readFile('stock.txt', 'utf-8', (err, data) => {
//       if (err) {
//         console.error('發生錯誤了', err);
//         reject(err);
//       } else {
//         console.log('成功讀到資料:', data);
//         resolve(data);
//       }
//     });
//   });

// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211
(async () => {
  try {
    // let stockNo = await p;
    let stockNo = await fs.readFile('stock.txt', 'utf-8') ;
    console.log(stockNo);
    let date = '20221211';
    let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
        params: {
          stockNo,
          date,
        },
      });
  


      
      console.log('await', response.data.data);
    } catch (e) {
      console.error(e);
    }finally{
      if(connection){
      connection.end();
    }
    }
  })();

