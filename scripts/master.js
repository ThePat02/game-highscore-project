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

  var b = document.createElement("script");
  b.type = "text/javascript";
  b.src = "https://cdn.firebase.com/js/client/2.4.2/firebase.js";
  $("head").append(b)

  var ee = document.createElement("script");
  ee.type = "text/javascript";
  ee.src = "scripts/data-firebase.js";
  $("head").append(ee);




  if (arg == true) startUp();
}

function startUp()
{
  // Ints important functions
  changeTheme(theme);
}
