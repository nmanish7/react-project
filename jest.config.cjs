module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: [],
    transform: {
        '^.+\\.jsx?$': ['babel-jest', { configFile: './babel.config.cjs' }],
    },
    verbose: true,
};