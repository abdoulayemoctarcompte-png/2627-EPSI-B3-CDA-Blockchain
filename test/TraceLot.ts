import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("TraceLot", function () {
  it("se déploie et reçoit une adresse", async function () {
    const traceLot = await ethers.deployContract("TraceLot");

    expect(await traceLot.getAddress()).to.be.properAddress;
  });

  // À compléter : au moins un test par fonction et par cas de refus (ENF-05).
});
