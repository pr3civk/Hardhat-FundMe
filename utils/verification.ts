import { run } from "hardhat";

export const verification = async (contractAddress: string, args: any[]) => {
    console.log("Verifying contract on etherscan");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract already verified");
        } else {
            console.log(e.message);
        }
    }
};
