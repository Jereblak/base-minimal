async function main() {
  const Contract = await ethers.getContractFactory("BaseHello");
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log("BaseHello deployed to:", contract.address);
}
main().catch((err) => { console.error(err); process.exit(1); });
