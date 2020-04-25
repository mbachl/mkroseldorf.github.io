function fetch() {
    const weekdayFormat = new Intl.DateTimeFormat('de-DE', {weekday: 'long'});
	const timeFormat = new Intl.DateTimeFormat('de-DE', {hour: 'numeric', minute: 'numeric'});
	const dateFormat = new Intl.DateTimeFormat('de-DE', {month: 'short', day: 'numeric'});

    const request = new XMLHttpRequest();
    
    //const url='http://localhost:5000/proxy';
    const url='https://mkroseldorf-km-proxy.herokuapp.com/proxy';

    request.open("GET", url);
    request.send();
    
    request.onreadystatechange = function(e) {
        if(request.readyState===4) {
            let events = JSON.parse(request.responseText);
    
            let eventsHtml="";

            events.forEach(function(event) {
                const time = timeFormat.format(event.dtstart);
                const date = dateFormat.format(event.dtstart);
                const weekday = weekdayFormat.format(event.dtstart);

                eventsHtml+='<tr data-priority="'+event.priority+'">';
                eventsHtml+='<td class="vereinsKuerzel">'+event.vereinsKuerzel+'</td>';
                eventsHtml+='<td class="dateTime">'+weekday+', <span class="date">'+date+'</span><br />'+time+'</td>';
                eventsHtml+='<td class="text">'+event.text+'<br>'+event.description+'</td>';
                eventsHtml+='</tr>'+"\n";
    
            });  

            document.getElementById("events").innerHTML=eventsHtml;
        }  
    }
}

document.addEventListener("DOMContentLoaded", fetch);
