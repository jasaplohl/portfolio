interface Project {
    title: string;
    url?: string;
    imgUrl: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        title: 'WhiteHydrogen website',
        imgUrl: '/images/projects/white_hydrogen_website.png',
        url: 'https://www.whiteh2coin.com/',
        technologies: ['VueJS', 'AWS']
    },
    {
        title: 'WhiteHydrogen dashboard',
        imgUrl: '/images/projects/white_hydrogen_dashboard.png',
        url: 'https://app.whiteh2coin.com/',
        technologies: ['Python', 'Django', 'Blockchain']
    },
    {
        title: 'WhiteHydrogen platform',
        imgUrl: '/images/projects/white_hydrogen_platform.png',
        technologies: ['VueJS', 'AWS', 'Stripe', 'Blockchain', 'Onfido', 'Tatum']
    },
    {
        title: 'NFT minting platform',
        imgUrl: '/images/projects/mint_website.png',
        url: 'https://mint.devleet.si',
        technologies: ['VueJS', 'Blockchain']
    }
];

export const personalProjects: Project[] = [
    {
        title: 'MovieWatch',
        imgUrl: '/images/projects/movie_watch.png',
        url: 'https://jasaplohl.github.io/movie-watch/',
        technologies: ['Angular', 'Github pages']
    },
    {
        title: 'MovieNight',
        // TODO: upload apk
        imgUrl: '/images/projects/movie_night.png',
        technologies: ['Flutter', 'Firebase']
    }
];