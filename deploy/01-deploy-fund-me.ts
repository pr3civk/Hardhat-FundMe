import { network, deployments } from "hardhat";
import { devNetworkConfig, networkConfig } from "../helper-hardhat-config";
import { verification } from "../utils/verification";

interface ContractConfig {
    getNamedAccounts: () => Promise<any>;
    deployments: any;
}

module.exports = async ({ getNamedAccounts }: ContractConfig) => {
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
        args: [ethUsdPriceFeedAddress],
        log: true,
    });

    log("-------------------------------------------");
    log("deployments:", deployments);
    log("-------------------------------------------");

    if (
        !devNetworkConfig.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verification(fundMe.address, [ethUsdPriceFeedAddress]);
    }
};

module.exports.tags = ["all", "fundMe"];
