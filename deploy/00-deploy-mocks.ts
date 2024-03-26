import { network } from "hardhat";
import {
    networkConfig,
    devNetworkConfig,
    constants,
} from "../helper-hardhat-config";

interface MocksConfig {
    getNamedAccounts: any;
    deployments: any;
}

module.exports = async ({ getNamedAccounts, deployments }: MocksConfig) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const { DECIMALS, INITIAL_PRICE } = constants;

    if (devNetworkConfig.includes(network.name)) {
        log("Mocks are not deployed on dev networks");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        });
        log("MockV3Aggregator deployed");
        log("---------------------------------------------------------");
    }
};
