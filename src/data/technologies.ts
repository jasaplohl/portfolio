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
        group: 'Web',
        items: [
            'HTML', 'CSS', 'Sass', 'Tailwind', 'Bootstrap'
        ]
    },
    {
        group: 'Other',
        items: [
            'Keycloak', 'Docker', 'Liquibase', 'Git'
        ]
    }
];

export const getTechnologiesString = (): string => {
    return technologies.map((t) => t.items.join(' ')).join(' ');
};

export const getFrontendFrameworks = (): string[] => {
  const t: Technology =  technologies.filter((t) => t.group === 'Frontend frameworks')[0];
  return t.items;
};

export const getLanguages = (): string[] => {
    const t: Technology =  technologies.filter((t) => t.group === 'Languages')[0];
    return t.items;
};

export const getBlockchain = (): string[] => {
    const t: Technology =  technologies.filter((t) => t.group === 'Blockchain')[0];
    return t.items;
};