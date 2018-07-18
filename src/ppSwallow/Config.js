import util from './util.js';

function Config() {
}

// Config.prototype.baseUrl = "https://shbeta.vpclub.cn/api10004/";  //阿里正式服务器
Config.prototype.baseUrl = "https://yqdndev.vpclub.cn/api2035/" ;   //微品云的域名 开发测试
// Config.prototype.baseUrl = "http://192.168.13.1:2039/" ;   // person


Config.prototype.defaultHeader = {
  'content-type': 'application/json'// 默认值
};

Config.prototype.defaultRequest = {
  method: 'GET',
  url: null,
  data: null,
  header: {}
};

/**
 * 请求的参数配置
 * @returns {request}
 */
Config.prototype.getRequest = function() {
  let header = this.defaultHeader;
  let request = this.defaultRequest;
  header['token'] = wx.getStorageSync('token');
  request.header = header;
  return request;
};

/**
 * 响应的参数配置
 * @param res  原始的响应数据
 * @param resolve 处理成功的promise function
 * @param reject  处理失败的promise function
 * @returns response
 */
Config.prototype.response = function response(res, resolve, reject) {

  if (res.statusCode === 200) {

    if (res.data.operationResult === 'success') {
      resolve(res.data.responseList);
    }else{
      // util.toast(res.data.failureMsg);
      return reject(res.data);
    }
    // let data = {status:res.data.status,message:res.data.message};
    return reject(res.data.failureMsg);
  } else {
    return reject(res.statusCode);
    // util.toast(res.data.failureMsg);
    return reject(res.data.failureMsg);
  }

};

module.exports = Config;
