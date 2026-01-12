/**
 * Employee and Department data taken from the
 * Pixell River Financial Case Study that was linked (pgs. 17–18).
 * 
 * Data is structured using Department and Employee objects and to 
 * match the interfaces shown in the lab instructions,
 * so it can be easily read and rendered into the DOM.
 * 
 * \\\\ IMPORTANT I used AI to help me convert the data into this 
 * format/nested structure! IMPORTANT \\\\\\\\ 
 */
const departments = [
    {
        name: "Administration",
        employees: [
            { firstName: "Zoë", lastName: "Robins" },
            { firstName: "Madeleine", lastName: "Madden" }
        ]
    },
    {
        name: "Audit",
        employees: [
            { firstName: "Josha", lastName: "Sadowski" },
            { firstName: "Kate", lastName: "Fleetwood" }
        ]
    },
    {
        name: "Banking Operations",
        employees: [
            { firstName: "Priyanka", lastName: "Bose" },
            { firstName: "Hammed", lastName: "Animashaun" },
            { firstName: "Álvaro", lastName: "Morte" },
            { firstName: "Taylor", lastName: "Napier" },
            { firstName: "Alan", lastName: "Simmonds" }
        ]
    },
    {
        name: "Communications",
        employees: [
            { firstName: "Gil", lastName: "Cardinal" },
            { firstName: "Richard J.", lastName: "Lewis" }
        ]
    },
    {
        name: "Corporate Services",
        employees: [
            { firstName: "Randy", lastName: "Bradshaw" },
            { firstName: "Tracey", lastName: "Cook" },
            { firstName: "Lubomir", lastName: "Mykytiuk" }
        ]
    },
    {
        name: "Facilities",
        employees: [
            { firstName: "Dakota", lastName: "House" },
            { firstName: "Lori Lea", lastName: "Okemah" },
            { firstName: "Renae", lastName: "Morrisseau" },
            { firstName: "Rick", lastName: "Belcourt" },
            { firstName: "Selina", lastName: "Hanusa" }
        ]
    },
    {
        name: "Financial Services",
        employees: [
            { firstName: "Buffy", lastName: "Gaudry" },
            { firstName: "Shaneen Ann", lastName: "Fox" },
            { firstName: "Allan", lastName: "Little" },
            { firstName: "Danny", lastName: "Rabbit" },
            { firstName: "Jesse Ed", lastName: "Azure" }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            { firstName: "Stacy", lastName: "Da Silva" },
            { firstName: "Vladimír", lastName: "Valenta" },
            { firstName: "Samone", lastName: "Sayeses-Whitney" },
            { firstName: "Paul", lastName: "Coeur" }
        ]
    },
    {
        name: "Information Technology",
        employees: [
            { firstName: "Graham", lastName: "Greene" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const directoryContainerNode = document.getElementById("directory-container");
    const yearNode = document.getElementById("year");
    
    // Renders current year in footer
    // REFERENCE for getFullYear(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
    // kind of too lazy to make a new function for this so it'll just sit in addEventListener for now! :)
    const currentYear = new Date().getFullYear();
    yearNode.textContent = currentYear;

    // Renders department and employee data into the DOM
});