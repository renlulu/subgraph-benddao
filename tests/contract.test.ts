import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Auction } from "../generated/schema"
import { Auction as AuctionEvent } from "../generated/Contract/Contract"
import { handleAuction } from "../src/contract"
import { createAuctionEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let reserve = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let bidPrice = BigInt.fromI32(234)
    let nftAsset = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let nftTokenId = BigInt.fromI32(234)
    let onBehalfOf = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let borrower = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let loanId = BigInt.fromI32(234)
    let newAuctionEvent = createAuctionEvent(
      user,
      reserve,
      bidPrice,
      nftAsset,
      nftTokenId,
      onBehalfOf,
      borrower,
      loanId
    )
    handleAuction(newAuctionEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Auction created and stored", () => {
    assert.entityCount("Auction", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Auction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Auction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reserve",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Auction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bidPrice",
      "234"
    )
    assert.fieldEquals(
      "Auction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftAsset",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Auction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftTokenId",
      "234"
    )
    assert.fieldEquals(
      "Auction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "onBehalfOf",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Auction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrower",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Auction",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "loanId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
