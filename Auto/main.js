$(document).ready
(
    function() 
    {
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th><tr>");
    
        var topicCount = topic.length;
    
        var secondUnit = 1000;
        var minuteUnit = secondUnit * 60;
        var hourUnit = minuteUnit * 60;
        var dayUnit = hourUnit * 24;
    
        for(var x = 0; x < topicCount; x++)
        {   
            console.log(x+1);
            $("#courseTable").append("<tr>");
            if(topic[x] != "停賽" && topic[x] != "國定假日")
            {
                $("#courseTable").append("<td>"+(x+1)+"</td>");
                $("#courseTable").append("<td>"+
                (new Date(startDate.getTime()+7*x*dayUnit)).toLocaleDateString().slice(5)+"</td>");
                $("#courseTable").append("<td>"+topic[x]+"</td>");
            }
            else
            {
                $("#courseTable").append("<td id='td1'>"+(x+1)+"</td>");
                $("#courseTable").append("<td id='td1'>"+
                    (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
                $("#courseTable").append("<td id='td1'>"+topic[x]+"</td>");
            }
            $("#courseTable").append("</tr>");
        }
    }
);