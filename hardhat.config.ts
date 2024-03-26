import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ethers";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";

export const ETHERSCAN_API_KEY: string = process.env.ETHERSCAN_API_KEY!;
const ALCHEMY_SEPOLIA_RPC_URL: string = process.env.ALCHEMY_SEPOLIA_RPC_URL!;
const PRIVATE_KEY: string = process.env.PRIVATE_KEY!;
const COINMARKET_API_KEY: string = process.env.COINMARKETCAP_API_KEY!;

const config: HardhatUserConfig = {
    solidity: "0.8.24",
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: ALCHEMY_SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
            url: "http://127.0.0.1:8545",
        },
    },
    etherscan: {
        apiKey: {
            sepolia: ETHERSCAN_API_KEY,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            11155111: 0,
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        coinmarketcap: COINMARKET_API_KEY,
    },
};

export default config;
