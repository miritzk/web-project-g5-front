

const events = [
    {
        id:"1",
        title: 'test',
        date: '05/12/2021',
        start: '08:00',
        description: "",
        duration:1.5,
        color:"rgb(231, 55, 84)"
    },
    {
        id:"1",
        title: 'test',
        date: '06/12/2021',
        start: '08:00',
        description: "",
        duration:1.5,
        color:"rgb(231, 55, 84)"
    },
    {
        id:"1",
        title: 'test',
        date: '07/12/2021',
        start: '08:00',
        description: "",
        duration:1.5,
        color:"rgb(231, 55, 84)"
    },
    {
        id:"1",
        title: 'test',
        date: '08/12/2021',
        start: '08:00',
        description: "",
        duration:1.5,
        color:"rgb(231, 55, 84)"
    },
    {
        id:"1",
        title: 'test',
        date: '09/12/2021',
        start: '08:00',
        description: "",
        duration:1.5,
        color:"rgb(231, 55, 84)"
    },
    {
        id:"1",
        title: 'test',
        date: '09/12/2021',
        start: '10:00',
        description: "",
        duration:1.5,
        color:"rgb(231, 55, 84)"
    }
]
function generateCal(divId = "calendar", halfHourCellHeight = 20, events = events, startHour = 6, endHour = 22) {
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
    // let shifting = timesColHours.appendChild(document.createElement("div"));
    // shifting.style.height = halfHourCellHeight + "px";
    // shifting.className = "shifting";

    // legend hours:
    for (j = startHour; j < endHour; j++) {
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
    for (j = startHour; j < endHour; j++) {
        let hourCell = dayHours.appendChild(document.createElement("div"));
        hourCell.className = "time-cell hour-cell";
        hourCell.style.height = halfHourCellHeight + "px";
        hourCell.id=`day-${i}-hour-${j*10}`;
        let halfHourCell = dayHours.appendChild(document.createElement("div"));
        halfHourCell.className = "time-cell half-hour-cell";
        halfHourCell.style.height = halfHourCellHeight + "px";
        halfHourCell.id=`day-${i}-hour-${(j+0.5)*10}`;
        }
    // dayHours.firstChild.style.marginTop = halfHourCellHeight + "px";
    }

    events.forEach(event => {
        let eventMoment = moment(event.date + event.start, "DD/MM/YYYYHH:mm")
        evDiv = document.createElement("div")
        evDiv.className = "event";
        evDiv.innerHTML = `<span className='event-title'>${event.title}</span><span className='event-description'>${event.description}</span>`;
        if (event.color) {
            evDiv.style.backgroundColor = event.color;
        }
        let eventCell = document.querySelector(`#day-${eventMoment.day()}-hour-${eventMoment.hour()*10}`);
        eventCell.appendChild(evDiv);
        eventCell.style.height = halfHourCellHeight * 2 * event.duration + "px";
        eventCell.addEventListener("click", () => {
            // what to do on click on the event:
            ans = confirm("whould you like to join this event?");
            if (ans) {
                console.log("you joined the event");
            }
        })
        for (let i=eventMoment.hour() + 0.5; i < eventMoment.hour() + event.duration; i+=0.5) {
            let halfHourCell = document.querySelector(`#day-${eventMoment.day()}-hour-${i*10}`); // FIXME: 0.5 dont parss right
            halfHourCell.remove();
        }
    });
    // events.forEach(event => {
    //     let eventMoment = moment(event.date + event.start, "DD/MM/YYYYHH:mm")
    //     evDiv = document.createElement("div")
    //     evDiv.className = "event";
    //     evDiv.innerHTML = `<span className='event-title'>${event.title}</span><span className='event-description'>${event.description}</span>`;
    //     if (event.color) {
    //         evDiv.style.backgroundColor = event.color;
    //     }
    //     let eventCell = cal.children[1].children[eventMoment.day()+1].children[0].children[(eventMoment.hour() - startHour) * 2 ];
    //     eventCell.appendChild(evDiv);
    //     eventCell.style.height = halfHourCellHeight * 2 * event.duration + "px";
    //     eventCell.addEventListener("click", () => {
    //         // what to do on click on the event:
    //         ans = confirm("whould you like to join this event?");
    //         if (ans) {
    //             console.log("you joined the event");
    //         }
    //     })
    //     for (let i = 1; i < (event.duration * 2); i++) {
    //         eventCell.nextSibling.remove();
    //     }
    // });
}

generateCal("calendar", 40, events, 6 , 22);