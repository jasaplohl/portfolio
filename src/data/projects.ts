export interface Project {
    device: 'web' | 'mobile',
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
// react native workout app, backend: Node.js REST API, Postgres
// golang rest api (Kadar) for sending Slack messages and saving them into the DB. JWT authorization
// keycloak authentication, golang backend, flutter frontend oAuth, Docker
// Angular blog website (frontend) with AWS backend
// React website for displaying YouTube videos. React, YouTube API

export const projects: Project[] = [
    {
        device: 'web',
        type: 'work',
        title: 'WhiteHydrogen platform',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/white_hydrogen_platform.png',
        url: 'https://www.platform.whiteh2coin.com/',
        technologies: ['VueJS', 'AWS', 'Stripe', 'Blockchain', 'Onfido', 'Tatum']
    },
    {
        device: 'web',
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
        device: 'web',
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
        device: 'web',
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
        device: 'web',
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
        device: 'mobile',
        type: 'work',
        title: 'I2GO',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/i2go.png',
        technologies: ['Java', 'Android Studio', 'Delphi']
    },
    {
        device: 'web',
        type: 'personal',
        title: 'MovieWatch',
        description: `
            A dynamic web application built with Angular, enabling the users to explore
            detailed information about movies, TV shows and actors. It was developed
            as a personal project to enhance my Angular skills.
            <br/><br/>
            All the data displayed on the application is provided by the TMDB API.
            The application is deployed on the GitHub pages.
        `,
        startDate: new Date('2022-1-19'),
        endDate: new Date('2022-2-3'),
        imgUrl: '/images/projects/movie_watch.png',
        url: 'https://jasaplohl.github.io/movie-watch/',
        technologies: ['Angular', 'Github pages']
    },
    {
        device: 'mobile',
        type: 'personal',
        title: 'MovieNight',
        description: `
            MovieNight is a mobile app built with Flutter that lets you browse and explore movie 
            and TV show information. Powered by the TMDB API, it provides comprehensive 
            details about synopses, ratings, cast, and more.
            <br/><br/>
            You can authenticate using Google via Firebase and personalize your experience by adding 
            favorites, watchlist, and watch history. Your selections are securely stored using Firestore.
        `,
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/movie_night.png',
        technologies: ['Flutter', 'Firebase']
    }
];