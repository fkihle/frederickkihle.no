export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="fixed bottom-0 right-0 p-2 font-coldiacItalic">
            <div className="group relative">
                <div className=" bg-neutral-900 text-gray-400 p-2 pr-8 rounded-l-md flex items-center space-x-2 group-hover:pr-4 transition-all duration-500 transform translate-x-52 group-hover:translate-x-2">
                    <span>&copy;</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                        {currentYear} - Frederick Kihle.
                    </span>
                </div>
            </div>
        </div>
    )
};