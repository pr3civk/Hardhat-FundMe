import { network } from "hardhat";
import { devNetworkConfig, networkConfig } from "../helper-hardhat-config";

interface ContractConfig {
    getNamedAccounts: () => Promise<any>;
    deployments: any;
}

module.exports = async ({ getNamedAccounts, deployments }: ContractConfig) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    let ethUsdPriceFeedAddress: string;
    let networkName: string;
    
    if (devNetworkConfig.includes(network.name)) {
        const ethUSDAggregator = await deployments.get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUSDAggregator.address;
        networkName = network.name;
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId!].ethUsdPriceFeed;
        networkName = networkConfig[chainId!].name;
    }

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [],
        log: true,
    });
};
