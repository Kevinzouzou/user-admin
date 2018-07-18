/**
 * date转time格式
 * @returns {String}YYYY-MM-dd HH:mm:ss
 */
const dataToDataTime = () => {
  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

//转换成两位的日期格式
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

/**
 * 获取今天前后几天的time
 * @param interval 0代表今天
 * @returns {string} time
 */
const recentlyDayToTime = interval => {
  let dd = new Date();
  dd.setDate(dd.getDate() + interval);   //获取interval天后的日期
  let year = dd.getFullYear();
  let month = dd.getMonth() + 1;  //获取当前月份的日期
  let day = dd.getDate();
  return [year, month, day].map(formatNumber).join('-');
};

/**
 * 获取今天前后几天的星期
 * @param interval 0=今天的星期,1=明天
 * @returns {string} week
 */
const recentlyDayToWeek = interval => {
  let array = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  let dd = new Date();
  dd.setDate(dd.getDate() + interval);   //获取interval天后的日期
  let index = dd.getDay();
  return array[index];
};


/**
 * 获取指定date的time
 * @param date
 * @returns  YYYY-MM-dd
 */
const dataToDataStr = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
};

/**
 * 日期格式转星期
 * @param time 时间格式字符串
 * @returns {string}
 */
const dateToWeek = time => {
  let array = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  let index = new Date(time).getDay();
  return array[index];
};

/**
 * 获取当前的年月日
 * @returns {string}
 *
 */
const getToday = () => {
  let today = new Date;
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  return year + '年' + month + '月' + day + '日';
};

/**
 * 获取当前的月份
 * @returns {string}
 */
const getTodayMonth = () => {
  let date = new Date;
  let month = date.getMonth() + 1;
  month = (month < 10 ? '0' + month : month);
  let mydate = month.toString();
  return mydate;
};


// 显示正在加载中
let showLoading = text => wx.showLoading({
  title: text,
});

// 显示成功提示
let showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
});

// 显示成功提示
let toast = text => wx.showToast({
  title: text,
  icon: 'none'
});


// 显示失败提示
let showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  });
};

const regEmail = str => { //验证邮箱
  let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$');
  return reg.test(str.toLowerCase());
};

const isCanNext = obj => {
  let enterPrise = obj;
  for (let Key in enterPrise) {
    if (enterPrise[Key] === null || enterPrise[Key] === '') {
      return false;
    }
  }
  return true;

};

const getTypeInfo = (infoList, type)=> {
  if (infoList === 0) return;
  return infoList.filter((item) => {
    return item.type === type;
  });
};

const getAppTypeInfo = (infoList, type)=> {
  if (infoList === 0) return;
  return infoList.filter((item) => {
    return item.stage === type;
  });
};

module.exports = {
  dataToDataTime,
  recentlyDayToTime,
  recentlyDayToWeek,
  dataToDataStr,
  dateToWeek,
  showLoading,
  showSuccess,
  showModel,
  getTodayMonth,
  getToday,
  toast,
  regEmail,
  isCanNext,
  getTypeInfo,
  getAppTypeInfo
};
