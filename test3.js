/*f('l').set(Request('l')); // capture language from link (if any)
if (!f('l').toBoolean()) {
  f('l').set(CurrentLang());   // default Confirmit language
}
f('language').set(f('l'));*/

/* Code below is from PSAT Wave 3 under set language script in language set folder */

//var SSI_lang_array = new Array(1187, 433, 432, 431, 9, 0, 356, 1266, 1275, 1265, 497, 500, 9999, 501, 1, 498, 530, 3, 535, 536, 537, 2, 565, 564, 1263, 5, 650, 14, 717, 808, 8, 12, 6, 996, 13, 4, 1096, 1088, 7, 1151);
//var confirmit_lang_array = new Array(31, 3076, 2052, 1028, 6, 19, 2067, 57, 2110, 4100, 3081, 4105, 6153, 5129, 2057, 1033, 11, 12, 2060, 3084, 4108, 7, 3079, 2055, 3082, 16, 2064, 17, 18, 1086, 20, 21, 22, 1046, 25, 10, 11274, 2058, 29, 30);
// updated for wave 4 - mmabanag 10/20/2016
//var SSI_lang_array = new Array(9, 2, 4, 530, 3, 5, 14, 717, 0, 8, 12, 6, 13, 7, 1151, 1187, 639, 1266, 431, 498, 996, 808, 432, 564, 1, 1088, 535, 650, 356, 1275, 433, 565, 497, 1263, 536, 1265, 500, 537, 501, 1273, 502, 1094, 1096); // from SSI(DK) code
//var confirmit_lang_array = new Array(6, 7, 10, 11, 12, 16, 17, 18, 19, 20, 21, 22, 25, 29, 30, 31, 33, 34825, 1028, 1033, 1046, 1086, 2052, 2055, 2057, 2058, 2060, 2064, 2067, 37897, 3076, 3079, 3081, 3082, 3084, 35849, 4105, 4108, 5129, 38921, 6153, 9226, 11274); // from confirmit code
// updated for wave 2 - rdeguzman 03/25/2019
var SSI_lang_array = new Array(9, 2, 4, 530, 3, 5, 14, 717, 0, 8, 12, 6, 13, 7, 1151, 1187, 639, 1266, 431, 498, 996, 808, 432, 564, 1, 1088, 535, 650, 356, 1275, 433, 565, 497, 1263, 536, 1265, 500, 537, 501, 1273, 502, 1094, 1096); // from SSI(DK) code
var confirmit_lang_array = new Array(6, 7, 10, 11, 12, 16, 17, 18, 19, 20, 21, 22, 25, 29, 30, 31, 33, 34825, 1028, 1033, 1046, 1086, 2052, 2055, 2057, 2058, 2060, 2064, 2067, 37897, 3076, 3079, 3081, 3082, 3084, 35849, 4105, 4108, 5129, 38921, 6153, 9226, 11274); // from confirmit code  

var link = GetRespondentUrl();

var i : int;
var lang = Request('l');
f('qurltest').set(GetRespondentUrl() + " language  "+ lang);
var panel = Request('SUBPAN');
var firstname = Request('fn');
var lastname = Request('sn');
var email = Request('em');
var memid = Request('PID');
var mempsid = Request('PSID');
var b = Request('b'); //boost
var mode = Request('MODE');
var gender = Request('gen');
var age = Request('age');

if(b==null){
	b=0;
}
dvlp_echo("l : "+f('l').get());
if(!f('l').toBoolean() && lang!=null){
  dvlp_echo("1 - l : "+f('l').get());
  f('hiddumurl').set('https://online.ssisurveys.com/wix/' + CurrentPID() + '.aspx?' + Request.QueryString);
  for(i=0;i<SSI_lang_array.length;i++){
    if(SSI_lang_array[i]==lang){
      f('qsubpanelid').set(panel); 
      f('l').set(confirmit_lang_array[i]);
      //if(mode != null){
      if(parseInt(mode,10) == 3){
        //Redirect(link+'&MODE='+mode+'&l='+confirmit_lang_array[i]+'&SUBPAN='+panel+'&fn='+firstname+'&sn='+lastname+'&em='+email+'&pid='+memid+'&psid='+mempsid+'&b='+b,true);
        Redirect(link+'&MODE=3&l='+confirmit_lang_array[i]+'&SUBPAN='+panel+'&fn='+firstname+'&sn='+lastname+'&em='+email+'&pid='+memid+'&psid='+mempsid+'&b='+b+'&gen='+gender+'&age='+age,true);
      }else{
        Redirect(link+'&l='+confirmit_lang_array[i]+'&SUBPAN='+panel+'&fn='+firstname+'&sn='+lastname+'&em='+email+'&pid='+memid+'&psid='+mempsid+'&b='+b+'&gen='+gender+'&age='+age,true);
      }
      
    }
  }  
};