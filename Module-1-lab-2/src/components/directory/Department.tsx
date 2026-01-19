import { Employee } from './Employee';

interface Department {
    name: string;
    employees: Employee[];
}

export function Department ({name, employees}: Department) {
    return (
        <section>
            <h2>{name}</h2>
            <ul>
                {employees.map((employee, index) => (
                    <Employee
                        key={index}
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                    />
                ))}
            </ul>
        </section>
    );
}