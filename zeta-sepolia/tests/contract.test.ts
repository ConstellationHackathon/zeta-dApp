import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ConfigurationChanged } from "../generated/schema"
import { ConfigurationChanged as ConfigurationChangedEvent } from "../generated/Contract/Contract"
import { handleConfigurationChanged } from "../src/contract"
import { createConfigurationChangedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let config = "Example string value"
    let oldValue = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newValue = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let timestamp = BigInt.fromI32(234)
    let newConfigurationChangedEvent = createConfigurationChangedEvent(
      config,
      oldValue,
      newValue,
      timestamp
    )
    handleConfigurationChanged(newConfigurationChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ConfigurationChanged created and stored", () => {
    assert.entityCount("ConfigurationChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ConfigurationChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "config",
      "Example string value"
    )
    assert.fieldEquals(
      "ConfigurationChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "oldValue",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ConfigurationChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newValue",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ConfigurationChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
