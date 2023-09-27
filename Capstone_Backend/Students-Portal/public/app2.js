let totaltime = document.getElementById('hid2').innerHTML;
const count = document.getElementById('countdown1')

setInterval(update,1000);
function update(){
    hours = Math.floor(totaltime/3600);
    minutes = Math.floor(totaltime/60);
    minutes = (Math.floor)(minutes%60)
    seconds = Math.floor(totaltime%60);
    hours = hours<10?('0'+hours):hours;
    minutes = minutes<10?('0'+minutes):minutes;
    seconds = seconds<10?('0'+seconds):seconds;
    if(hours==0 && minutes==0 &&seconds==0)
    {
        alert('Exam is live')
        location.replace('/stuview')
    }
    count.innerHTML = `${hours}:${minutes}:${seconds}`;
    totaltime--
}
