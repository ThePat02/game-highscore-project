// Saving system (unfinished and dead)

function saveToCSV()
{
  var data = "test";
  $.post('savedata.php', {data=data}, function(){});
  alert("test");
}
