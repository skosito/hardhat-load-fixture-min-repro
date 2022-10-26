
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const fixtures = require("./fixtures");

describe("2", async () => {
  it("1", async () => {
     await loadFixture(
      fixtures.fixture2
    );
  });

  it("2", async () => {
     await loadFixture(
      fixtures.fixture2
    );
  });

  it("3", async () => {
     await loadFixture(
      fixtures.fixture2
    );
  });

  it("4", async () => {
     await loadFixture(
      fixtures.fixture2
    );
  });

  it("5", async () => {
    await loadFixture(
      fixtures.fixture2
    );
  });
});
