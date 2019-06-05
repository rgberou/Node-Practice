if(!IsInProductionMode() && !IsInRdgMode()){
  f('mode').set('2');
}

//Prioritization for Q13 BRANDS exposure
function setQ13prio(){
  CleanQ('hidQ13x2');
  //var prio = set('7','8','9','10');
  var prio = set('9','17');
  var Q5 = f('q5');
  var Q3 = f('q3').diff(Q5);//exclude q5 selection
  var Q2 = f('q2').diff(Q5);//exclude q5 selection
  
  var temp1 = new Set();
  var temp2 = new Set();
  var fnlSet = new Set();
  
  dvlp_echo('**--------------**');
  dvlp_echo('q5:'+Q5);
  dvlp_echo('prio brand:'+prio);
  dvlp_echo('q3 exclude Q5:'+Q3);
  dvlp_echo('q2 exclude Q5:'+Q2);
  dvlp_echo('prio size Q3:'+Q3.isect(prio).size());
  dvlp_echo('prio size Q2:'+Q2.isect(prio).size());
  dvlp_echo('**--------------**');
  
  //check prio set start at Q3
  if(Q3.isect(prio).size()>1){
    leastquota("hidQ13x2","Q13x2Q",2, Q3.isect(prio));
    dvlp_echo("2 Priorities found in Q3");
  }
  //if q3 has only 1 prio brand check to Q2 if it has a prio brand
  else if(Q3.isect(prio).size()==1){
  	dvlp_echo("1 Priority found in Q3");
    temp1 = Q3.isect(prio);
    
    if(Q2.isect(prio.diff(temp1)).size()>0){    
      leastquota("hidQ13x2","Q13x2Q",1,Q2.isect(prio.diff(temp1)));    
      dvlp_echo("Priorities found in Q2");
      temp2 = f('hidQ13x2');
      
    }else{  
      dvlp_echo("Priorities not found in Q2");  
      if(Q3.diff(prio).size()>0){
      	dvlp_echo("test3");  
        leastquota("hidQ13x2","Q13x2Q",1,Q3.diff(prio));    
        temp2 = f('hidQ13x2');
        
      }else{
      	dvlp_echo("test4");  
        leastquota("hidQ13x2","Q13x2Q",1,Q2.diff(prio));    
        temp2 = f('hidQ13x2');
      }    
    }
     fnlSet =temp1.union(temp2);    
     f('hidQ13x2').set(fnlSet);  
  }
  //if NO prio brand selected in Q3
  if(Q3.isect(prio).size()==0){
  	dvlp_echo("No Prio brands selected in Q3");  
    
    // check if Q2 has prio brand
    if(Q2.isect(prio).size()>0){
      
      if(Q2.isect(prio).size()>1){
        leastquota("hidQ13x2","Q13x2Q",2,Q2.isect(prio));  
        fnlSet = f('hidQ13x2');
      }
      else if(Q2.isect(prio).size()==1){
         temp1 = Q2.isect(prio);
        
        if(Q3.diff(prio).size()>0){
          leastquota("hidQ13x2","Q13x2Q",1,Q3.diff(temp1));  
        }else{          
          leastquota("hidQ13x2","Q13x2Q",1,Q2.diff(temp1)); 
        }          
         temp2 = f('hidQ13x2');
        
         fnlSet = temp1.union(temp2);
      }     
    } 
    else{//if Q2 has NO prio brand
      dvlp_echo("No Prio brands selected in Q2");  
      if(Q3.size()>1){
      	dvlp_echo("test4"); 
        leastquota("hidQ13x2","Q13x2Q",2,Q3);
        fnlSet = f('hidQ13x2');
      }else{
      	dvlp_echo("test5"); 
        if(Q3.size()==1){
          temp1 = Q3;
          leastquota("hidQ13x2","Q13x2Q",1,Q2.diff(temp1));
          temp2 = f('hidQ13x2');
          fnlSet =temp1.union(temp2);   
        }else{
        
          var N = Q2.size()>1?2:1;
          leastquota("hidQ13x2","Q13x2Q",N,Q2); 
          fnlSet = f('hidQ13x2');        
        }            
      }   
    }
    f('hidQ13x2').set(fnlSet);    
  } 
   
  f('hidQ13').set(f('hidQ13x2').union(Q5));
  dvlp_echo('Qualified Brand for Q13:'+f('hidQ13'));
}
//Set Brands for QUOTA
function setBrands(){
  CleanQ('hidBrands');
  var brands = f('hidQ13');
  //var prio = set('7','8','9','10');
  var prio = set('9','17');
  
  if(brands.isect(prio).size()>0){
    f('hidBrands').set(brands);
  }else{
    f('hidBrands')[99].set(1);
  }
  dvlp_echo('Qualified Brand for Quota:'+f('hidBrands'));
}