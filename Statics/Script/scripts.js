
// iPhone?
window.scrollTo(0, 1);

var agent = navigator.userAgent.toLowerCase();
var iphoneCheck = (agent.indexOf('gecko') != -1);
var searchresults = null;
var updownPressed = -1;

if (iphoneCheck)
  var browser = 'iphone'

function browsercheck() {
  return browser;
}


function search(evt) {
  searchresults = new Array();
  searchKey = document.getElementById("searchNames").value.toLowerCase();
  var key = evt.keyCode;
  var names = document.getElementById("uberList").getElementsByTagName("p");

  for (i = 0; i < names.length; i++) {
    if (key != 40 && key != 38) {
      names[i].parentNode.parentNode.parentNode.className = "persoon";
      updownPressed = -1;
    }
    var name = names[i].innerHTML.toLowerCase();
    if (name.indexOf(searchKey) == -1)
      names[i].parentNode.parentNode.parentNode.className = "persoon-unselected";
    if (name.indexOf(searchKey) != -1)
      searchresults.push(names[i]);
  }

  if (searchresults.length == 0)
    Spif.ClassNameAbstraction.add(document.getElementById('searchNames'), "noresultsInput");
  else
    Spif.ClassNameAbstraction.remove(document.getElementById('searchNames'), "noresultsInput");
}


function handleKey(evt) {
  searchKey = document.getElementById("searchNames").value;
  var key = evt.keyCode; // 38 up   40 down

  if (key == 38 || key == 40 && searchKey.length > 0 && updownPressed < searchresults.length - 1) {
    for (i = 0; i < searchresults.length; i++)
      searchresults[i].parentNode.parentNode.parentNode.className = "persoon";
    if (key == 40 && updownPressed < searchresults.length)
      updownPressed += 1;
    if (key == 38 && updownPressed > 0)
      updownPressed -= 1;
    if (updownPressed >= 0 && updownPressed < searchresults.length) {
      document.getElementById("personen").scrollTop = searchresults[updownPressed].offsetTop - 200;
      searchresults[updownPressed].parentNode.parentNode.parentNode.className = "persoon-selected";
    }
  } else {
    document.getElementById('searchNames').focus();
  }
}

