// Master script

function loadScripts(arg)
{
  // Loads all other .js files into the page

  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = "settings.js";
  $("head").append(a);

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "scripts/visuals.js";
  $("head").append(s);

  if (arg == true) startUp();
}

function startUp()
{
  // Ints important functions
  changeTheme(theme);
}
