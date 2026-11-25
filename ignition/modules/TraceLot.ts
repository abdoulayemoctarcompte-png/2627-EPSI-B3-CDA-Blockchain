import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TraceLotModule", (m) => {
  const traceLot = m.contract("TraceLot");

  return { traceLot };
});
