const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const fixtures = require("./fixtures");

describe("3.test", function () {
  it("1", async () => {
    await loadFixture(
      fixtures.fixture1
    );
  });

  it("4", async () => {
    await loadFixture(
      fixtures.fixture2
    );
  });
});
