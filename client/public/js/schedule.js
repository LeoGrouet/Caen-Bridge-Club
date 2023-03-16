// Récupération de l'élément du calendrier
const calendar = document.getElementById("calendar");

// Récupération de la date actuelle
const today = new Date();

// Récupération du mois et de l'année actuels
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Affichage du calendrier
showCalendar(currentMonth, currentYear);
showWeekday(today);

function showCalendar(month, year) {
  // Tableau de noms de mois et de jours
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  // Calcul du nombre de jours dans le mois en cours
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Calcul du premier jour de la semaine du mois en cours
  const firstDayOfMonth = new Date(year, month, 0).getDay();

  // Création de la structure de la table du calendrier
  let calendarHTML =
    "<table><thead><tr><th colspan='7'>" +
    monthNames[month] +
    " " +
    year +
    "</th></tr>";
  calendarHTML += "<tr>";
  for (let i = 0; i < dayNames.length; i++) {
    calendarHTML += "<th>" + dayNames[i] + "</th>";
  }
  calendarHTML += "</tr></thead><tbody>";

  // Ajout des jours du mois au tableau du calendrier
  let date = 1;
  for (let i = 0; i < 6; i++) {
    calendarHTML += "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        calendarHTML += "<td></td>";
      } else if (date > daysInMonth) {
        break;
      } else {
        calendarHTML += "<td>" + date + "</td>";
        date++;
      }
    }
    calendarHTML += "</tr>";
  }
  calendarHTML += "</tbody></table>";

  // Ajout du calendrier à l'élément du calendrier
  calendar.innerHTML = calendarHTML;
}

function showWeekday(date) {
  // Tableau de noms de jours
  const dayNames = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  // Création du message de la date actuelle
  const weekdayHTML =
    "<p>" +
    dayNames[date.getDay()] +
    " " +
    date.getDate() +
    " " +
    monthNames[date.getMonth()] +
    "</p>";

  // Ajout du message à l'élément du calendrier
  calendar.insertAdjacentHTML("beforeend", weekdayHTML);
}
