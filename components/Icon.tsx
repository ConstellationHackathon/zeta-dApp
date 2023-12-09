import Image from "next/image";

export const IconClose = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[44px] h-[44px]" >
            <title>Close</title>
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            
        </svg>
    )
}

export const IconRight = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
    )
}

export const IconRight_2 = () => {
    return (
        <svg clip-rule="evenodd" width="24" height="24" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
    )
}

export const IconAvalanche = ({ width = 32, height = 32 }) => {
    return (
        <Image
            src="/assets/Coin=Avalanche.png"
            alt="Avalanche"
            width={width}
            height={height}
        />
    )
}

export const IconEthereum = ({ width = 32, height = 32 }) => {
    return (
        <Image
            src="/assets/Coin=Ethereum.png"
            alt="Avalanche"
            width={width}
            height={height}
        />
    )
}