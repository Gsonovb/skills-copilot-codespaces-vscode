// 创建Web服务器
const express = require('express');
const app = express();
// 引入模块
const comments = require('./comments');
// 配置
app.set('view engine', 'ejs');
// 静态资源
app.use('/public', express.static('public'));
// 评论列表
app.get('/', (req, res) => {
    res.render('index', {
        comments
    });
});
// 评论提交
app.get('/comment', (req, res) => {
    // 获取提交的数据
    const { name, content } = req.query;
    // 添加到数组
    comments.unshift({
        name,
        content,
        time: new Date()
    });
    // 重定向
    res.redirect('/');
});
// 端口监听
app.listen(3000, () => {
    console.log('Server is running...');
});

