import {
  ConfigurationChanged as ConfigurationChangedEvent,
  ETHToSend as ETHToSendEvent,
  FundsTransferred as FundsTransferredEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  MsgReceived as MsgReceivedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"
import {
  ConfigurationChanged,
  ETHToSend,
  FundsTransferred,
  FundsWithdrawn,
  MsgReceived,
  OwnershipTransferred
} from "../generated/schema"

export function handleConfigurationChanged(
  event: ConfigurationChangedEvent
): void {
  let entity = new ConfigurationChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.config = event.params.config
  entity.oldValue = event.params.oldValue
  entity.newValue = event.params.newValue
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleETHToSend(event: ETHToSendEvent): void {
  let entity = new ETHToSend(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.amountToTransferUSD = event.params.amountToTransferUSD
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsTransferred(event: FundsTransferredEvent): void {
  let entity = new FundsTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.withdrawnBy = event.params.withdrawnBy
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMsgReceived(event: MsgReceivedEvent): void {
  let entity = new MsgReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.amountToTransferUSD = event.params.amountToTransferUSD
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
