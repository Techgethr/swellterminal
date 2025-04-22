import { createViemPublicClient } from "../src/viem/createViemPublicClient.js";
import type { ToolConfig } from "./allTools.js";
import { formatEther } from "viem";
import {tokensAvailable, abiByToken} from "../src/constants/tokens";

import type { GetTokenBalanceArgs } from "../interface/index.js";

/**
 * Get the user balance of a token
 *
 */
export const getTokenBalanceTool: ToolConfig<GetTokenBalanceArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_token_balance",
      description: "Get the token balance of a wallet",
      parameters: {
        type: "object",
        properties: {
          token: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The token to get the balance from",
          },
          wallet: {
            type: "string",
            pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The wallet address to get the balance from",
          },
        },
        required: ["token","wallet"],
      },
    },
  },
  handler: async ({ token, wallet }) => {
    return await getTokenBalance(token, wallet);
  },
};

async function getTokenBalance(token: string, wallet:string) {
  const publicClient = createViemPublicClient();
  const tokenOrigin = tokensAvailable.find((t) => t.contractId === token);
  const tokenToSend = abiByToken.find((t) => t.contractId === token);
  const result = await publicClient.readContract({
    address: tokenOrigin?.contractId,
    abi: tokenToSend?.ABI,
    functionName: 'balanceOf',
    args: [wallet],
  });
  const balance = Number(result) / 10**tokenOrigin?.decimals;
  return balance;
}
