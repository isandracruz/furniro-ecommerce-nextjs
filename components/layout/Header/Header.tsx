import Logo from "./Logo";

export default function Header() {
    return (
        <div className="h-25 flex items-center justify-center">
            <div className="h-10 w-full px-19 flex items-center justify-between">
                <Logo />

                <h1>Navigation</h1>

                <h1>Actions</h1>
            </div>
        </div>
    );
}