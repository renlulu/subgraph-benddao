import {
  Auction as AuctionEvent,
  Borrow as BorrowEvent,
  Deposit as DepositEvent,
  Liquidate as LiquidateEvent,
  Paused as PausedEvent,
  PausedTimeUpdated as PausedTimeUpdatedEvent,
  Redeem as RedeemEvent,
  Repay as RepayEvent,
  ReserveDataUpdated as ReserveDataUpdatedEvent,
  Unpaused as UnpausedEvent,
  Withdraw as WithdrawEvent
} from "../generated/Contract/Contract"
import {
  Auction,
  Borrow,
  Deposit,
  Liquidate,
  Paused,
  PausedTimeUpdated,
  Redeem,
  Repay,
  ReserveDataUpdated,
  Unpaused,
  Withdraw
} from "../generated/schema"

export function handleAuction(event: AuctionEvent): void {
  let entity = new Auction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reserve = event.params.reserve
  entity.bidPrice = event.params.bidPrice
  entity.nftAsset = event.params.nftAsset
  entity.nftTokenId = event.params.nftTokenId
  entity.onBehalfOf = event.params.onBehalfOf
  entity.borrower = event.params.borrower
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBorrow(event: BorrowEvent): void {
  let entity = new Borrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reserve = event.params.reserve
  entity.amount = event.params.amount
  entity.nftAsset = event.params.nftAsset
  entity.nftTokenId = event.params.nftTokenId
  entity.onBehalfOf = event.params.onBehalfOf
  entity.borrowRate = event.params.borrowRate
  entity.loanId = event.params.loanId
  entity.referral = event.params.referral

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reserve = event.params.reserve
  entity.amount = event.params.amount
  entity.onBehalfOf = event.params.onBehalfOf
  entity.referral = event.params.referral

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidate(event: LiquidateEvent): void {
  let entity = new Liquidate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reserve = event.params.reserve
  entity.repayAmount = event.params.repayAmount
  entity.remainAmount = event.params.remainAmount
  entity.nftAsset = event.params.nftAsset
  entity.nftTokenId = event.params.nftTokenId
  entity.borrower = event.params.borrower
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePausedTimeUpdated(event: PausedTimeUpdatedEvent): void {
  let entity = new PausedTimeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.startTime = event.params.startTime
  entity.durationTime = event.params.durationTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeem(event: RedeemEvent): void {
  let entity = new Redeem(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reserve = event.params.reserve
  entity.borrowAmount = event.params.borrowAmount
  entity.fineAmount = event.params.fineAmount
  entity.nftAsset = event.params.nftAsset
  entity.nftTokenId = event.params.nftTokenId
  entity.borrower = event.params.borrower
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRepay(event: RepayEvent): void {
  let entity = new Repay(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reserve = event.params.reserve
  entity.amount = event.params.amount
  entity.nftAsset = event.params.nftAsset
  entity.nftTokenId = event.params.nftTokenId
  entity.borrower = event.params.borrower
  entity.loanId = event.params.loanId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReserveDataUpdated(event: ReserveDataUpdatedEvent): void {
  let entity = new ReserveDataUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reserve = event.params.reserve
  entity.liquidityRate = event.params.liquidityRate
  entity.variableBorrowRate = event.params.variableBorrowRate
  entity.liquidityIndex = event.params.liquidityIndex
  entity.variableBorrowIndex = event.params.variableBorrowIndex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reserve = event.params.reserve
  entity.amount = event.params.amount
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
