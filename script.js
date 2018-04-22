var d,h,m,s,animate,countdownMins,tradeCount,totalTimeSecs;

function init(){
    d=new Date();
    h=d.getHours()-1;
    m=d.getMinutes();
    s=d.getSeconds();
    totalTimeSecs=(h*60*60+m*60+s);

    clock();
};

function clock(){
    s++;
    totalTimeSecs++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
            if(h==24){
                h=0;
            }
        }
    }
    tradeCount=Math.floor(totalTimeSecs/(45*60));
    difference=totalTimeSecs/(45*60)-tradeCount;
    if (difference<=0.2222) {
        shipStatus = 'Waiting in Solzreed'
    } else if (difference <= 0.5) {
        shipStatus = 'Solzreed --> Ynystere'
    } else if (difference <= 0.7222) {
        shipStatus = 'Waiting in Ynystere'
    } else {
        shipStatus = 'Ynystere --> Solzreed'
    }


    $('sec',s);
    $('min',m);
    $('hr',h);
    $('packCount', tradeCount);
    $('timeSecs', totalTimeSecs);
    $('shipStatus',shipStatus)

    animate=setTimeout(clock,1000);

};

function $(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

window.onload=init;