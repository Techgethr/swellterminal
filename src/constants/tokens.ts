import { SWELL_ABI} from "./abi/swell";
import { WSWELL_ABI} from "./abi/wswell";
import { RSWELL_ABI} from "./abi/rswell";
import { USDE_ABI} from "./abi/usde";
import { RSWETH_ABI} from "./abi/rsweth";
import { WETH_ABI} from "./abi/weth";
import { SWBTC_ABI} from "./abi/swbtc";
import { SWETH_ABI} from "./abi/sweth";

interface Token {
    name: string;        // Nombre del token
    symbol: string;      // Símbolo del token
    decimals: number;    // Decimales del token
    contractId: string;  // ID del contrato
}

export const tokensAvailable: Token[] = [
    {
        name: "Swell Governance Token",
        symbol: "SWELL",
        decimals: 18,
        contractId: "0x2826D136F5630adA89C1678b64A61620Aab77Aea",
    },
    {
        name: "wSWELL",
        symbol: "wSWELL",
        decimals: 18,
        contractId: "0xda1F8EA667dc5600F5f654DF44b47F1639a83DD1",
    },
    {
        name: "rSWELL",
        symbol: "rSWELL",
        decimals: 18,
        contractId: "0x939f1cC163fDc38a77571019eb4Ad1794873bf8c",
    },
    {
        name: "USDe",
        symbol: "USDe",
        decimals: 18,
        contractId: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
    },
    {
        name: "rswETH",
        symbol: "rswETH",
        decimals: 18,
        contractId: "0x18d33689AE5d02649a859A1CF16c9f0563975258",
    },
    {
        name: "Wrapped Ether",
        symbol: "WETH",
        decimals: 18,
        contractId: "0x4200000000000000000000000000000000000006",
    },
    {
        name: "swBTC",
        symbol: "swBTC",
        decimals: 8,
        contractId: "0x1cf7b5f266A0F39d6f9408B90340E3E71dF8BF7B",
    },
    {
        name: "swETH",
        symbol: "swETH",
        decimals: 18,
        contractId: "0x09341022ea237a4DB1644DE7CCf8FA0e489D85B7",
    }
  ];

export const abiByToken = [
    {
        contractId: "0x2826D136F5630adA89C1678b64A61620Aab77Aea",
        ABI: SWELL_ABI
    },
    {
        contractId: "0xda1F8EA667dc5600F5f654DF44b47F1639a83DD1",
        ABI: WSWELL_ABI
    },
    {
        contractId: "0x939f1cC163fDc38a77571019eb4Ad1794873bf8c",
        ABI: RSWELL_ABI
    },
    {
        contractId: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
        ABI: USDE_ABI
    },
    {
        contractId: "0x18d33689AE5d02649a859A1CF16c9f0563975258",
        ABI: RSWETH_ABI
    },
    {
        contractId: "0x4200000000000000000000000000000000000006",
        ABI: WETH_ABI
    },
    {
        contractId: "0x1cf7b5f266A0F39d6f9408B90340E3E71dF8BF7B",
        ABI: SWBTC_ABI
    },
    {
        contractId: "0x09341022ea237a4DB1644DE7CCf8FA0e489D85B7",
        ABI: SWETH_ABI
    },
]

export const concatenatedTokens = tokensAvailable
        .map(
        (token) =>
            `Name: ${token.name}, Symbol: ${token.symbol}, Decimals: ${token.decimals}, Contract ID: ${token.contractId}`
        )
        .join("\n");