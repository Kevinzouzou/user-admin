// 12个

import api from '../ppSwallow/ppSwallow';
export default {
  /**
   * params
   * 获取验证码
   */
  sendCode: function(params) {
    return api.post('userInfo/sendLoginCode', params);
  },
  /**
   * cellPhoneNumber  手机号
   * password    密码
   */
  login: function(params) {
    return api.post('userInfo/pwdLogin', params);
  },

  /**
   * params
   * parkId : parkId
   * 获取服务列表 园区通知 高端服务
   */
  getSerInfo: function(params) {
    return api.post('display/listDisplayContent', params);
  },
  /**
   * params
   * token : token
   * 获取通讯录
   */
  getContact: function(params) {
    return api.post('park/listPropertyUser', params);
  },


  /**
   * params
   * token : token
   * type :  物业报修
   * 获取自己提交的物业信息
   */
  getOwnApply: function(params) {
    return api.post('property/listPropertyServiceByUserId', params);
  },
  /**
   * params
   * token : 必填
   * 添加物业服务
   */
  addSerInfo: function(params) {
    return api.post('propertyApplication/addPropertyApplication', params);
  },

  /**
   * params
   * token : token
   * id :
   * addInfo : { }
   * 管理员提交物业申请  对自己的申请进行评价
   */
  updateApply: function(params) {
    return api.post('property/updatePropertyServiceAddInfo', params);
  },
  /**
   * params
   * token : token
   * departmentId :
   * 通过部门id 获取部门信息
   */
  getDepartMentInfo: function(params) {
    return api.post('parkInfoTree/queryDepartmentById', params);
  },

  /**
   * params
   * token : token
   * id :
   * settlement : 处理意见
   * addInfo : { }
   * 员工处理物业申请
   */
  dealApply: function(params) {
    return api.post('property/updatePropertyService', params);
  },

  /**
   * params
   * token : token
   * parkId   :
   * type   : { }
   * 添加物业服务
   */
  addApply: function(params) {
    return api.post('property/addPropertyService', params);
  },
  /**
   * params
   *“id”:”物业申请id”,
   *“stage”:”处理之后的状态”,
   *“settlement”:”处理意见”,
   *“addInfo”:”根据不同的申请处理之后addInfo的内容”
   * 物业申请处理 放行申请
   */
  dealProperty: function(params) {
    return api.post('propertyApplication/dealPropertyApplication', params);
  },
  /**
   * params
   *"userId":”申请人id”,
   *"enterpriseId":”申请人公司id”;
   *"type":”申请类型”,
   *"stage":”处理状态”,
   *"next":1,//流程节点
   *"handlerId":”处理人id”
   * 物业申请查询  放行申请
   */
  queryProperty: function(params) {
    return api.post('propertyApplication/propertyApplicationList', params);
  },
  /**
   * params
   “userId ”:”申请人id”,
   “addInfo”:”附加信息”
   * 添加打卡记录
  */
  addTimeCheck: function(params) {
    return api.post('mobileClock/addMobileClock', params);
  },
  /**
   * params
   “userId ”:”申请人id”,
   “date”:”打卡日期，缺省该参数查询全部”
   * 查询打卡记录
   */
  queryTimeCheck: function(params) {
    return api.post('mobileClock/mobileClockList', params);
  },

  /**
   * params
   * 上传图片
   */
  uploaImg: function (params) {
    return api.uploadFile('https://shbeta.vpclub.cn/api10004/images/imgUpload', params);
  },

};
