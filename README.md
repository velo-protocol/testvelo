# testvelo

### First, you should run  evrynet-node and deploy velo v2 
```
evrynet-node https://github.com/Evrynetlabs/evrynet-node
velo v2      https://github.com/velo-protocol/DRSv2
```

### How to run
```
cd  testvelo
npm install
npm run start
```
### API List
```
GET /heart/setGovernor
```
用于设置管理员
```
GET /heart/getCollectedFee
```
查看收取的手续费
```
/heart/withdrawFee 
```
提现手续费
```
/heart/setTrustedPartner
```
设置信赖伙伴
```
/feeder/addprice
```
添加feeder
```
/price/post
```
提交价格
```
/price/get
```
获取当前velo价格
```
/token/get
```
获取当前账户的velo数量
```
/drs/setup
```
创建数字信贷
```
/drs/mintFromCollateralAmount
```
发行数字信贷
```
/drs/mintFromStableCreditAmount
```
发行数字信贷
```
/drs/collateralHealthCheck
```
核对数字信贷
```
/drs/getStableCreditAmount
```
获取某数字信贷的总量
```
/drs/redeem?amount=100
```
通过数字信贷赎回velo,amount是数字信贷的数量



