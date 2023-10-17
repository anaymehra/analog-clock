setInterval(() => {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    hourRotation = (30*hour) + (minute/2); // Degrees covered in hour,min,sec each.
    minuteRotation = 6*minute;
    secondRotation = 6*second;
    
    document.getElementById("hour").style.transform = `rotate(${hourRotation}deg)`; // Style transform Property
    document.getElementById("minute").style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondRotation}deg)`;
},1000);