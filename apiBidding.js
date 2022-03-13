import { getAction, postAction} from '@/api/manage'

/**
|--------------------------------------------------
| 采购竞价头
|--------------------------------------------------
*/

// 竞价大厅头行信息查询
const apiQueryBidLobbyDetail = (params) => getAction('/ebidding/purchaseEbiddingHead/queryBidLobbyDetail', params)

// 竞价大厅报价信息查询
const apiQueryBidLobbyQuote = (params) => getAction('/ebidding/purchaseEbiddingHead/queryBidLobbyQuote', params)

// 手动开启竞价
const apiManualStartBid = (params) => postAction('/ebidding/purchaseEbiddingHead/manualStartBid', params)

// 手动结束竞价
const apiManualEndBid = (params) => postAction('/ebidding/purchaseEbiddingHead/manualEndBid', params)

// 竞价大厅头行信息查询-供应方
const apiSaleQueryBidLobbyDetail = (params) => getAction('/ebidding/saleEbiddingHead/queryBidLobbyDetail', params)

// 竞价大厅报价信息查询-供应方
const apiSaleQueryBidLobbyQuote = (params) => getAction('/ebidding/saleEbiddingHead/queryBidLobbyQuote', params)


/**
|--------------------------------------------------
| 采购竞价行历史
|--------------------------------------------------
*/

// 通过头id查询竞价大厅历史报价信息
const apiHisQueryBidLobbyDetail = (params) => getAction('/ebidding/purchaseEbiddingItemHis/queryBidLobbyDetail', params)

// 通过头id查询竞价大厅历史报价信息
const apiSaleHisQueryBidLobbyDetail = (params) => getAction('/ebidding/ebiddingSaleItemHis/queryBidLobbyDetail', params)

// 销售竞价单头-报价
const apiSaleQuotePrice = (params) => postAction('/ebidding/saleEbiddingHead/quotePrice', params)

const apiSaleSetUpper = (params) => postAction('/ebidding/saleEbiddingHead/setUpper', params)



export {
    apiQueryBidLobbyDetail,
    apiQueryBidLobbyQuote,
    apiManualStartBid,
    apiManualEndBid,
    apiHisQueryBidLobbyDetail,
    apiSaleQueryBidLobbyDetail,
    apiSaleQueryBidLobbyQuote,
    apiSaleHisQueryBidLobbyDetail,
    apiSaleQuotePrice,
    apiSaleSetUpper
}
