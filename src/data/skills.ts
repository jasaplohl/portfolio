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
    return skills.map((t: Skill) => t.items.join(' ')).join(' ');
};