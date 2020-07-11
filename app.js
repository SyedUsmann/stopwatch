var min=0;
var sec=0;
var msec=0;
var interval;
var btn_status="start";

var min_heading=document.getElementById("min");
var sec_heading=document.getElementById("sec");
var msec_heading=document.getElementById("msec");

function timer()
{
    msec++;
    msec_heading.innerHTML=msec;
    if(msec>=100)
    {
        sec++;
        if(sec<= 9)
        {
            sec_heading.innerHTML="0"+sec;
        }
        else
        {
        sec_heading.innerHTML=sec;
        }
        msec=0;
    }

    else if(sec >=60)
    {
        min++;
        if(min<= 9)
        {
            min_heading.innerHTML="0"+min;
        }
        else
        {
            min_heading.innerHTML=min;
        }
        
        sec=0;
    }
}
function start()
{
    if (btn_status==="start") {
        interval=setInterval(timer,10);
        document.getElementById("start").innerHTML="Pause";
        btn_status="pause";
        
    }
    else
    {
        clearInterval(interval);
        btn_change();
    }

}
function btn_change()
{
    document.getElementById("start").innerHTML="Start";
        btn_status="start";
}


function reset()
{
    min="00";
    sec="00";
    msec="00";
    msec_heading.innerHTML=msec;
    sec_heading.innerHTML=sec;
    min_heading.innerHTML=min;
    clearInterval(interval);
    btn_change();
    
}