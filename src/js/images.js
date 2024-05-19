/* eslint-disable no-undef */

// loading all imgs on the asset folders
const requireIconsOne = require.context(
    "../assets/",
    false,
    /\.(png|jpe?g|svg)$/
)

export const icons = [
    { src: requireIconsOne('./reminder.png'), alt: 'the image of a list with bullet points'},
    { src: requireIconsOne('./calendar-alert-outline.png'), alt: 'calendar with an exclamation mark'},
    { src: requireIconsOne('./calendar-alert-outline.svg'), alt: 'calendar with an exclamation mark', name: 'Important'},
    { src: requireIconsOne('./calendar-check-outline.png'), alt: 'calendar with a checkmark'},
    { src: requireIconsOne('./calendar-check-outline.svg'), alt: 'calendar with a checkmark', name: 'Completed'},
    { src: requireIconsOne('./calendar-month-outline.png'), alt: 'month calendar'},
    { src: requireIconsOne('./calendar-month-outline.svg'), alt: 'month calendar', name: 'All'},
    { src: requireIconsOne('./calendar-today-outline.png'), alt: 'day calendar'},
    { src: requireIconsOne('./calendar-today-outline.svg'), alt: 'day calendar', name: 'Today'},
    { src: requireIconsOne('./calendar-week-outline.png'), alt: 'week calendar'},
    { src: requireIconsOne('./calendar-week-outline.svg'), alt: 'week calendar', name: 'Week'},
    { src: requireIconsOne('./note-edit-outline.png'), alt: 'edit icon'},
    { src: requireIconsOne('./trash-can-outline.png'), alt: 'trash can icon'},
]


const requireIconsTwo = require.context(
    "../assets/projects-icons/",
    false,
    /\.(png|jpe?g|svg)$/
)

export const projectIcons = [
    { src: requireIconsTwo('./book.svg'), alt: 'a book icon' },
    { src: requireIconsTwo('./dumbbells-exercise.svg'), alt: 'a person holding two dumbbells icon' },
    { src: requireIconsTwo('./money-bag.svg'), alt: 'a bag of money icon' },
    { src: requireIconsTwo('./pizza-slice.svg'), alt: 'a pizza slice icon' },
    { src: requireIconsTwo('./present-box.svg'), alt: 'a present box icon' },
    { src: requireIconsTwo('./volleyball-ball.svg'), alt: 'a volleyball ball icon' },
    { src: requireIconsTwo('./wrench-screwdriver-crossed.svg'), alt: 'a wrench and a screwdriver crossed' },
];