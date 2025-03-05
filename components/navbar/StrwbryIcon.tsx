import React from 'react';
import Link from "next/link";
import Image from "next/image";

const StrwbryIcon = ({className} : {className? : string}) => {
    return (
        <div className={`${className} flex items-center justify-between`}>
                <Link
                    href="/public"
                    className="flex items-center space-x-2 font-display text-xl font-bold text-strawberry-600"
                >
                    <Image
                        src="/icons/strwbry-icon.png"
                        width={30}
                        height={30}
                        alt="icon"
                    />
                    <p>
                        Berry Busy
                    </p>
                </Link>
        </div>
    );
};

export default StrwbryIcon;