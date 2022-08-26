var text1 = "من الضروري إتقان الطباعة من أجل السرعة خصوصاً في إنجاز المعاملات الورقية";
var text2 = "بسم الله الرحمن الرحيم والصلاة والسلام على سيدنا محمد أشرف الخلق وآخر المرسلين";
//var text3 = "هلو و";
var text4="الرسول محمد صلى الله عليه وسلم هو محمد بن عبد الله بن عبد المطلب بن هاشم بن عبد مناف ولد في عام الفيل اليوم الثاني عشر من ربيع الأول لعام ثلاثة وخمسون قبل الهجرة بعث الرسول إلى الناس ليخرجهم من الظلمات إلى النور";
 var text5="الأب هو أعظم رجل وهو السند والصاحب في الحياة الدنيا وهو أمان العائلة وفسحة الأمل فيها وقد أوصانا الله سبحانه وتعالى بآبائنا وجعل برهم واجب والإحسان إليهم تقرب من الله سبحانه وتعالى وجعل رضاه مقرونا برضاهم";
var text6="شكراً للأصدقاء الذين يلمسون نبرة التوجع في أصواتنا وصمتنا فلا يناقشوننا وإنّما يفتشون عن أمور تُسعدنا وتبعث البهجة في نُفوسنا";
var arr=[text2,text1,text4,text5,text6];
var i =0;
var l=0;
var num=4;
var no=0;
var myVar=0;
 var error = 0;
var word =0;

var space=" ";
function firsthighlight(){
    if(l==0) {
    
    var x = document.getElementById("santencess");
        
  
    var textArray=x.innerHTML.split(" ");
x.innerHTML="";
      
     var span = document.createElement("span");
        
        span.style.backgroundColor="yellow";
        span.innerHTML=textArray[0]+space;
        x.appendChild(span);
          
      
     for ( var r = 1; r < textArray.length; r++) {
     span =document.createElement("span");
     span.innerHTML=textArray[r]+space;
     x.appendChild(span);  
         
     }
    l=1;  

}
}
 function changeText()
{
 error=0;
    word=0;
    l=0;
	var x= document.getElementById("santencess");
    
    x.innerHTML=arr[i];
    i=i+1;
    num=4;
    if (i==arr.length){
        i=0;
        
            
        }
    if(no==1){
            no=0;
            myStopFunction();
       
       
    }
    var input=document.getElementById("text");
    input.value="";
   ani2();    
}
function check(x)
{
  
    var str = x.value;
     var space1 =" ";
        var textArray=x.innerHTML.split(" ");
    var spanArray=document.getElementsByTagName("span");
    var r= document.getElementById("santencess");
   var index = i-1;
    var key = event.keyCode;
    if(i==0){
        index=arr.length-1;
    }
    if(no==0){
        
        var oneMinute = 60 ,
        display = document.querySelector('#time');
    startTimer(oneMinute, display,index);
        no=1;
}
    if(str.charAt(str.length-1)!=arr[index].charAt(str.length-1)){
       alert(" يرجى التأكد من إملاء الكلمة الأخيرة يبدو أنك اقترفت خطأ بسيط في إملائها ") ;
         
         error=error+1;
           spanArray[num].style.backgroundColor="red" ; 
      
    }
    else{
        spanArray[num].style.backgroundColor="yellow" ;
    }
    
    
    
    if(key ==32 && num < spanArray.length ){
		
        
		
      str=str.substring(0,str.length) ; 
		
       str= str.substring(str.lastIndexOf(" "),str.length);
		if(str.charAt(0)==space1){
			str=str.substring(1,str.length) ;
		}
        if(spanArray[num].innerHTML.substring(0,spanArray[num].innerHTML.length-1)!=str){
		//alert(" يرجى التأكد من إملاء الكلمة الأخيرة يبدو أنك اقترفت خطأ بسيط في إملائها ") ;
        word=word+1;
           
         //  spanArray[num].style.backgroundColor="red" ;
             
        }
        if(spanArray[num].innerHTML.substring(0,spanArray[num].innerHTML.length-1)==str){
		spanArray[num].style.backgroundColor="chartreuse" ;
            if(num<spanArray.length-1){
			spanArray[num+1].style.backgroundColor="yellow" ;}
          num=num+1;   
        }
              
     

    }
    if(num == spanArray.length){
       result(index);
        
     }
        
}
 

function startTimer(duration, display,index) {
    var timer = duration, minutes, seconds;
   myVar= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
       if (timer == 0) {
            result(index);
            document.getElementById("slide").style.top="1050px";

        }
    }, 1000);
    
}

function myStopFunction() {
    var setCounter=document.getElementById("time");
    setCounter.innerHTML="01:00";
    
  clearInterval(myVar);
    
}

 window.onload = function () {
 changeText();
    
     
};
 function ani(){
      
     document.getElementById("text").disabled = true;
     
    document.getElementById('slide').className ='classname';
      document.getElementById('ok').className ='classname';
     
  }
function ani2(){
    document.getElementById("text").disabled = false;
    document.getElementById('slide').className ='classname3';
      document.getElementById('ok').className ='classname3';
  }
function result(index){
     var duration = document.getElementById("time").innerHTML;
        duration=duration.split(":")[1];
        if(duration==00){
            duration=0;
        }
        else{
         duration=60-duration;   
        }
        
       error = (((arr[index].length)-error)/(arr[index].length))*100;
        var durationResult = document.getElementById("resultTime");
        durationResult.innerHTML=duration;
        
         var Acc = document.getElementById("Acc");
        Acc.innerHTML=error;
     var errorWord = document.getElementById("errorWord");
        errorWord.innerHTML=word;
    var numWord = document.getElementById("numWord");
        numWord.innerHTML=arr[index].split(" ").length;
    var printWord = document.getElementById("printWord");
        printWord.innerHTML=document.getElementById("text").value.trim.split(" ").length;
        if(no==1){
            no=0;
            myStopFunction();
        
       
    }
        ani();
}

















