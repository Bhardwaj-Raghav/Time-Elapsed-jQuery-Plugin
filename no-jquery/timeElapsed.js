const timeElapsed = function(options) {
    var defaults = {
        currentTime: new Date(),
        date: new Date(),
        full: false,
        prefix: '',
        postfix: 'ago',
        seconds: false
    };
    var settings = $.extend( {}, defaults, options );
        var timeObject = getTimeDifference(settings.currentTime, settings.date);
        var time = '';
        if(timeObject.year > 0) {
            if (settings.full) {
                time += `${timeObject.year}`;
                time += timeObject.year === 1 ? " Year " : " Years ";
            } else {
                return settings.prefix + timeObject.year + (timeObject.year === 1 ? " Year " : " Years ") + settings.postfix;
            }
        }
        if(timeObject.month > 0) {
            if (settings.full) {
                time += `${timeObject.month}`;
                time += timeObject.month === 1 ? " Month " : " Months ";
            } else {
                return settings.prefix + timeObject.month + (timeObject.month === 1 ? " Month " : " Months ") + settings.postfix;
            }
        }
        if(timeObject.day > 0) {
            if (settings.full) {
                time += `${timeObject.day}`;
                time += timeObject.day === 1 ? " Day " : " Days ";
            } else {
                return settings.prefix + timeObject.day + (timeObject.day === 1 ? " Day " : " Days ") + settings.postfix;
            }
        }
        if(timeObject.hour > 0) {
            if (settings.full) {
                time += `${timeObject.hour}`;
                time += timeObject.hour === 1 ? " Hour " : " Hours ";
            } else {
                return settings.prefix + timeObject.hour + (timeObject.hour === 1 ? " Hour " : " Hours ") + settings.postfix;
            }
        }
        if(timeObject.minute > 0) {
            if (settings.full) {
                time += `${timeObject.minute}`;
                time += timeObject.minute === 1 ? " Minute " : " Minutes ";
            } else {
                return settings.prefix + timeObject.minute + (timeObject.minute === 1 ? " Minute " : " Minutes ") + settings.postfix;
            }
        }
        if(timeObject.second > 0) {
            if (settings.full) {
                time += `${timeObject.second}`;
                time += timeObject.second === 1 ? " Second " : " Seconds ";
            } else {
                if (timeObject.seconds) {
                    return settings.prefix + timeObject.second + (timeObject.second === 1 ? " Second " : " Seconds ") + settings.postfix;
                }
                return "Just now";
            }
        }
        return settings.prefix + time + settings.postfix;
};
function getTimeDifference(currentTime, oldTime) {
    const mTimeDifference  = Math.abs(currentTime - oldTime); // Time in Milliseconds
    const sTimeDifference    = mTimeDifference / 1000 // Time in Seconds
    const yearDifference   = Math.floor(sTimeDifference / 31536000); // 31536000 - Average Seconds in one Year
    const monthDifference  = Math.floor((sTimeDifference % 31536000) / 2592000); // 2592000 - Average Seconds in one Month (30 Days)
    const dayDifference    = Math.floor((sTimeDifference % 2592000) / 86400); // 86400 - Seconds in one Day
    const hourDifference   = Math.floor((sTimeDifference % 86400) / 3600); // 3600 - Seconds in one Hour
    const minuteDifference = Math.floor((sTimeDifference % 3600) / 60); // 60 - Seconds in one Minute
    const secondDifference = Math.floor(sTimeDifference % 60);
    return {
        year   : yearDifference,
        month  : monthDifference,
        day    : dayDifference,
        hour   : hourDifference,
        minute : minuteDifference,
        second : secondDifference
    };
}
