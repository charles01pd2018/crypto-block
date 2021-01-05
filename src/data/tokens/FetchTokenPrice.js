// Using the CoinGecko API

const GetTokenPriceURL = (
  token='bitcoin',
  currency='usd',
  // change variables are referencing last 24 hours
  includeMarketCap=false,
  includeVolumeChange=true,
  includePercentageChange=true
) => {

    const basePriceURL = "https://api.coingecko.com/api/v3/simple/price?";

    const tokenPriceURL = `${basePriceURL}ids=${token}&vs_currencies=${currency}&include_market_cap=${includeMarketCap}&include_24hr_vol=${includeVolumeChange}&include_24hr_change=${includePercentageChange}`;

    return tokenPriceURL;
}

export default GetTokenPriceURL;