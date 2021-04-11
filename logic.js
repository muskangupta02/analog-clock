setInterval(() => {
    let d = new Date();
    console.log(d);
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);
//  for clock rotation 


//  12hr->360 deg
// 1hr->30 deg
// 60min->30 deg
// m min->m/2 deg
// for h hr = 30h + m/2 

// 60min->360 deg
// 1min->6 deg
// m min-> 6m

//  60sec->360 deg
// 1sec->6 deg
// s sec-> 6s