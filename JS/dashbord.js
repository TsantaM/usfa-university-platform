const edtData = [
    {
        date: "2025-04-16",
        matin: {
            uc: "Droit de l'Environnement",
            heure: "10h-12h",
            sale: "Amphi III"
        },
    },

    {
        date: "2025-04-18",
        matin: {
            uc: "Méthodologie de Recherche",
            heure: "10h-12h",
            sale: "Amphi I"
        },
        apm: {
            uc: "Droit Bancaire",
            heure: "13h-15h",
            sale: "Salle 302"
        }
    }
];

const weekSelect = document.getElementById("weekSelect");
console.log(weekSelect);
const htmljour = document.querySelectorAll(".jour")
console.log(htmljour.length);
const jourHoraire = document.querySelectorAll(".jour-horaire");

// Insertion de la valeur par défaut de la semaine actuelle :
function getCurrentWeekValue() {
    const today = new Date();
    const year = today.getFullYear();

    // Set to nearest Thursday: current date + 4 - current day number
    // (Monday is 1, Sunday is 0 in JS => adjust so that week starts on Monday)
    const day = today.getDay(); // 0 (dimanche) à 6 (samedi)
    const diff = today.getDate() + 4 - (day === 0 ? 7 : day);
    const thursday = new Date(today.setDate(diff));

    // First day of the year
    const firstJan = new Date(thursday.getFullYear(), 0, 1);
    const days = Math.floor((thursday - firstJan) / (24 * 60 * 60 * 1000));
    const week = Math.ceil((days + 1) / 7);

    // Format semaine : YYYY-Wnn (ajout d’un zéro si nécessaire)
    const weekStr = `${thursday.getFullYear()}-W${week.toString().padStart(2, '0')}`;
    return weekStr;
}

function edtUpdater(value) {
    jourHoraire.forEach((jour) => {
        jour.innerHTML = ``
    })
    console.log(value);
    const [year, week] = value.split('-W').map(Number)
    console.log(year, week);

    const firstDayOfYear = new Date(year, 0, 1)
    const dayOfWeek = firstDayOfYear.getDay();
    console.log(firstDayOfYear, dayOfWeek);

    const dayOffset = (dayOfWeek <= 4 ? 1 - dayOfWeek : 8 - dayOfWeek)
    console.log(dayOffset);

    const firstMonday = new Date(year, 0, 1 + dayOffset)
    console.log(firstMonday);

    const weekStart = new Date(firstMonday)
    weekStart.setDate(firstMonday.getDate() + (week - 1) * 7)
    console.log(weekStart);

    const days = {}

    for (let i = 0; i < 7; i++) {
        const current = new Date(weekStart)
        current.setDate(weekStart.getDate() + i)
        console.log(current);

        const isoDate = current.toISOString().split("T")[0];
        days[`day${i + 1}`] = isoDate
    }

    console.log(days);

    const jours = Object.values(days).map(dateStr => {
        const date = new Date(dateStr);
        return String(date.getDate()).padStart(2, '0')
    })


    const weekDay = jours.slice(1)
    console.log(weekDay);

    const day = [
        "Lun",
        "Mar",
        "Mer",
        "Jeu",
        "Ven",
        "Sam"
    ]

    console.log(day.length);

    for (i = 0; i < htmljour.length; i++) {
        htmljour[i].textContent = `${day[i]} ${weekDay[i]}`
    }


    const dates = Object.values(days).slice(1)
    console.log(dates);

    dates.forEach((date, index) => {
        console.log(index);

        for (i = 0; i < edtData.length; i++) {
            if (edtData[i].date == date) {
                todayEdt = edtData[i]
                console.log(todayEdt);

                for (i = 0; i < htmljour.length; i++) {
                    if (index === i) {
                        console.log(htmljour[i]);
                        const horaireApm = `${day[i]}-apm`
                        const horaireMatin = `${day[i]}-matin`

                        const matin = document.getElementById(horaireMatin.toLowerCase());
                        const apm = document.getElementById(horaireApm.toLowerCase())

                        todayEdt.matin ? matin.innerHTML = `
                        <h3>${todayEdt.matin.uc}</h3>
                        <p>${todayEdt.matin.sale}</p>
                        <p>${todayEdt.matin.heure}</p>
                    `   : null

                        todayEdt.apm ? apm.innerHTML = `
                        <h3>${todayEdt.apm.uc}</h3>
                        <p>${todayEdt.apm.sale}</p>
                        <p>${todayEdt.apm.heure}</p>
                    `   : null
                    }
                }
            }
        }
    })
}


window.addEventListener("load", () => {
    weekSelect.value = getCurrentWeekValue();
    edtUpdater(weekSelect.value)
})

// Dynamisation de l'EDT

weekSelect.addEventListener("change", ()=>{edtUpdater(weekSelect.value)})
weekSelect.setAttribute('max', getCurrentWeekValue())