import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Image
                src="/logo-furniro.svg"
                alt="Furniro Logo"
                className="h-8 w-12.5"
                width={55}
                height={24}
            />

            <h1 className="font-bold text-4xl pt-1">
                Furniro
            </h1>
        </div>
    );
}