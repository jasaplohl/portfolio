interface Technology {
    group: string;
    items: string[];
}

const technologies: Technology[] = [
    {
        group: 'AWS',
        items: [
            'Lambda', 'KMS', 'SES', 'Cognito', 'Amplify', 'API Gateway', 'S3', 'RDS'
        ]
    },
    {
        group: 'Languages',
        items: [
            'TypeScript', 'JavaScript', 'Python', 'Golang', 'Dart'
        ]
    },
    {
        group: 'Frontend frameworks',
        items: [
            'VueJS', 'Flutter', 'Angular', 'React Native'
        ]
    },
    {
        group: 'Blockchain',
        items: [
            'Avalanche', 'Ethereum', 'Polygon', 'Bitcoin', 'Ethers', 'Tatum', 'Moralis'
        ]
    },
    {
        group: 'Other',
        items: [
            'Keycloak', 'Docker', 'Liquibase', 'Git'
        ]
    }
];

export const getTechnologies = (): string => {
    return technologies.map((t) => t.items.join(' ')).join(' ');
};