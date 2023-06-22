export interface Project {
    type: 'personal' | 'work';
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    url?: string;
    imgUrl: string;
    technologies: string[];
    // TODO: apk destination for mobile projects
}
// react native workout app, backend: NodeJS REST API, PostgreSQL
// golang rest api (kadar) for sending Slack messages and saving them into the DB. JWT authorization
// keycloak authentication, golang backend, flutter frontend oAuth, Docker
// Angular blog website (frontend) with AWS backend
// React website for displaying YouTube videos. React, YouTube API

export const projects: Project[] = [
    {
        type: 'work',
        title: 'WhiteHydrogen website',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/white_hydrogen_website.png',
        url: 'https://www.whiteh2coin.com/',
        technologies: ['VueJS', 'AWS']
    },
    {
        type: 'work',
        title: 'WhiteHydrogen dashboard',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/white_hydrogen_dashboard.png',
        url: 'https://app.whiteh2coin.com/',
        technologies: ['Python', 'Django', 'Blockchain']
    },
    {
        type: 'work',
        title: 'WhiteHydrogen platform',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/white_hydrogen_platform.png',
        technologies: ['VueJS', 'AWS', 'Stripe', 'Blockchain', 'Onfido', 'Tatum']
    },
    {
        type: 'work',
        title: 'NFT minting platform',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/mint_website.png',
        url: 'https://mint.devleet.si',
        technologies: ['VueJS', 'Blockchain']
    },
    {
        type: 'work',
        title: 'Moja Morela',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/moja_morela.png',
        url: 'https://shopmorela.si/',
        technologies: ['JavaScript', 'HTML', 'Sass']
    },
    {
        type: 'work',
        title: 'I2GO',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/i2go.png',
        technologies: ['Java', 'Android Studio', 'Delphi']
    },
    {
        type: 'personal',
        title: 'MovieWatch',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/movie_watch.png',
        url: 'https://jasaplohl.github.io/movie-watch/',
        technologies: ['Angular', 'Github pages']
    },
    {
        type: 'personal',
        title: 'MovieNight',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/movie_night.png',
        technologies: ['Flutter', 'Firebase']
    }
];