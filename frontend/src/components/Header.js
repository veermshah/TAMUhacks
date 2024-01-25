export default function Header() {
    return (
        <>
            <header>
                <h2 class="logo">RoboAdvisor</h2>
                <nav class="navigation">
                    <a href="/home" class="active">
                        Home
                    </a>
                    <a href="/advisor">Advisor</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/login">Login</a>
                </nav>
            </header>
        </>
    );
}
