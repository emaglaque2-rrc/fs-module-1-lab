import { Department, Departments } from "./Department"; 

/**
 * Employee and Department data taken from the
 * Pixell River Financial Case Study that was linked (pgs. 17–18).
 * 
 * Data is structured using Department and Employee objects and to 
 * "closely" match the interfaces shown in the lab instructions,
 * so it can be easily read and rendered into the DOM.
 * 
 * \\\\ IMPORTANT I used AI to help me convert the data into this 
 * format/nested structure! IMPORTANT \\\\\\\\ 
 */
export const departments: Departments[] = [
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

export function Directory() {
    return (
        <div id="directory-container">
            {departments.map((department, index) => (
                <Department
                    key={index}
                    name={department.name}
                    employees={department.employees}
                />
            ))}
        </div>
    )
}