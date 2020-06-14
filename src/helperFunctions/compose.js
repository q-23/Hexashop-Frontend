const compose = (f, g) => (...args) => f(g(...args));

const composeFunctions = (...fns) => fns.reduce(compose);

export default composeFunctions