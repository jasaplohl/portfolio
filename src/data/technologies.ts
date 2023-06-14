const technologies: string[] = [
    'AWS Lambda', 'AWS KMS', 'AWS SES', 'AWS Cognito',
    'Ethers', 'Blockchain', 'Bitcoin', 'Ethereum',
    'JavaScript', 'TypeScript'
];

export const getTechnologies = (): string => {
    return technologies.join(' ');
};