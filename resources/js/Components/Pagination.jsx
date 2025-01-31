import { Link } from "@inertiajs/react";

export default function Pagination({links}){
    return (
        <nav className="text-center mt-4">
            {links.map((link)=>(
                <Link 
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "mx-1 inline-block py-2 px-3 rounded-lg text-gray-900 text-xs " +
                        (link.active ? " bg-gray-600 !text-gray-50 " : " ") +
                        (!link.url ? "  text-gray-300 cursor-not-allowed " : " hover:bg-gray-600 hover:!text-gray-50")
                    }
                    dangerouslySetInnerHTML={{__html: link.label}}
                    >
                </Link>
            ))}
        </nav>
    )
}