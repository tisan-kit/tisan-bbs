module.exports={
  msg:'这是线上配置',
  listen_port : 8000,
  redis:{
    host:'112.74.203.39',
    port:9000
  },
  mysql : {
    connectionLimit : 10,
    host : '112.74.203.39',
    user : 'root',
    password : 'pando',
    database : 'questions',
    port: '10000',
  }
}
