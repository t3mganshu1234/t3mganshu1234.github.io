webpackJsonp([13],{ALl4:function(t,e){},Fa3C:function(t,e){},Gat3:function(t,e){t.exports={Compensate:{abi:[{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KDelAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KAddAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KImplementAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"KContractOwners",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"impl",type:"address"}],name:"SetKImplementAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"compensateMapping",outputs:[{name:"total",type:"uint256"},{name:"currentWithdraw",type:"uint256"},{name:"latestWithdrawTime",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"KAuthAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"when",type:"uint256"},{indexed:!1,name:"compensateAmount",type:"uint256"}],name:"Log_CompensateCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"when",type:"uint256"},{indexed:!1,name:"relaseAmount",type:"uint256"}],name:"Log_CompensateRelase",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{constant:!1,inputs:[{name:"owner",type:"address"},{name:"amount",type:"uint256"}],name:"increaseCompensateAmountDelegate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawCompensate",outputs:[{name:"amount",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"}],address:"416fe8008579429024ceedd5982b131c94d0901694"},ERC777_1Token:{abi:[{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KDelAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KAddAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KImplementAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"KContractOwners",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"granularity",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"impl",type:"address"}],name:"SetKImplementAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"KAuthAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"operator",type:"address"},{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"data",type:"bytes"},{indexed:!1,name:"operatorData",type:"bytes"}],name:"Sent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"operator",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"data",type:"bytes"},{indexed:!1,name:"operatorData",type:"bytes"}],name:"Minted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"operator",type:"address"},{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"amount",type:"uint256"},{indexed:!1,name:"data",type:"bytes"},{indexed:!1,name:"operatorData",type:"bytes"}],name:"Burned",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"operator",type:"address"},{indexed:!0,name:"holder",type:"address"}],name:"AuthorizedOperator",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"operator",type:"address"},{indexed:!0,name:"holder",type:"address"}],name:"RevokedOperator",type:"event"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"owner",type:"address"}],name:"addDefaultOperators",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"owner",type:"address"}],name:"removeDefaultOperators",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"defaultOperators",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_operator",type:"address"}],name:"authorizeOperator",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_operator",type:"address"}],name:"revokeOperator",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"},{name:"_userData",type:"bytes"}],name:"send",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_operator",type:"address"},{name:"_tokenHolder",type:"address"}],name:"isOperatorFor",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_amount",type:"uint256"},{name:"_userData",type:"bytes"},{name:"_operatorData",type:"bytes"}],name:"operatorSend",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenHolder",type:"address"},{name:"_amount",type:"uint256"},{name:"_operatorData",type:"bytes"}],name:"mint",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_amount",type:"uint256"},{name:"_data",type:"bytes"}],name:"burn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_amount",type:"uint256"},{name:"_data",type:"bytes"},{name:"_operatorData",type:"bytes"}],name:"operatorBurn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],address:"415bbb115926b912f9e91e5fd57dbf2112d31386ef"},KTimeController:{abi:[{constant:!0,inputs:[],name:"offsetTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],address:"41be499a015dfe69e3b4714e5b7dc561d4e63dc206"},Manager:{abi:[{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KDelAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"goodsMapping",outputs:[{name:"levelNum",type:"uint256"},{name:"price",type:"uint256"},{name:"sentToken",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KAddAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KImplementAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"KContractOwners",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"purchasedMapping",outputs:[{name:"levelNum",type:"uint256"},{name:"price",type:"uint256"},{name:"sentToken",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"impl",type:"address"}],name:"SetKImplementAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"dlevelAwarProp",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"dlvDepthMaxLimit",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"stockInfoMapping",outputs:[{name:"sold",type:"uint256"},{name:"total",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"KAuthAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{constant:!0,inputs:[],name:"stockInfoList",outputs:[{name:"stock",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"inc",type:"address"}],name:"setOrderManagerInc",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"upgradeDLevel",outputs:[{name:"origin",type:"uint256"},{name:"current",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"targetLevel",type:"uint256"}],name:"paymentDLevel",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"paymentSuperNode",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"giftList",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"giftLevel",type:"uint256"},{name:"to",type:"address"}],name:"useGiftDLevel",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"lv",type:"uint256"},{name:"price",type:"uint256"},{name:"sentToken",type:"uint256"},{name:"stockTotal",type:"uint256"},{name:"giftCounts",type:"uint256[]"}],name:"setGoodsMappingPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"dl",type:"uint256"},{name:"p",type:"uint256"}],name:"setDLevelAwardProp",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"depth",type:"uint256"}],name:"setDLevelSearchDepth",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"value",type:"uint256"}],name:"calculationAwards",outputs:[{name:"addresses",type:"address[]"},{name:"awards",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"}],address:"41ab0ce6a56a65746baf3298fae25a1bdd544534da"},Noder:{abi:[{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KDelAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KAddAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KImplementAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"KContractOwners",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"noderAddresses",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"impl",type:"address"}],name:"SetKImplementAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"totalReward",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"latestBonusTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"KAuthAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"time",type:"uint256"},{indexed:!1,name:"amount",type:"uint256"}],name:"Log_Bounds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"isNoder",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"doBounds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"owner",type:"address"}],name:"paymentedSuperNodeDelegate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],address:"41c759a8a97e6134eba155f3d62a3c93402f95fc6a"},OrderManager:{abi:[{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KDelAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"resolveBreaker",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"orderId",type:"uint256"}],name:"orderWithdraw",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"inc",type:"address"}],name:"setManagerInterface",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"orderState",type:"uint256"},{name:"offset",type:"uint256"},{name:"size",type:"uint256"}],name:"selectOrders",outputs:[{name:"total",type:"uint256"},{name:"len",type:"uint256"},{name:"orderIds",type:"uint256[]"},{name:"totalAmounts",type:"uint256[]"},{name:"states",type:"uint8[]"},{name:"times",type:"uint96[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"deadlineTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"offset",type:"uint256"},{name:"size",type:"uint256"}],name:"selectAwardHistory",outputs:[{name:"total",type:"uint256"},{name:"tags",type:"uint256[]"},{name:"times",type:"uint256[]"},{name:"profixs",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"exchangeRateUSDToMC",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KAddAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KImplementAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"orderIndexMapping",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"KContractOwners",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"id",type:"uint256"}],name:"orderTimes",outputs:[{name:"OnCreated",type:"uint256"},{name:"OnPaymentFrist",type:"uint256"},{name:"OnPaymentSuccess",type:"uint256"},{name:"OnProfitingBegin",type:"uint256"},{name:"OnCountDownStart",type:"uint256"},{name:"OnCountDownEnd",type:"uint256"},{name:"OnConvertConsumer",type:"uint256"},{name:"OnUnfreezing",type:"uint256"},{name:"OnDone",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"orderId",type:"uint256"},{name:"amount",type:"uint256"}],name:"orderPayment",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"queueTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"isBreaker",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"withdrawAward",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"settlementCompensate",outputs:[{name:"comAmount",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"death",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"total",type:"uint256"},{name:"amount",type:"uint256"}],name:"createOrder",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"impl",type:"address"}],name:"SetKImplementAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"PIN",type:"string"}],name:"totalBalance",outputs:[{name:"poolCount",type:"uint256"},{name:"total",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"isValid",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"distributeAwards",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"investQueue",outputs:[{name:"owner",type:"address"},{name:"amount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"depositedLimitMapping",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"depositTimeInterval",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"orders",outputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"},{name:"total",type:"uint256"},{name:"paymented",type:"uint256"},{name:"profix",type:"uint256"},{name:"state",type:"uint8"},{name:"consumed",type:"bool"},{name:"getHelped",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"selectOrderIds",outputs:[{name:"",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"userInfoMapping",outputs:[{name:"totalIn",type:"uint256"},{name:"totalOut",type:"uint256"},{name:"awardQuota",type:"uint256"},{name:"awardWithdrawableTotal",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"validCountOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isInCountdowning",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"withdrawableTotal",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdrawLuckAward",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"isLuckDog",outputs:[{name:"isluckDog",type:"bool"},{name:"award",type:"uint256"},{name:"canwithdrawable",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"costProp",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"KAuthAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"orderId",type:"uint256"}],name:"orderSettlement",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"depositedUSDMaxLimit",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"conditionLevelOneFinished",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"who",type:"address"},{indexed:!0,name:"awardsTotal",type:"uint256"},{indexed:!1,name:"seqNo",type:"uint256"}],name:"Log_Luckdog",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{constant:!1,inputs:[{name:"timeSec",type:"uint256"}],name:"setQueueTime",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"limit",type:"uint256"}],name:"setDepositedUSDMaxLimitEverDay",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"p",type:"uint256"}],name:"setExchangeRateUSDToMC",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"p",type:"uint256"}],name:"setCoatProp",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"interval",type:"uint256"}],name:"setDepositTimeInterval",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],address:"41d9d272fe8c23c6c486a91b370230e4d1a27a67ce"},Pool:{abi:[{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KDelAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KAddAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KImplementAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"KContractOwners",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"impl",type:"address"}],name:"SetKImplementAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"availTotalAmouns",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"KAuthAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"operators",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{constant:!0,inputs:[{name:"operator",type:"address"}],name:"poolNameFromOperator",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"operator",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"amount",type:"uint256"}],name:"operatorSend",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"uint8"},{name:"amountQuota",type:"uint256"}],name:"recipientQuotaDelegate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"operator",type:"address"},{name:"poolName",type:"uint8"}],name:"setOperator",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],address:"41cadd78fe71c5ca3bc1f75fdee7ed6ed528e2d1ec"},Relations:{abi:[{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KDelAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KAddAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KImplementAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"KContractOwners",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"Unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"impl",type:"address"}],name:"SetKImplementAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"rootAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalAddresses",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"KAuthAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"levelOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"maxLimit",type:"uint256"}],name:"levelDistribution",outputs:[{name:"distribution",type:"uint256[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"getIntroducer",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"depth",type:"uint256"},{name:"endLevel",type:"uint256"}],name:"getForefathers2",outputs:[{name:"seq",type:"uint256[]"},{name:"fathers",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"depth",type:"uint256"}],name:"getForefathers",outputs:[{name:"",type:"address[]"},{name:"",type:"uint8[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"recommendList",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"shortCode",type:"bytes6"}],name:"shortCodeToAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"addressToShortCode",outputs:[{name:"",type:"bytes6"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"addressToNickName",outputs:[{name:"",type:"bytes16"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"depth",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"shortCode",type:"bytes6"}],name:"registerShortCode",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"name",type:"bytes16"}],name:"updateNickName",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"recommer",type:"address"},{name:"shortCode",type:"bytes6"},{name:"nickname",type:"bytes16"}],name:"addRelationEx",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"owner",type:"address"},{name:"lv",type:"uint8"}],name:"upgradeLevelDelegate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],address:"4152e0bdb3f025ae0fde5985fa538c6c3901bfcecb"},Swap:{abi:[{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KDelAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"vaildAddressQuota",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"auther",type:"address"}],name:"KAddAuthAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KImplementAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"swapedTotalSum",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"KContractOwners",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"swapInfo",outputs:[{name:"roundID",type:"uint256"},{name:"total",type:"uint256"},{name:"current",type:"uint256"},{name:"prop",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"quotaMapping",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"Unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"nomalAddressQuota",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"impl",type:"address"}],name:"SetKImplementAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"KAuthAddresses",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"when",type:"uint256"},{indexed:!1,name:"who",type:"address"},{indexed:!1,name:"total",type:"uint256"},{indexed:!1,name:"prop",type:"uint256"}],name:"Log_UpdateSwapInfo",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"time",type:"uint256"},{indexed:!1,name:"inAmount",type:"uint256"},{indexed:!1,name:"outAmount",type:"uint256"}],name:"Log_Swaped",type:"event"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"exchangeLimit",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"doswaping",outputs:[{name:"tokenAmount",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"total",type:"uint256"},{name:"prop",type:"uint256"}],name:"updateSwapInfo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"nomal",type:"uint256"},{name:"vaild",type:"uint256"}],name:"setChangeQuota",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],address:"41306e5e77087b444aabfdd930e6b9eaab1e4b0930"}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),p=n("//Fk"),s=n.n(p),u={name:"App",data:function(){return{loading:!1}},created:function(){var t=this;"DT"!==sessionStorage.getItem("password")&&this.$router.push("/login"),a.default.prototype.$loading=function(e){return t.loading=!0,new s.a(function(n){var a=setInterval(function(){window.tronWeb.trx.getTransaction(e).then(function(e){e.ret&&e.ret[0].contractRet&&("SUCCESS"===e.ret[0].contractRet?n(!0):n(!1),t.loading=!1,clearInterval(a))})},2e3)})}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"},[e("el-icon",{staticClass:"el-icon-loading"}),this._v(" "),e("span",[this._v("交易中...")])],1)],1)},staticRenderFns:[]};var o=n("VU/8")(u,i,!1,function(t){n("ALl4"),n("Fa3C")},"data-v-9c34aa6c",null).exports,y=n("/ocq");a.default.use(y.a);var d=new y.a({routes:[{path:"/login",name:"login",component:function(){return n.e(1).then(n.bind(null,"K31e"))}},{path:"/",name:"menu",component:function(){return n.e(0).then(n.bind(null,"zIkb"))},children:[{path:"/",name:"setDepositedUSDMaxLimitEverDay",component:function(){return n.e(6).then(n.bind(null,"/pdn"))}},{path:"/setExchangeRateUSDToMC",name:"setExchangeRateUSDToMC",component:function(){return n.e(5).then(n.bind(null,"gAJg"))}},{path:"/setCoatProp",name:"setCoatProp",component:function(){return n.e(10).then(n.bind(null,"QuhE"))}},{path:"/setDepositTimeInterval",name:"setDepositTimeInterval",component:function(){return n.e(7).then(n.bind(null,"nC0u"))}},{path:"/setQueueTime",name:"setQueueTime",component:function(){return n.e(3).then(n.bind(null,"xc2+"))}},{path:"/setDLevelAwardProp",name:"setDLevelAwardProp",component:function(){return n.e(9).then(n.bind(null,"kb3Z"))}},{path:"/setDLevelSearchDepth",name:"setDLevelSearchDepth",component:function(){return n.e(8).then(n.bind(null,"Tep/"))}},{path:"/setGoodsMappingPrice",name:"setGoodsMappingPrice",component:function(){return n.e(4).then(n.bind(null,"Njm4"))}},{path:"/updateSwapInfo",name:"updateSwapInfo",component:function(){return n.e(2).then(n.bind(null,"g44J"))}},{path:"/setChangeQuota",name:"setChangeQuota",component:function(){return n.e(11).then(n.bind(null,"eNS/"))}}]}]}),m=n("zL8q"),l=n.n(m),r=(n("tvR6"),n("Gat3")),b=n.n(r);function c(){return window.tronWeb.toBigNumber(this).multipliedBy(1e12).toString()}function f(){return window.tronWeb.toSun(this)}a.default.config.productionTip=!1,a.default.use(l.a),a.default.prototype.$contract=window.tronWeb.contract(b.a.OrderManager.abi,b.a.OrderManager.address),a.default.prototype.$Manager=window.tronWeb.contract(b.a.Manager.abi,b.a.Manager.address),a.default.prototype.$Swap=window.tronWeb.contract(b.a.Swap.abi,b.a.Swap.address),Number.prototype.toSun=f,Number.prototype.toSzabo=c,String.prototype.toSun=f,String.prototype.fromSun=function(){return window.tronWeb.fromSun(this)},String.prototype.toSzabo=c,String.prototype.fromSzabo=function(){return window.tronWeb.toBigNumber(this).div(1e12).toString()},new a.default({el:"#app",router:d,components:{App:o},template:"<App/>"})},tvR6:function(t,e){}},["NHnr"]);