import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <div className="h-25 flex items-center justify-center">
            <div className="h-10 w-full px-19 flex items-center justify-between">
                <Logo />

                <Navigation />

                <h1>Actions</h1>
            </div>
        </div>
    );
}