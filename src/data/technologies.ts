interface Technology {
    group: string;
    items: string[];
}

export const technologies: Technology[] = [
    {
        group: 'Frontend frameworks',
        items: [
            'VueJS', 'Flutter', 'Angular', 'React Native'
        ]
    },
    {
        group: 'Languages',
        items: [
            'TypeScript', 'JavaScript', 'Python', 'Golang', 'Dart'
        ]
    },
    {
        group: 'Web',
        items: [
            'HTML', 'CSS', 'Sass', 'Tailwind', 'Bootstrap'
        ]
    },
    {
        group: 'Blockchain',
        items: [
            'Avalanche', 'Ethereum', 'Polygon', 'Bitcoin', 'Ethers', 'Tatum', 'Moralis'
        ]
    },
    {
        group: 'AWS',
        items: [
            'AWS Lambda', 'AWS KMS', 'AWS SES', 'AWS Cognito', 'AWS Amplify',
            'AWS API Gateway', 'AWS S3', 'AWS RDS'
        ]
    },
    {
        group: 'Other',
        items: [
            'Keycloak', 'Docker', 'Liquibase', 'Git', 'Atlassian', 'PostgreSQL', 'Firebase',
            'Django', 'Heroku'
        ]
    }
];

export const getTechnologiesString = (): string => {
    return technologies.map((t) => t.items.join(' ')).join(' ');
};

// export const getTechnologies = (): Technology[] => {
//     return technologies.filter((t) => t.group !== 'Other');
// }
//
// export const getOtherTechnologies = (): Technology => {
//     return technologies.filter((t) => t.group === 'Other')[0];
// }