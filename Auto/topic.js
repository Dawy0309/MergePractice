var topic = [
    "開幕典禮",
    "國定假日",
    "Flame v.s. XQUARE",
    "SAVIORS v.s. KKR",
    "FANTASTICK v.s. Professional",
    "停賽",
    "GEEKSTAR v.s. 꾼"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    //一次設定好月份跟日期
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(12, 18);