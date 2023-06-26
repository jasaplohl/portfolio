export interface Skill {
    group: string;
    items: string[];
}

export const skills: Skill[] = [
    {
        group: 'Frontend frameworks',
        items: [
            'VueJS', 'Flutter', 'Angular', 'React Native'
        ]
    },
    {
        group: 'Programming languages',
        items: [
            'TypeScript', 'JavaScript', 'Python', 'Golang', 'Dart', 'Java'
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
            'Keycloak', 'Docker', 'Liquibase', 'Git', 'Atlassian', 'PostgreSQL', 'Firebase',
            'Django', 'Heroku'
        ]
    }
];

export const getTechnologiesString = (): string => {
    return skills.map((t: Skill) => t.items.join(' ')).join(' ');
};