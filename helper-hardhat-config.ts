interface NetworkConfig {
    name: string;
    ethUsdPriceFeed: string;
}

interface NetworkConfigMap {
    [networkId: number]: NetworkConfig;
}

interface Constants {
    [constant: string]: number | string | boolean;
}

export const constants: Constants = {
    DECIMALS: 8,
    INITIAL_PRICE: 30000000000,
};

export const networkConfig: NetworkConfigMap = {
    11155111: {
        name: "sepolia-testnet",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
    5: {
        name: "goerli-testnet",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    80001: {
        name: "mumbai-polygon-testnet",
        ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
};

export const devNetworkConfig: string[] = ["hardhat", "localhost"];
