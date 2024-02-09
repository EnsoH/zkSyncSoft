export const zkswapRouterAbi = [
    {
        "inputs": [{
            "internalType": "address",
            "name": "_factory",
            "type": "address"
        }, {"internalType": "address", "name": "_WETH", "type": "address"}],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "inputs": [],
        "name": "WETH",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }, {"internalType": "uint256", "name": "amountAInExpected", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountBInExpected",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountAInMin", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountBInMin",
            "type": "uint256"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "addLiquidity",
        "outputs": [{"internalType": "uint256", "name": "amountAInActual", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountBInActual",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
            "internalType": "uint256",
            "name": "amountTokenInExpected",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountTokenInMin", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountETHInMin",
            "type": "uint256"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "addLiquidityETH",
        "outputs": [{
            "internalType": "uint256",
            "name": "amountTokenInActual",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountETHInActual", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "factory",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "reserveOut", "type": "uint256"}],
        "name": "getAmountIn",
        "outputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "reserveOut", "type": "uint256"}],
        "name": "getAmountOut",
        "outputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }],
        "name": "getAmountsIn",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }],
        "name": "getAmountsOut",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "indexedPairs",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
        "name": "indexedPairsLengthOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
        "name": "indexedPairsOf",
        "outputs": [{"internalType": "address[]", "name": "", "type": "address[]"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "account", "type": "address"}, {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "counts", "type": "uint256"}],
        "name": "indexedPairsRange",
        "outputs": [{"internalType": "address[]", "name": "", "type": "address[]"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "isPairIndexed",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "reserveA",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "reserveB", "type": "uint256"}],
        "name": "quote",
        "outputs": [{"internalType": "uint256", "name": "amountB", "type": "uint256"}],
        "stateMutability": "pure",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountAOutMin",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountBOutMin", "type": "uint256"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
        "name": "removeLiquidity",
        "outputs": [{"internalType": "uint256", "name": "amountAOut", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountBOut",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "removeLiquidityETH",
        "outputs": [{"internalType": "uint256", "name": "amountToken", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
        "outputs": [{"internalType": "uint256", "name": "amountETH", "type": "uint256"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }],
        "name": "removeLiquidityETHWithPermit",
        "outputs": [{"internalType": "uint256", "name": "amountToken", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }],
        "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
        "outputs": [{"internalType": "uint256", "name": "amountETH", "type": "uint256"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountAOutMin",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountBOutMin", "type": "uint256"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
        }, {"internalType": "uint8", "name": "v", "type": "uint8"}, {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        }, {"internalType": "bytes32", "name": "s", "type": "bytes32"}],
        "name": "removeLiquidityWithPermit",
        "outputs": [{"internalType": "uint256", "name": "amountAOut", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountBOut",
            "type": "uint256"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapETHForExactTokens",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapExactETHForTokens",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }, {"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }],
        "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
        "name": "swapExactTokensForETH",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
        "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
        "name": "swapExactTokensForTokens",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
        "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
        }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
        "name": "swapTokensForExactETH",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
        }, {"internalType": "address[]", "name": "path", "type": "address[]"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}],
        "name": "swapTokensForExactTokens",
        "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "stateMutability": "payable", "type": "receive"
    }
]