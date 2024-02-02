let btc=document.getElementById("bitcoin");
let eth=document.getElementById("ethereum");
let doge=document.getElementById("dogecoin");

async function fetchData() {
    let settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr", settings);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        btc.innerHTML=data.bitcoin.inr
        eth.innerHTML=data.ethereum.inr;
        doge.innerHTML=data.dogecoin.inr;

    } catch (error) {
        console.error("Error:", error);
    }
}
fetchData();
