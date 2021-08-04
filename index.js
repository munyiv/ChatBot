// Collapsible 
var collapse=document.getElementsByClassName("colapsible")
for (let i= 0; i<collapse.length; i++){
    collapse[i].addEventListener("click",function(){
        this.classList.toggle("active");

        var content=this.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }else{
            content.style.maxHeight=content.scrollHeight+ "px"
        }

    });
}
function getTime(){
    let leo= new Date();
    hours=leo.getHours();
    minutes=leo.getMinutes();

    if(hours< 10){
        hours="0" + hours

    }
    if(minutes< 10){
        minutes="0" + minutes
    }
    let time=hours + ":" + minutes;
    return time;
}

function firstBotMessage(){
    let firstMessage="Hey"
    document.getElementById("botStarterMessage").innerHTML='<p class="botText"><span>' +firstMessage
    +'</span></p>'
    let time=getTime();
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}
firstBotMessage();

function getHardResponse(userText){
    let botResponse=getBotResponse(userText);
    let botHtml= '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse(){
    let userText= $("#textInput").val();
    if(userText==" "){
        userText==" I love shopping Online"
    }
    let userHtml= '<p class="userText"><span>' + userText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml)
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(()=>{
        getHardResponse(userText);
    },1000)

}
getResponse();
function sendText(sampeText){
    let userHtml ='<p class="userText"><span>' + sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml)
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}
// sendText("Hello");


function sendButton(){
    getResponse();
}
sendButton();
function heartButton(){
    buttonSendText("Heart Clicked")

}
// heartButton();
$("#textInput").keypress(function(e){
    if(e.which==13){
        getResponse();

    }

})
