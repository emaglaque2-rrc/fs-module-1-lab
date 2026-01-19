import "./Header.css";

export function Header() {
    return (
        <header>
            <img
                src="/src/assets/pixell-river-logo.png"
                alt="Pixell River Logo"
                className="logo"
            />
            <div>
                <h1>Pixell River Employee Directory</h1>
                <p>Welcome! Here you can see Zach's slaves by departments.</p>
            </div>
        </header>
    );
}