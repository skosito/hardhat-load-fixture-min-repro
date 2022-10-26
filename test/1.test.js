const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const fixtures = require("./fixtures");

describe("1.test", function () {
  it("2", async () => {
    await loadFixture(
      fixtures.fixture1
    );
  });
  it("3", async () => {
    await loadFixture(
      fixtures.fixture2
    );
  });
});
