
var Web3=require("web3")
var express=require("express")
var app = express()
var fs=require("fs")
var server=require("http").createServer(app)
var net=require("net")
var keythereum = require("keythereum");
var keystore = require('./0x8714d1ab13d0243ade8d7804fec611e1c0b32db5.json');;
var keystore2 = require('./0xa6c3fa2b65e57cff91418fe349d470808f9ee23f.json');;


var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    //http://127.0.0.1:22001
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:22001"));
}
var accounts = web3.eth.accounts;
var account = accounts.decrypt(keystore, "123456");
// create express middleware
app.get("/",function(req, res) {
    var data = '<h1>hello world</h1>';

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);

});

app.get("/seepri",function(req, res) {
    var address= "0xa6c3fa2b65e57cff91418fe349d470808f9ee23f";//要小写
    const password = "123456";
    var keyObject = keythereum.importFromFile(address, datadir);
    var privateKey = keythereum.recover(password, keyObject);
  res.send(privateKey.toString('hex'))

});
//
app.get("/newaccount",function(req, res) {

   // web3.eth.personal.newAccount("123456").then(function (address) {
   //     res.send(address)
   // })


     res.send(web3.eth.accounts.create("123456"))

});
//test heart
app.get("/heart/setGovernor",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");

    var abi =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralAssets","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drsAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"governor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"prices","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"reserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stableCredits","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stableCreditsLL","outputs":[{"internalType":"uint8","name":"llSize","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPartners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newReserveManager","type":"address"}],"name":"setReserveManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint32","name":"newSeconds","type":"uint32"}],"name":"setReserveFreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getReserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newDrsAddress","type":"address"}],"name":"setDrsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDrsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralAsset","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setCreditIssuanceFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCreditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setTrustedPartner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setGovernor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isTrustedPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"contract IPrice","name":"newPrice","type":"address"}],"name":"addPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"getPriceContract","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"collectFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"getCollectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStableCredit","name":"newStableCredit","type":"address"}],"name":"addStableCredit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getStableCreditById","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecentStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getNextStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStableCreditCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"setAllowedLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"isLinkAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0x2A3cCc5928F1C286F696b8E4199cf64A4331d1A5";
    // 通过ABI和地址获取已部署的合约对象
    const contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    const method =  contract.methods.setGovernor("0xa6c3fa2b65e57cff91418fe349d470808f9ee23f");
    contractExecute(web3, account, contract, method)
        .then( (r)=>{
            console.log('success', r);
            // 发送响应数据
            contract.methods.isGovernor("0xa6c3fa2b65e57cff91418fe349d470808f9ee23f").call().then(function (result) {
                // 发送响应数据
                res.send(result);

            });

        })
        .catch( (e)=>{
            console.log('error', e);

        })



});
//
app.get("/heart/getCollectedFee",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");
    var abi =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralAssets","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drsAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"governor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"prices","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"reserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stableCredits","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stableCreditsLL","outputs":[{"internalType":"uint8","name":"llSize","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPartners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newReserveManager","type":"address"}],"name":"setReserveManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint32","name":"newSeconds","type":"uint32"}],"name":"setReserveFreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getReserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newDrsAddress","type":"address"}],"name":"setDrsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDrsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralAsset","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setCreditIssuanceFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCreditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setTrustedPartner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setGovernor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isTrustedPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"contract IPrice","name":"newPrice","type":"address"}],"name":"addPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"getPriceContract","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"collectFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"getCollectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStableCredit","name":"newStableCredit","type":"address"}],"name":"addStableCredit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getStableCreditById","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecentStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getNextStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStableCreditCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"setAllowedLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"isLinkAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0x2A3cCc5928F1C286F696b8E4199cf64A4331d1A5";
    // 通过ABI和地址获取已部署的合约对象
    const contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
  contract.methods.getCollectedFee(Web3.utils.fromAscii("VELO")).call().then(function (result) {
            // 发送响应数据
            res.send(result);

        });
});
//
app.get("/heart/withdrawFee",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");
    var abi =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralAssets","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drsAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"governor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"prices","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"reserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stableCredits","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stableCreditsLL","outputs":[{"internalType":"uint8","name":"llSize","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPartners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newReserveManager","type":"address"}],"name":"setReserveManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint32","name":"newSeconds","type":"uint32"}],"name":"setReserveFreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getReserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newDrsAddress","type":"address"}],"name":"setDrsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDrsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralAsset","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setCreditIssuanceFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCreditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setTrustedPartner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setGovernor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isTrustedPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"contract IPrice","name":"newPrice","type":"address"}],"name":"addPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"getPriceContract","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"collectFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"getCollectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStableCredit","name":"newStableCredit","type":"address"}],"name":"addStableCredit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getStableCreditById","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecentStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getNextStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStableCreditCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"setAllowedLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"isLinkAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0x2A3cCc5928F1C286F696b8E4199cf64A4331d1A5";
    // 通过ABI和地址获取已部署的合约对象
    const contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
   var method= contract.methods.withdrawFee(Web3.utils.fromAscii("VELO"),10)
    contractExecute(web3, account, contract, method)
        .then( (r)=>{
            console.log('success', r);
        })
        .catch( (e)=>{
            console.log('error', e);

        })



});
//
app.get("/heart/setTrustedPartner",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");

    var abi =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralAssets","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralRatios","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"drsAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"governor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"prices","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"reserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stableCredits","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stableCreditsLL","outputs":[{"internalType":"uint8","name":"llSize","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedPartners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newReserveManager","type":"address"}],"name":"setReserveManager","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getReserveManager","outputs":[{"internalType":"contract IRM","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint32","name":"newSeconds","type":"uint32"}],"name":"setReserveFreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getReserveFreeze","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newDrsAddress","type":"address"}],"name":"setDrsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDrsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralAsset","outputs":[{"internalType":"contract ICollateralAsset","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"},{"internalType":"uint256","name":"ratio","type":"uint256"}],"name":"setCollateralRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"assetCode","type":"bytes32"}],"name":"getCollateralRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setCreditIssuanceFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCreditIssuanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setTrustedPartner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setGovernor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isTrustedPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"contract IPrice","name":"newPrice","type":"address"}],"name":"addPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"getPriceContract","outputs":[{"internalType":"contract IPrice","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"collectFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"}],"name":"getCollectedFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IStableCredit","name":"newStableCredit","type":"address"}],"name":"addStableCredit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getStableCreditById","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecentStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"stableCreditId","type":"bytes32"}],"name":"getNextStableCredit","outputs":[{"internalType":"contract IStableCredit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStableCreditCount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"},{"internalType":"bool","name":"enable","type":"bool"}],"name":"setAllowedLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"linkId","type":"bytes32"}],"name":"isLinkAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0x2A3cCc5928F1C286F696b8E4199cf64A4331d1A5";
    // 通过ABI和地址获取已部署的合约对象
    const contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    const method =  contract.methods.setTrustedPartner("0xa6c3fa2b65e57cff91418fe349d470808f9ee23f");
    contractExecute(web3, account, contract, method)
        .then( (r)=>{
            console.log('success', r);
            // 发送响应数据
            contract.methods.isTrustedPartner("0xa6c3fa2b65e57cff91418fe349d470808f9ee23f").call().then(function (result) {
                // 发送响应数据
                res.send(result);

            });

        })
        .catch( (e)=>{
            console.log('error', e);

        })



});
//get eth
app.get("/geteth",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");
    sendEth(web3, account, '0xa6c3fa2b65e57cff91418fe349d470808f9ee23f', '100000000000')
        .then((r)=>{
            console.log(r);
          res.send("ok")
        })
        .catch (e=>{
            console.error(e);
            res.send("err")

        })



});
//get price
app.get("/feeder/addprice",function(req, res) {

    var abi =[{"inputs":[{"internalType":"address","name":"pf1","type":"address"},{"internalType":"address","name":"pf2","type":"address"},{"internalType":"address","name":"pf3","type":"address"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"bytes32","name":"_fiatCode","type":"bytes32"},{"internalType":"bytes32","name":"_collateralCode","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"priceInWei","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"timeInSecond","type":"uint256"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"AcceptPrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"priceInWei","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"timeInSecond","type":"uint256"},{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"CommitPrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"oldValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"SetValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"updater","type":"address"},{"indexed":false,"internalType":"address","name":"newPriceFeed","type":"address"}],"name":"UpdatePriceFeed","type":"event"},{"constant":true,"inputs":[],"name":"active","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collateralCode","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fiatCode","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"firstPrice","outputs":[{"internalType":"uint256","name":"priceInWei","type":"uint256"},{"internalType":"uint256","name":"timeInSecond","type":"uint256"},{"internalType":"address","name":"source","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastOperationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastPrice","outputs":[{"internalType":"uint256","name":"priceInWei","type":"uint256"},{"internalType":"uint256","name":"timeInSecond","type":"uint256"},{"internalType":"address","name":"source","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numOfPrices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"operationCoolDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priceFeed1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priceFeed2","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priceFeed3","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priceFeedTimeTol","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priceFeedTolInBP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priceTolInBP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priceUpdateCoolDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"secondPrice","outputs":[{"internalType":"uint256","name":"priceInWei","type":"uint256"},{"internalType":"uint256","name":"timeInSecond","type":"uint256"},{"internalType":"address","name":"source","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"started","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"valueTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"priceInWei","type":"uint256"}],"name":"startOracle","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"priceInWei","type":"uint256"}],"name":"commitPrice","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getLastPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"feeder","type":"address"}],"name":"updatePriceFeed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"setValue","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
    // 合约地址
    var address = "0x2E3595A00F68d86c30468F078871c2F8F36C7E06";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    var method=contract.methods.startOracle(
       2000000
    )
    contractExecute2(web3, account, contract, method)
        .then( (r)=>{
            res.send("ok")

        })
        .catch( (e)=>{
            console.log('error', e);
        })

});
//post price
app.get("/price/post",function(req, res) {

    var abi =[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"address","name":"price","type":"address"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"PriceActivate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"address","name":"price","type":"address"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"PriceVoid","type":"event"},{"constant":true,"inputs":[],"name":"active","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feederAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lagAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_feederAddr","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"post","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getWithError","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"void","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
    // 合约地址
    var address = "0x809846725039bF680FbFA39dFA2831144f53c341";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    var method=contract.methods.post()
    contractExecute2(web3, account, contract, method)
        .then( (r)=>{
            res.send("ok")

        })
        .catch( (e)=>{
            console.log('error', e);
        })

});
//
app.get("/price/get",function(req, res) {

    var abi =[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"address","name":"price","type":"address"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"PriceActivate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":false,"internalType":"address","name":"price","type":"address"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"PriceVoid","type":"event"},{"constant":true,"inputs":[],"name":"active","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feederAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lagAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_feederAddr","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"post","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getWithError","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"void","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
    // 合约地址
    var address = "0x809846725039bF680FbFA39dFA2831144f53c341";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    var method=contract.methods.get().call().then(function (result) {
        // 发送响应数据
        res.send(result);

    });


});
//
app.get("/token/get",function(req, res) {

    var abi =[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_code","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"WhitelistAdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"WhitelistAdminRemoved","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addWhitelistAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isWhitelistAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceWhitelistAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
    var address = "0x63EF3c827fF8b461392d00A582619db6fe8B130c";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    var method=contract.methods.balanceOf("0x8714d1ab13d0243ade8d7804fec611e1c0b32db5").call().then(function (result) {
        // 发送响应数据
        res.send(result);

    });


});
//test drs
app.get("/drs/setup",function(req, res) {
    var abi =[{"inputs":[{"internalType":"address","name":"heartAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"assetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"requiredAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"presentAmount","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"collateralAssetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"peggedValue","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"assetAddress","type":"address"}],"name":"Setup","type":"event"},{"constant":true,"inputs":[],"name":"heart","outputs":[{"internalType":"contract IHeart","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"internalType":"string","name":"assetCode","type":"string"},{"internalType":"uint256","name":"peggedValue","type":"uint256"}],"name":"setup","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"netCollateralAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromCollateralAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromStableCreditAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"redeem","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"rebalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getExchange","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"collateralHealthCheck","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getStableCreditAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0xA87e4F25C3fe0903a3C4981ca06a49c796e76E09";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    var method=contract.methods.setup(
        Web3.utils.fromAscii("VELO"),
        Web3.utils.fromAscii("USD"),
        "vUSD",
        10
    )
    contractExecute2(web3, account, contract, method)
        .then( (r)=>{

            res.send("ok")
        })
        .catch( (e)=>{
            console.log('error', e);
        })




});
//mint
app.get("/drs/mintFromCollateralAmount",function(req, res) {
    var abi =[{"inputs":[{"internalType":"address","name":"heartAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"assetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"requiredAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"presentAmount","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"collateralAssetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"peggedValue","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"assetAddress","type":"address"}],"name":"Setup","type":"event"},{"constant":true,"inputs":[],"name":"heart","outputs":[{"internalType":"contract IHeart","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"internalType":"string","name":"assetCode","type":"string"},{"internalType":"uint256","name":"peggedValue","type":"uint256"}],"name":"setup","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"netCollateralAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromCollateralAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromStableCreditAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"redeem","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"rebalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getExchange","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"collateralHealthCheck","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getStableCreditAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0xA87e4F25C3fe0903a3C4981ca06a49c796e76E09";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })


   var method= contract.methods.mintFromCollateralAmount(
        100,
        "vUSD"
    );
    contractExecute2(web3, account, contract, method)
        .then( (r)=>{
            res.send("ok")

        })
        .catch( (e)=>{
            console.log('error', e);
        })




});
//mint
app.get("/drs/mintFromStableCreditAmount",function(req, res) {
    var abi =[{"inputs":[{"internalType":"address","name":"heartAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"assetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"requiredAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"presentAmount","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"collateralAssetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"peggedValue","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"assetAddress","type":"address"}],"name":"Setup","type":"event"},{"constant":true,"inputs":[],"name":"heart","outputs":[{"internalType":"contract IHeart","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"internalType":"string","name":"assetCode","type":"string"},{"internalType":"uint256","name":"peggedValue","type":"uint256"}],"name":"setup","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"netCollateralAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromCollateralAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromStableCreditAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"redeem","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"rebalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getExchange","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"collateralHealthCheck","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getStableCreditAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0xA87e4F25C3fe0903a3C4981ca06a49c796e76E09";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })

    var method= contract.methods.mintFromStableCreditAmount(
        1000,   "vUSD"
    );

    contractExecute2(web3, account, contract, method)
        .then( (r)=>{
            res.send("ok")

        })
        .catch( (e)=>{
            console.log('error', e);
        })



});
//check
app.get("/drs/collateralHealthCheck",function(req, res) {
    var abi =[{"inputs":[{"internalType":"address","name":"heartAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"assetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"requiredAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"presentAmount","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"collateralAssetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"peggedValue","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"assetAddress","type":"address"}],"name":"Setup","type":"event"},{"constant":true,"inputs":[],"name":"heart","outputs":[{"internalType":"contract IHeart","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"internalType":"string","name":"assetCode","type":"string"},{"internalType":"uint256","name":"peggedValue","type":"uint256"}],"name":"setup","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"netCollateralAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromCollateralAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromStableCreditAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"redeem","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"rebalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getExchange","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"collateralHealthCheck","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getStableCreditAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0xA87e4F25C3fe0903a3C4981ca06a49c796e76E09";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })

    contract.methods.collateralHealthCheck(
        "vUSD"
    ).call().then(function (result) {
        // 发送响应数据
        res.send(result);

    });



});
//mint amount
app.get("/drs/getStableCreditAmount",function(req, res) {
    var abi =[{"inputs":[{"internalType":"address","name":"heartAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"assetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"requiredAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"presentAmount","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"collateralAssetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"peggedValue","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"assetAddress","type":"address"}],"name":"Setup","type":"event"},{"constant":true,"inputs":[],"name":"heart","outputs":[{"internalType":"contract IHeart","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"internalType":"string","name":"assetCode","type":"string"},{"internalType":"uint256","name":"peggedValue","type":"uint256"}],"name":"setup","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"netCollateralAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromCollateralAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromStableCreditAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"redeem","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"rebalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getExchange","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"collateralHealthCheck","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getStableCreditAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0xA87e4F25C3fe0903a3C4981ca06a49c796e76E09";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })


   contract.methods.getStableCreditAmount(
        "vUSD"
    ).call().then(function (result) {
       // 发送响应数据
       res.send(result);

   });





});
//redeem
app.get("/drs/redeem",function(req, res) {
    var accounts = web3.eth.accounts;
    var account = accounts.decrypt(keystore, "123456");
    var amount=req.query.amount

    var abi =[{"inputs":[{"internalType":"address","name":"heartAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"assetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"requiredAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"presentAmount","type":"uint256"}],"name":"Rebalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"indexed":true,"internalType":"address","name":"collateralAssetAddress","type":"address"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"assetCode","type":"string"},{"indexed":false,"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"peggedValue","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"indexed":false,"internalType":"address","name":"assetAddress","type":"address"}],"name":"Setup","type":"event"},{"constant":true,"inputs":[],"name":"heart","outputs":[{"internalType":"contract IHeart","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"collateralAssetCode","type":"bytes32"},{"internalType":"bytes32","name":"peggedCurrency","type":"bytes32"},{"internalType":"string","name":"assetCode","type":"string"},{"internalType":"uint256","name":"peggedValue","type":"uint256"}],"name":"setup","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"netCollateralAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromCollateralAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"mintAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"mintFromStableCreditAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"stableCreditAmount","type":"uint256"},{"internalType":"string","name":"assetCode","type":"string"}],"name":"redeem","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"rebalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getExchange","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"collateralHealthCheck","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"assetCode","type":"string"}],"name":"getStableCreditAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    // 合约地址
    var address = "0xA87e4F25C3fe0903a3C4981ca06a49c796e76E09";
    // 通过ABI和地址获取已部署的合约对象
    var contract =new web3.eth.Contract(abi,address,{
        from:account.address
    })
    //调用智能合约方法
    var method=  contract.methods.redeem(
        amount, "vUSD"
    );
    contractExecute2(web3, account, contract, method)
        .then( (r)=>{
            res.send("ok")

        })
        .catch( (e)=>{
            console.log('error', e);
        })




});


function sendEth(web3, fromAccount, toAddress, eth_amount) {

    var rawTx = {
        to: toAddress,
        from: fromAccount.address,
        nonce: '0x00',
        value: web3.utils.toWei(eth_amount),
        gasPrice: '0x09184e72a000',
        gasLimit: '0xa410', //
    }


    return Promise.all([
        web3.eth.getGasPrice(),
        web3.eth.getTransactionCount(rawTx.from)
    ]).then((results) => {
        var price = results[0];
        var count = results[1];
        // var tx = new Tx(rawTx);

        rawTx.gasPrice = price;
        rawTx.nonce = count;
        console.log('gasPrice', price);
        return fromAccount.signTransaction(rawTx)



    }).then((tx) => {
        return web3.eth.sendSignedTransaction(tx.rawTransaction)
    })
}


function contractExecute(web3, account, contract, method) {


    var rawTx = {
        to: contract.options.address,
        from: account.address,
        nonce: '0x00',
        value: '0x',
        gasPrice: '0x5',
        gasLimit: '8000000000', //
        data: method.encodeABI()
    }

    return Promise.all([
        web3.eth.getGasPrice(),
        web3.eth.getTransactionCount(rawTx.from),
        method.estimateGas()
    ]).then((results) => {
        var price = results[0];
        var count = results[1];
        // var tx = new Tx(rawTx);
        rawTx.gasLimit = results[2] * 2;
        rawTx.gasPrice = price;
        rawTx.nonce = count;
        console.log('gasPrice', price);
        console.log('gasLimit', rawTx.gasLimit);
        return account.signTransaction(rawTx)



    }).then((tx) => {
        console.log(tx);
        return web3.eth.sendSignedTransaction(tx.rawTransaction)
    })
}

function contractExecute2(web3, account, contract, method) {


    var rawTx = {
        to: contract.options.address,
        from: account.address,
        nonce: '0x0',
        value: '0x',
        gasPrice: '0x5',
        gasLimit: '8000000000000', //
        data: method.encodeABI()
    }

    return Promise.all([
        web3.eth.getGasPrice(),
        web3.eth.getTransactionCount(rawTx.from),
        method.estimateGas()
    ]).then((results) => {
        var price = results[0];
        var count = results[1];
        // var tx = new Tx(rawTx);
        rawTx.gasLimit = results[2] * 2;
        rawTx.gasPrice = price;
        rawTx.nonce = count;
        console.log('gasPrice', price);
        console.log('gasLimit', rawTx.gasLimit);
        return account.signTransaction(rawTx)

    }).then((tx) => {
        console.log(tx);
        return web3.eth.sendSignedTransaction(tx.rawTransaction)
    })
}


server.listen(8080);

