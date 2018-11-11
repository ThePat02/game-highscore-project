// Master script

function loadScripts(arg)
{
  // Loads all other .js files into the page.

  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = "settings.js";
  $("head").append(a);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "scripts/visuals.js";
  $("head").append(s);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "scripts/savingsystem.js";
  $("head").append(s);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://www.gstatic.com/firebasejs/5.5.8/firebase-app.js";
  $("head").append(s)

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://www.gstatic.com/firebasejs/5.5.8/firebase.js";
  $("head").append(s);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://www.gstatic.com/firebasejs/5.5.8/firebase-database.js";
  $("head").append(s);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "scripts/data-firebase.js";
  $("head").append(s);



  if (arg == true) startUp();
}

function startUp()
{
  // Ints important functions
  changeTheme(theme);
}
