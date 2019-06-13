<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/cjmaxdiff/css/ConjointSSI_cf.css" /> 
  <!--[if lte IE 7]>
	<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/cjmaxdiff/css/ConjointSSI-IE7.css" />
<![endif]-->
 <link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/cjmaxdiff/demos/jquery.lightbox.css" />
  <!--[if IE 6]>
  <link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/cjmaxdiff/demos/jquery.lightbox.ie6.css" />
  <![endif]-->
^jQueryToolColor("conjoint")^
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/jquery.imgpreload.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/cjmaxdiff/demos/jquery.lightbox.min.js"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/_root/ssi_ALLInOne_Confirmit_2.2.js"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/cjmaxdiff/js/ConjointSSI_v7_min_cf.js"></script>
<script>
// =============== DOCUMENTATION ===============>https://confluence.surveysampling.com/x/M8R7AQ
$(document).ready(function(){
	var sQuestType="SR";// MR
	var oDataItems;
	var theFormName=getFormName(1);
	var iTotalDK=1;
	// please do not use confirmit exclusive item option
	if(sQuestType.toUpperCase()=="SR"){
		oDataItems = getSRItems(theFormName);
	}
	else{
		oDataItems = getMRItems(theFormName);
	}
	var OptionItems={
		CJOpt1AttrLabels:{Header:'Option ',Attr1:"bank_1$AMERICA TRUST BANK",Attr2:"Option 1 Attr2",Attr3:{Sub1:"gift_icon$", Sub2:"this is a very long long<br>text"},Attr4:"Option 1 Attr4"},
		CJOpt2AttrLabels:{Header:'Option ',Attr1:"bank_2$FEDERAL MONEY BANK",Attr2:"Option 2 Attr2",Attr3:{Sub1:"NA", Sub2:"price 2"},Attr4:"Option 2 Attr4"},
		CJOpt3AttrLabels:{Header:'Option ',Attr1:"bank_3$STOCK & SAVING BANK",Attr2:"Option 3 Attr2",Attr3:{Sub1:"NA", Sub2:"price 3"},Attr4:"Option 3 Attr4"},				
		CJOpt4AttrLabels:{Header:'Option ',Attr1:"bank_4$AMERICA UNITED BANK",Attr2:"Option 4 Attr2",Attr3:{Sub1:"NA", Sub2:"price 4"},Attr4:"Option 4 Attr4"},
		CJOpt5AttrLabels:{Header:'Option ',Attr1:"bank_5$GLOBAL BANK",Attr2:"Option 5 Attr2",Attr3:{Sub1:"gift_icon$", Sub2:"price 5"},Attr4:"Option 5 Attr4"},
		CJOpt6AttrLabels:{Header:'Option ',Attr1:"bank_6$BANK OF THE USA",Attr2:"Option 6 Attr2",Attr3:{Sub1:"NA", Sub2:"price 6"},Attr4:"Option 6 Attr4"}
    }
  $('#SSITool').SSIConjoint({
		sQtype:sQuestType,
		iNoneOfDKs:iTotalDK,
                sCJCheckMark:'//d2n88fe5uqdqty.cloudfront.net/rnd/tools/cjmaxdiff/images/CJ_checkmark_2016_white.png',
 	    oDataItemInfos:oDataItems,
	    sCounterText:"1/10",
		AttrDespLabels:{Header:'Attribute Description',Attr1:"Attribute 1",Attr2:"Attribute 2",Attr3:{Sub1:"Promotion", Sub2:"Price test"},Attr4:"Attribute 4"},
   		OptItemLabels:OptionItems,
		AttrImgSize:{Attr1:"150|130",Attr2:"",Attr3:{Sub1:"28|29", Sub2:""},Attr4:""},
		theSplitor:'$',
		thisForm:theFormName,		
		iTotalItems:oDataItems[0].length,
		iTotalAttrs:4,
		iAnmationOrder:1,
		isAttrDespShown:true,
		isImgTitleAdded:true,
		isZoomInAdded:true,
		isSubAttrUneven:true,
		isCustomHeightPerRow:false,
       	smallImgExtension:'.jpg',
		isHeaderShown:true
	});
});
countIt({             
	"tool-id":"jCJ001", 
	"project-id" : "^CurrentPID()^",
	"order-id" : "^getOrderID()^"
});
</script>