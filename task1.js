
var strcode={
	decode:function (number){
           var no=number;
           var letters='acdegilmnoprstuw';
           var l='';
           var numo,deno;
           while(no!=0){
             numo=Math.round(no/37);
	         deno=no%37;
	         no=numo;
	         l+=letters[deno];
	  
         }
           return l ;
         },
   encode:  function(s) {
        var h = 7;
        var letter = "acdegilmnoprstuw";
       for(var i = 0; i < s.length; i++) {
        h = (h * 37 + letter.indexOf(s[i]))
       }
        return h;
       },
  reversehash:function(s){
	var str = '';
	for(i=s.length-2;i>=0;i--){
		str+=s[i];
	   }
	   
    return str;
	  }
}

var string = strcode.decode(930846109532517);
console.log(string);
var rev=strcode.reversehash(string);
console.log(rev);
console.log(strcode.encode(rev));

