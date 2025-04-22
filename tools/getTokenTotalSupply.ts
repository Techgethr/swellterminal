import { createViemPublicClient } from "../src/viem/createViemPublicClient.js";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";
import {tokensAvailable, abiByToken} from "../src/constants/tokens";

import type { GetTokenTotalSupplyArgs } from "../interface/index.js";

/**
 * Get the total spply of a token
 *
 * This tool takes a single parameter, the token address to get the total supply
 * from.
 */
export const getTokenTotalSupplyTool: ToolConfig<GetTokenTotalSupplyArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_token_total_supply",
      description: "Get the balance of a wallet",
      parameters: {
        type: "object",
        properties: {
          token: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The wallet address to get the balance from",
          },
        },
        required: ["token"],
      },
    },
  },
  handler: async ({ token }) => {
    return await getSupply(token);
  },
};

async function getSupply(token: string) {
  const publicClient = createViemPublicClient();
  const tokenOrigin = tokensAvailable.find((t) => t.contractId === token);
  const tokenToSend = abiByToken.find((t) => t.contractId === token);
  const result = await publicClient.readContract({
    address: tokenOrigin?.contractId,
    abi: tokenToSend?.ABI,
    functionName: 'totalSupply',
    args: [],
  });
  const balance = Number(result) / 10**tokenOrigin?.decimals;
  return balance;
}
