export interface Skill {
    group: string;
    items: string[];
}

export const skills: Skill[] = [
    {
        group: 'Frontend frameworks',
        items: [
            'VueJS', 'Flutter', 'Angular', 'React Native', 'React'
        ]
    },
    {
        group: 'Programming languages',
        items: [
            'TypeScript', 'JavaScript', 'Python', 'Golang', 'Dart', 'Java', 'C'
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
            'Lambda', 'KMS', 'SES', 'Cognito', 'Amplify', 'API Gateway', 'S3', 'RDS'
        ]
    },
    {
        group: 'Other',
        items: [
            'Keycloak', 'Docker', 'Liquibase', 'Git', 'Atlassian', 'SQL', 'Firebase',
            'Django', 'Heroku', 'Delphi'
        ]
    }
];

export const getTechnologiesString = (): string => {
    return skills.map((t: Skill) => t.items.join(' ')).join(' ');
};