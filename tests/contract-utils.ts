import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Contract/Contract"

export function createAuctionEvent(
  user: Address,
  reserve: Address,
  bidPrice: BigInt,
  nftAsset: Address,
  nftTokenId: BigInt,
  onBehalfOf: Address,
  borrower: Address,
  loanId: BigInt
): Auction {
  let auctionEvent = changetype<Auction>(newMockEvent())

  auctionEvent.parameters = new Array()

  auctionEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  auctionEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  auctionEvent.parameters.push(
    new ethereum.EventParam(
      "bidPrice",
      ethereum.Value.fromUnsignedBigInt(bidPrice)
    )
  )
  auctionEvent.parameters.push(
    new ethereum.EventParam("nftAsset", ethereum.Value.fromAddress(nftAsset))
  )
  auctionEvent.parameters.push(
    new ethereum.EventParam(
      "nftTokenId",
      ethereum.Value.fromUnsignedBigInt(nftTokenId)
    )
  )
  auctionEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  auctionEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  auctionEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return auctionEvent
}

export function createBorrowEvent(
  user: Address,
  reserve: Address,
  amount: BigInt,
  nftAsset: Address,
  nftTokenId: BigInt,
  onBehalfOf: Address,
  borrowRate: BigInt,
  loanId: BigInt,
  referral: i32
): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("nftAsset", ethereum.Value.fromAddress(nftAsset))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "nftTokenId",
      ethereum.Value.fromUnsignedBigInt(nftTokenId)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowRate",
      ethereum.Value.fromUnsignedBigInt(borrowRate)
    )
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "referral",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(referral))
    )
  )

  return borrowEvent
}

export function createDepositEvent(
  user: Address,
  reserve: Address,
  amount: BigInt,
  onBehalfOf: Address,
  referral: i32
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "onBehalfOf",
      ethereum.Value.fromAddress(onBehalfOf)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "referral",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(referral))
    )
  )

  return depositEvent
}

export function createLiquidateEvent(
  user: Address,
  reserve: Address,
  repayAmount: BigInt,
  remainAmount: BigInt,
  nftAsset: Address,
  nftTokenId: BigInt,
  borrower: Address,
  loanId: BigInt
): Liquidate {
  let liquidateEvent = changetype<Liquidate>(newMockEvent())

  liquidateEvent.parameters = new Array()

  liquidateEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "remainAmount",
      ethereum.Value.fromUnsignedBigInt(remainAmount)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam("nftAsset", ethereum.Value.fromAddress(nftAsset))
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "nftTokenId",
      ethereum.Value.fromUnsignedBigInt(nftTokenId)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return liquidateEvent
}

export function createPausedEvent(): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  return pausedEvent
}

export function createPausedTimeUpdatedEvent(
  startTime: BigInt,
  durationTime: BigInt
): PausedTimeUpdated {
  let pausedTimeUpdatedEvent = changetype<PausedTimeUpdated>(newMockEvent())

  pausedTimeUpdatedEvent.parameters = new Array()

  pausedTimeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  pausedTimeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "durationTime",
      ethereum.Value.fromUnsignedBigInt(durationTime)
    )
  )

  return pausedTimeUpdatedEvent
}

export function createRedeemEvent(
  user: Address,
  reserve: Address,
  borrowAmount: BigInt,
  fineAmount: BigInt,
  nftAsset: Address,
  nftTokenId: BigInt,
  borrower: Address,
  loanId: BigInt
): Redeem {
  let redeemEvent = changetype<Redeem>(newMockEvent())

  redeemEvent.parameters = new Array()

  redeemEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam(
      "fineAmount",
      ethereum.Value.fromUnsignedBigInt(fineAmount)
    )
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam("nftAsset", ethereum.Value.fromAddress(nftAsset))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam(
      "nftTokenId",
      ethereum.Value.fromUnsignedBigInt(nftTokenId)
    )
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  redeemEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return redeemEvent
}

export function createRepayEvent(
  user: Address,
  reserve: Address,
  amount: BigInt,
  nftAsset: Address,
  nftTokenId: BigInt,
  borrower: Address,
  loanId: BigInt
): Repay {
  let repayEvent = changetype<Repay>(newMockEvent())

  repayEvent.parameters = new Array()

  repayEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("nftAsset", ethereum.Value.fromAddress(nftAsset))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "nftTokenId",
      ethereum.Value.fromUnsignedBigInt(nftTokenId)
    )
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return repayEvent
}

export function createReserveDataUpdatedEvent(
  reserve: Address,
  liquidityRate: BigInt,
  variableBorrowRate: BigInt,
  liquidityIndex: BigInt,
  variableBorrowIndex: BigInt
): ReserveDataUpdated {
  let reserveDataUpdatedEvent = changetype<ReserveDataUpdated>(newMockEvent())

  reserveDataUpdatedEvent.parameters = new Array()

  reserveDataUpdatedEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  reserveDataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityRate",
      ethereum.Value.fromUnsignedBigInt(liquidityRate)
    )
  )
  reserveDataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "variableBorrowRate",
      ethereum.Value.fromUnsignedBigInt(variableBorrowRate)
    )
  )
  reserveDataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidityIndex",
      ethereum.Value.fromUnsignedBigInt(liquidityIndex)
    )
  )
  reserveDataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "variableBorrowIndex",
      ethereum.Value.fromUnsignedBigInt(variableBorrowIndex)
    )
  )

  return reserveDataUpdatedEvent
}

export function createUnpausedEvent(): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  return unpausedEvent
}

export function createWithdrawEvent(
  user: Address,
  reserve: Address,
  amount: BigInt,
  to: Address
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("reserve", ethereum.Value.fromAddress(reserve))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return withdrawEvent
}
