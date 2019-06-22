/*
*  api list
* */

//动态设置 title
function SetTitle(title) {
  document.title = typeof title == "undefined" ? "404" : title;
  let mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    // 替换成站标favicon路径或者任意存在的较小的图片即可
    // iframe.setAttribute('src', '/favicon.ico')
    let iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    };
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}

// 设置cookie
function setCookie(saveName, value) {
  let days = 30;
  let d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = saveName + "=" + value + "; " + expires;
}
// 获取cookie
function getCookie(getName) {
  let name = getName + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) != -1) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

export {
  SetTitle,
  getCookie,
  setCookie,
  delCookie
}
