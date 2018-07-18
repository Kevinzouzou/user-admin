// 3个

import api from '../../../../ppSwallow/ppSwallow';

export default {
  /**
   * {
    * “userId ”:”申请人id”,
    * “officeType”:”办公类型（包括请假，出差，外出）”,
    * “typeDetail”:”申请详情”,
    * “state”:”状态（未完结和已完结）”,
    * “beginTime ”:”开始时间”,
    * “endTime ”:”结束时间”,
    * “addInfo”:”根据不同申请的初始addInfo内容”
    * }
   * params
   * 添加移动办公申请mobileOffice/addMobileOffice
   */
  addApproval: function(params) {
    return api.post('mobileOffice/addMobileOffice', params);
  },
  /**
   “id”:”办公申请id”,
   “state”:”处理之后的状态”,
   “addInfo”:”根据不同的申请处理之后addInfo的内容”
    	移动办公审批
   */
  dealApproval: function(params) {
    return api.post('mobileOffice/dealMobileOffice', params);
  },

  /**
   * params
   "userId":”申请人id”,
   "officeType":”申请类型”,
   "state":”处理状态”,
   "handlerId":”处理人id”,
   "recipientId":”抄送人id”,
   * 	移动办公列表
   */
  approvalList: function(params) {
    return api.post('mobileOffice/mobileOfficeList', params);
  },

  /**
   * params
   * 上传图片
   */
  uploaImg: function (params) {
    return api.uploadFile('https://shbeta.vpclub.cn/api10004/images/imgUpload', params);
  },
};
