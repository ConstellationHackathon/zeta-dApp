import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ConfigurationChanged,
  ETHToSend,
  FundsTransferred,
  FundsWithdrawn,
  MsgReceived,
  OwnershipTransferred
} from "../generated/Contract/Contract"

export function createConfigurationChangedEvent(
  config: string,
  oldValue: Address,
  newValue: Address,
  timestamp: BigInt
): ConfigurationChanged {
  let configurationChangedEvent = changetype<ConfigurationChanged>(
    newMockEvent()
  )

  configurationChangedEvent.parameters = new Array()

  configurationChangedEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromString(config))
  )
  configurationChangedEvent.parameters.push(
    new ethereum.EventParam("oldValue", ethereum.Value.fromAddress(oldValue))
  )
  configurationChangedEvent.parameters.push(
    new ethereum.EventParam("newValue", ethereum.Value.fromAddress(newValue))
  )
  configurationChangedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return configurationChangedEvent
}

export function createETHToSendEvent(
  userAddress: Address,
  amountToTransferUSD: BigInt,
  timestamp: BigInt
): ETHToSend {
  let ethToSendEvent = changetype<ETHToSend>(newMockEvent())

  ethToSendEvent.parameters = new Array()

  ethToSendEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  ethToSendEvent.parameters.push(
    new ethereum.EventParam(
      "amountToTransferUSD",
      ethereum.Value.fromUnsignedBigInt(amountToTransferUSD)
    )
  )
  ethToSendEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return ethToSendEvent
}

export function createFundsTransferredEvent(
  recipient: Address,
  amount: BigInt,
  timestamp: BigInt
): FundsTransferred {
  let fundsTransferredEvent = changetype<FundsTransferred>(newMockEvent())

  fundsTransferredEvent.parameters = new Array()

  fundsTransferredEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  fundsTransferredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundsTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return fundsTransferredEvent
}

export function createFundsWithdrawnEvent(
  withdrawnBy: Address,
  amount: BigInt,
  timestamp: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawnBy",
      ethereum.Value.fromAddress(withdrawnBy)
    )
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return fundsWithdrawnEvent
}

export function createMsgReceivedEvent(
  userAddress: Address,
  amountToTransferUSD: BigInt,
  timestamp: BigInt
): MsgReceived {
  let msgReceivedEvent = changetype<MsgReceived>(newMockEvent())

  msgReceivedEvent.parameters = new Array()

  msgReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  msgReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "amountToTransferUSD",
      ethereum.Value.fromUnsignedBigInt(amountToTransferUSD)
    )
  )
  msgReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return msgReceivedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
