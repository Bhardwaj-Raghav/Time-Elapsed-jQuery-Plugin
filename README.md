# Time Elapsed jQuery Plugin
 * This jQuery Plugin will Update Text to the Elapsed Time on selected Element
 * You need to Have data Attribute "time" on the Selected Element
 * Value of data Attribute "time" can be any thing accepted by New Date().
 * If you Only Need Time Different you can check this repo [Get-Time-Difference](https://github.com/Bhardwaj-Raghav/Get-Time-Difference/blob/master/index.js)

## Accepted Options:
###### Default Options:
    {
        currentTime: new Date(),
        full: false,
        prefix: '',
        postfix: 'ago',
        seconds: false
    };
###### Options Explained:
* currentTime: Accept Value New Date() value.
* full: whether you want full time difference or only maximum.
    * full === true =>  3 Days 2 Hours 25 Minutes 20 Seconds ago.
    * full === false =>  3 Days ago.
* prefix: set Text Prefix, default ''.
* postfix: set Text Postfix, default 'ago'.
* seconds: whether you want to Show seconds or Just now (in case time difference is in seconds only).
    * seconds === true =>  20 Seconds ago.
    * seconds === false =>  Just Now.
## Example:
[CodePen Example - Elapsed Time](https://codepen.io/raghavbhardwaj/pen/yLNzbLj)
