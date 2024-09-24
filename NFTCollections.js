//JavaScript Loops and Functions
//Project: Create a NFT Collection

// create a variable to hold your NFT's
// an array to hold my Tiktok NFTs
const NFTS = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

//  Function to create NFT
function mintNFT (_trendname, _creator, _year, _description) {
    const NFT = { // NFT object with metadata
        "Trend Name": _trendname,
        'Creator': _creator,
        "Year": _year,
        "Description": _description
    }
    NFTS.push(NFT); // Store the NFT in the array and use the .push that is tought in the course
    console.log("Minted: "+ _trendname);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTS.length; i++ ){
        console.log("---------------------------------------");
        console.log("\nID:"+ (i + 1));
        console.log("Trend Name: " + NFTS[i]["Trend Name"]);
        console.log("Creator: " + NFTS[i]["Creator"]);
        console.log("Year: " + NFTS[i]["Year"]);
        console.log("Description: " + NFTS[i]["Description"]);
        console.log("\n---------------------------------------");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() { 
    console.log("\n" + NFTS.length);
}

// call your functions below this line
mintNFT("Savage","Keara Wilson","2020","A Dance Challenge");
mintNFT("Booty Wurk","Niana Guerrero","2021","Hiphop Dance Challenge");
mintNFT("Renegade","Jaliah Harmon","2020","Tiktok Viral Challenge");
mintNFT("M to the B","Bella Porach","2020","Playful phrase expressing excitement");
listNFTs(); // Print all my Tiktok NFTs
getTotalSupply("Total:"); // Print the total Count
