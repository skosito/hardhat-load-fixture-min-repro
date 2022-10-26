const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const fixtures = require("./fixtures");

describe("3", function () {
  it("1", async () => {
    await loadFixture(
      fixtures.fixture1
    );
  });

  it("2", async () => {
    await loadFixture(
      fixtures.fixture3
    );
  });

  it("3", async () => {
    await loadFixture(
      fixtures.fixture3
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

  it("6", async () => {
    await loadFixture(
      fixtures.fixture2
    );
  });

  it("7", async () => {
    await loadFixture(
      fixtures.fixture2
    );
  });
});
