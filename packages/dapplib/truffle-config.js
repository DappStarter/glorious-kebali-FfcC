require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember hole give arena bottom gate'; 
let testAccounts = [
"0xc3bee65b2deb0a4aab4c54211ae0594f7f23cc12bffbaaf43c1afa03246a98e0",
"0x067c4a433eb67f4e74cb3b8d6620d78c228fb07923f3ccebcf9b0cec8d84909a",
"0x85de3a9a50aba9bc03cc3a949f36a077a29d6529628588fc7fea33adc3d26b34",
"0xaf952aab7816d8fd9dab949748e01e5b59574aca6a8156b7aa576f621802c787",
"0x2599acc3e7eb7c944dec1eee04251ea70799b9c2d6adf298957338af21a7926c",
"0xa8aae732c492f547da886a8710a810b5bde1eb7c9f849f82252d6d5b0987bbeb",
"0x1f78bd3aacfa5cb96c347c866122ceccf7e9499c2d9b2911266138f46957741e",
"0xb5cd9c5e9e3df1adba3a7851c18cd976e9fb0ee4ca31395dce3e56e5c684b174",
"0xee98a89575c41da2b60473638f97a0519b72cd3935ba1ff4d5412279c0be43ca",
"0xe81ecd82500769f9a32d768bad017fd547a1952278fde411fabc157dfcda2d22"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


