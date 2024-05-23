// Variable to hold your NFTs
let nfts = [];

// Function to mint a new NFT
function mintNFT(name, description, owner) {
    let nft = {
        name: name,
        description: description,
        owner: owner
    };
    nfts.push(nft);
}

// Function to list all NFTs
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Description: " + nfts[i].description);
        console.log("Owner: " + nfts[i].owner);
        console.log('-----------------------');
    }
}

// Function to get the total supply of NFTs
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line

// Minting some NFTs
mintNFT('NFT 1', 'This is the first NFT', 'Alice');
mintNFT('NFT 2', 'This is the second NFT', 'Bob');
mintNFT('NFT 3', 'This is the third NFT', 'Charlie');

// Listing all NFTs
listNFTs();

// Getting the total supply of NFTs
console.log("Total NFTs minted: " + getTotalSupply());
