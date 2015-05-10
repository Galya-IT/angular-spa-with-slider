"use strict";

var NextEventWidget = (function () {

    var displayTime = function () {
        var timeToStartUnixStampMilliseconds = 172800000;
        var INTERVAL_MILLISECONDS = 1000;

        var timeArray = moment.utc(timeToStartUnixStampMilliseconds).format("DD:HH:mm:ss").split(':');

        var $days = $("#days");
        var $hours = $("#hours");
        var $minutes = $("#minutes");
        var $seconds = $("#seconds");

        $days.html(timeArray[0]);
        $hours.html(timeArray[1]);
        $minutes.html(timeArray[2]);
        $seconds.html(timeArray[3]);

        var intervalId = setInterval(function () {
            timeToStartUnixStampMilliseconds -= INTERVAL_MILLISECONDS;

            if (timeToStartUnixStampMilliseconds <= 0) {
                clearInterval(intervalId);
                displayPlayer();
            }

            timeArray = moment.utc(timeToStartUnixStampMilliseconds).format("DD:HH:mm:ss").split(':');

            $days.html(timeArray[0]);
            $hours.html(timeArray[1]);
            $minutes.html(timeArray[2]);
            $seconds.html(timeArray[3]);
        }, INTERVAL_MILLISECONDS);

        $('#countdown-timer-loading').css('display', 'none');
        $('#countdown-timer').css('display', 'block');
    };

    return {
        'displayTime': displayTime
    };

}());