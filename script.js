<HTML><H1>Javascript      search</H1>
    <SCRIPT      LANGUAGE="javascript">
    var      english=["water","house","book","university","car","computer"];
    var      spanish=["aqua","casa","libro","universidad","caro","computador"];
    var      result = 0;
    var      searchword = prompt("Enter english word to translate: ");
    for(i=0;i<english.length;i++){
    if(english[i]==searchword){
    document.writeln("Spanish word:      "+spanish[i]);
    result = 1; }//IF
    }// FOR
    if(result==0)
    document.writeln("Sorry, NO MATCH      for: " + searchword);
    </SCRIPT>      </HTML>
console.log
alert("JavaScript is working!")
