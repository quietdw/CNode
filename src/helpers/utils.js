function friendlyDate(timedata) {
  let time = typeof timedata === 'object' ? timedata : new Date(timedata)
  let now = new Date()
  let str = ''

  let delta = (now.getTime() - time.getTime()) / 1000 // xx秒

  if (delta <= 30) {
    str = '刚刚'
  } else if (delta <= 60 && delta > 30) {
    str = Math.ceil(delta) + '秒前'
  } else if (delta <= (60 * 60) && delta > 60) {
    str = Math.ceil(delta / 60) + '分钟前'
  } else if (delta <= (60 * 60 * 24) && delta > (60 * 60)) {
    str = Math.ceil(delta / (60 * 60)) + '小时前'
  } else if (delta <= (60 * 60 * 24 * 30) && delta > (60 * 60 * 24)) {
    str = Math.ceil(delta / (60 * 60 * 24)) + '天前'
  } else if (delta <= (60 * 60 * 24 * 30 * 12) && delta > (60 * 60 * 24 * 30)) {
    str = Math.ceil(delta / (60 * 60 * 24 * 30)) + '月前'
  } else if (delta > (60 * 60 * 24 * 30 * 12)) {
    str = Math.ceil(delta / (60 * 60 * 24 * 30 * 12)) + '年前'
  }
  return str
}

function friendlyTag(tag) {
  let str = ''
  if (tag === 'share') {
    str = '分享'
  } else if (tag === "ask") {
    str = '问答'
  } else if (tag === "job") {
    str = '招聘'
  } else if (tag === "good") {
    str = '精华'
  }

  return str
}

export default {
  install(Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate
    Vue.prototype.friendlyTag = friendlyTag

  }
}
