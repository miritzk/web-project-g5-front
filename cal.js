

const events = [
    {
        title: 'test',
        date: '08/12/2021',
        start: '08:00',
        description: "",
        duration:1.5,
        color:"rgb(231, 55, 84)"
    }
]
function generateCal(divId = "calendar", halfHourCellHeight = 20, events = events) {
    let cal = document.querySelector(`#${divId}`);
    const today = moment();
    const from_date = today.startOf('week');
    let header = cal.appendChild(document.createElement("div"));
    header.classList.add("calendar-header");
    let body = cal.appendChild(document.createElement("div"));
    body.classList.add("calendar-body");

    // header
    let emptyBox = header.appendChild(document.createElement("div"));
    emptyBox.className = "day-header";
    for (i = 0; i < 7; i++) {
        const day = from_date.clone().add(i, 'days');
        let dayHeader = header.appendChild(document.createElement("div"));
        dayHeader.innerHTML = `<span className='day-name'>${day.format("dddd")}</span><span className='date'>${day.format("DD/MM/YYYY")}</span>`;
        dayHeader.className = "day-header";
    }


    //hours
    
    // legend
    let timesCol = body.appendChild(document.createElement("div")); // times column
    timesCol.className = "day-column"; 
    let timesColHours = timesCol.appendChild(document.createElement("div"));
    timesColHours.className = "day-hours";
    // legend shift
    let shifting = timesColHours.appendChild(document.createElement("div"));
    shifting.style.height = halfHourCellHeight + "px";
    shifting.className = "shifting";
    // legend hours:
    for (j = 1; j < 24; j++) {
        let hourCell = timesColHours.appendChild(document.createElement("div"));
        hourCell.className = "time-cell hour-title-cell";
        hourCell.style.height = halfHourCellHeight * 2 + "px";
        hourCell.innerHTML = `<span className='hour-cell-text'>${moment.utc(j*3600*1000).format('HH:mm')}</span>`;
    }


    // days
    for (i = 0; i < 7; i++) {
    const day = from_date.clone().add(i, 'days');
    let dayColumn = body.appendChild(document.createElement("div"));
    dayColumn.className = "day-column";
    let dayHours = dayColumn.appendChild(document.createElement("div"));
    dayHours.className = "day-hours";
        // for each hour add two div cells
    for (j = 0; j < 24; j++) {
        let hourCell = dayHours.appendChild(document.createElement("div"));
        hourCell.className = "time-cell hour-cell";
        hourCell.style.height = halfHourCellHeight + "px";
        let halfHourCell = dayHours.appendChild(document.createElement("div"));
        halfHourCell.className = "time-cell half-hour-cell";
        halfHourCell.style.height = halfHourCellHeight + "px";
        }
    dayHours.removeChild(dayHours.lastChild);
    }
    events.forEach(event => {
        let eventMoment = moment(event.date + event.start, "DD/MM/YYYYHH:mm")
        evDiv = document.createElement("div")
        evDiv.className = "event";
        evDiv.innerHTML = `<span className='event-title'>${event.title}</span><span className='event-description'>${event.description}</span>`;
        if (event.color) {
            evDiv.style.backgroundColor = event.color;
        }
        let eventCell = cal.children[1].children[eventMoment.day()].children[0].children[eventMoment.hour() * 2];
        eventCell.appendChild(evDiv);
        eventCell.style.height = halfHourCellHeight * 2 * event.duration + "px";
        // eventCell.style.height = halfHourCellHeight + "px";
        for (let i = 1; i < event.duration * 2; i++) {
            eventCell.nextSibling.remove();
            // cal.children[1].children[eventMoment.day()].children[0].children[eventMoment.hour()*2 + 1].remove();
        }
    });
}

generateCal();