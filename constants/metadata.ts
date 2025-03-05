import {Metadata} from "next";

export const metadataExp : Metadata = {
    title: "Berry Busy | Delightfully Sweet To-Do App",
    description: 'A cute, strawberry-themed to-do app that helps you organize your tasks with a delightful pink interface.',
    keywords: ["todo app", "task management", "productivity", "strawberry themed", "pink themed", "cute app"],
    authors: [{name: "strwbry"}],
    creator: "strwbry",
    openGraph: {
        type: 'website',
        locale: 'en_US',
        // url: 'https://berrybusy.yourdomain.com', --> change after deployment
        title: 'Berry Busy | Delightfully Sweet To-Do App',
        description: 'A cute, strawberry-themed to-do app that helps you organize your tasks with a delightful pink interface.',
        siteName: 'Berry Busy',
        images: [
            {
                url: 'icons/strwbry-icon.png',
                width: 1200,
                height: 630,
                alt: 'Berry Busy App Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Berry Busy | Delightfully Sweet To-Do App',
        description: 'A cute, strawberry-themed to-do app that helps you organize your tasks with a delightful pink interface.',
        images: ['/strwbry-icons.png'],
    },
    icons: {
        icon: [
            { url: 'icons/icon.ico' },
            { url: 'icons/strwbry-icon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: 'icons/strwbry-apple-touch-icon.png' },
        ],
    },
}