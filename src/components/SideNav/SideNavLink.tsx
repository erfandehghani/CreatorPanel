import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    name: string;
    link: string;
    icon: React.ReactNode;
}

const SideNavLink: React.FC<Props> = ({name, link, icon}) => {
    const pathname = usePathname();

	return (
		<Link
            href={link}
            className={
                // Check if the link is active and apply the following styles
                pathname == link ? 
                'font-bold text-blue-primary flex items-center justify-start hover:bg-light-primary  px-4 py-2 rounded-full duration-100 group' 
                
                // if the link was not active... apply these classes
                :'flex text-light-secondary items-center justify-start hover:bg-light-primary px-4 py-2 rounded-full duration-100 group'
                }
        >
            <div className="w-7 flex justify-center items-center text-current group-hover:text-blue-primary">
                { icon }
            </div>
            <span className="mr-4 text-dark-primary group-hover:font-bold">{  name  }</span>

        </Link>
	);
};

export default SideNavLink;
