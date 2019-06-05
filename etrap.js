function etrap(q,arr,t,dups){
  //if (QuestionErrors()) return;
  /*q = question id
  arr = array of codes that have other specify
  t = type("S" for single or "M" for multiple or "O" for opentextlist or "P" for open)
  dups = if value = 1, check the duplicate responses, if not declared on the parameter, this will not check the duplicate response.
*/    
  //MULTI, RANKQUESTION, GRID, NUMERICLIST = "M", 
  //dvlp_echo("dups = "+dups);
  var dupsArr = [];
  for(var i=0;i<arr.length;i++){
    var dp = t == "P" ? q : q+'_'+arr[i];
    var txt =  t == "O" || t == "P"? "" : "_other";
    
    var dp1 = dp+txt;
    var type = t=="S"? f(q).valueLabel() : t=="P" ? "" : f(dp).label();    
    /*JE || Added try{}catch()
- catch will occur if the question type is opentext list and inputted only 1.
- In isRankQuestion function, will check if txt field has 1, then it will treat as 
rank question and the type will be "M" which is for rank type of question.
- So for this instance, the catch will call the function itself(etrap) changing the type to "O" as opentextlist.
*/
    
    try{    
      if(f(dp1).toBoolean() && !IsInRdgMode()){
        dupsArr[dupsArr.length] = srvTrim(f(dp1).get().toLowerCase());
        checkInvalidInput(f(dp1).get(),type);
        srvEtrap(dp1,type);
      }
    }catch(e){		
      etrap(q,arr,"O");
    }
  }
  
  //added JE 12.28.2015 2:21 PM MST
  if(dupsArr.length > 1 && dups == 1){
    if(isNotArrayUnique(dupsArr)){      	
      t == "O" ? ErrorMessage(126) : ErrorMessage(145);
      	return;
    }
  }
}
