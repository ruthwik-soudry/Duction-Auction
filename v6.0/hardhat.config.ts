import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades"

const config: HardhatUserConfig = {
  solidity: "0.8.18",
};

export default config;
