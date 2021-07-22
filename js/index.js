let clock = document.getElementById("clock");
setInterval(updateTime,1000);
function updateTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let twelveHourClock= "";
    if (hour>12){
        hour =hour-12;
        twelveHourClock="PM"

    }
    else if(hour===0){
        hour=12;
        twelveHourClock="AM";
    }
    else {
        twelveHourClock="AM";
    }
    if (hour<10){
        hour="0" + hour  
    }
    else {
        hour= hour 
    }
    if (minute<10){
        minute="0" + minute ;
    }
    else {
       minute =minute;
    }
    if (second<10){
        second="0" + second ;
    }
    else {
       second=second;
    }
    updatedTime= hour+":"+minute+":"+second + ":" + twelveHourClock;
    clock.innerText=updatedTime;
}
updateTime();