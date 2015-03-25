var CookieUtils = {
  getCookie: function(c_name) {
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return "";
  },

  setCookie: function(c_name, value, expirationdays) {
    var cookieString = c_name + "=" + escape(value) + "; path=/;";
    if (expirationdays) {
      var date = new Date();
      date.setTime(date.getTime() + (expirationdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + date.toGMTString();
      cookieString += expires;
    }
    document.cookie = cookieString;
  },

  cookieEnabled: function() {
    this.setCookie('testcookie', 'inhoud');
    testcookie = this.getCookie('testcookie');

    if (testcookie != null && testcookie != "") {
      return true;
    }
    else {
      return false;
    }
  }
}


