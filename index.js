const qrcode = require('qrcode')

for (let i = 0; i < 6; i++) {
  qrcode.toString(`${i}`, function (err, id) {
    if (err) {
      throw err;
    }

    console.log(id);
  });
}