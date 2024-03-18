import { network } from "hardhat";
import { networkConfig } from "../helper-hardhat-config";

interface ContractConfig {
    getNamedAccounts: () => Promise<any>;
    deployments: any;
}

module.exports = async ({ getNamedAccounts, deployments }: ContractConfig) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    const ethUsdPriceFeedAddress = networkConfig[chainId!].ethUsdPriceFeed;
    const networkName = networkConfig[chainId!].name;

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [],
        log: true,
    });
};
