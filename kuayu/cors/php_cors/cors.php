<?php 
    // 1. 单个域名可以访问
    // header('Access-Control-Allow-Origin:http://client.runoob.com')
    // 2. 多个或任意域名允许跨域
    header('Access-Control-Allow-Origin:*');
    echo '{"name": "klxin", "age": 18}';
 ?>