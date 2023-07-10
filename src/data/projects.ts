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
// react native workout app, backend: NodeJS REST API, PostgreSQL
// golang rest api (kadar) for sending Slack messages and saving them into the DB. JWT authorization
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
            A website displaying information about movies. 
            It uses the TMDB API to get the relevant information.
            The frontend framework used is Angular. It is deployed on
            the GitHub pages.
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
            A mobile application for browsing movie and TV show information. 
            It is built with Flutter and uses the TMDB API to get the media information.
            The app also enables user authentication with Google via Firebase. The
            users can also add movies to favourites,watchlist and watch history. Firebase
            is also used to store this information.
        `,
        startDate: new Date(),
        endDate: new Date(),
        imgUrl: '/images/projects/movie_night.png',
        technologies: ['Flutter', 'Firebase']
    }
];