# Documentation
Eine Dokumentation für `game-hihgscore-project` erstellt von Patrick Parz.

## Javascript

### Funktionen

#### loadScripts(arg)
Location: `master.js:3`<br>
Beschreibung: Fügt alle anderen Scripts mithilfe von `document.createElement` in den `head` ein. Mitgegeben soll `true` oder `false` werden. Wenn `true` mitgegeben wird, startet die Funktion `startUp()`.<br>
Verwendung: Solle am Ende jeder `.html`-Page in `<script>` stehen.

#### startUp()
Location: `master.js:25`<br>
Beschreibung: Startet alle Funktionen, welche beim Laden einer Seite aufgerufen werden sollen.<br>
