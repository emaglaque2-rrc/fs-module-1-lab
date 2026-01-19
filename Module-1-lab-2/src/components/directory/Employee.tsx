export interface Employee {
    firstName: string;
    lastName?: string;
}

export function Employee({firstName, lastName}: Employee) {
    return 
        <li>
            {firstName} {lastName}
        </li>;
};