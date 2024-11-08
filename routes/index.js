const express = require('express');
const router = express.Router();

router.get('/index/list', function(req, res, next) {
  res.send({
    status: 200,
    data: {
      list: [{
        id: "ID",
        name: "名字",
        content: "内容"
      }],
      total: 1,
      page: 1
    },
    msg: "成功"
  });
});

module.exports = router;
