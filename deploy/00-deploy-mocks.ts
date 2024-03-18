import { network } from "hardhat";
import { networkConfig } from "../helper-hardhat-config";

interface MocksConfig {
    getNamedAccounts: any;
    deployments: any;
}

module.exports = async ({ getNamedAccounts, deployments }: MocksConfig) => {
    //
};