// Script for visuals and cosmetic purposes

function changeTheme(theme)
{
  // Changes the theme of the scoreboard according to settings.js
  if (theme != null)
  {
    var altTheme = document.createElement('link');
    altTheme.rel = "stylesheet";
    altTheme.href = "style/alternative/" + theme;
    $("head").append(altTheme);
  }
}
