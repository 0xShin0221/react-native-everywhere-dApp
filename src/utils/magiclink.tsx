import { ConnectExtension } from '@magic-ext/connect';
import { Magic, MagicSDKAdditionalConfiguration } from 'magic-sdk';
import Web3 from 'web3';

let magicInstance: any;

const public_key = 'pk_live_00D71F918671FD55';

const options = {
  extensions: [new ConnectExtension()],
  network: {
    rpcUrl: 'https://eth-goerli.g.alchemy.com/v2/njYRyzBKjPnFADqJjhjp9M09jH6YUWnL',
  },
  // testMode: true,
};

export const getMagicInstance = (
  magicApiKey: string = public_key,
  magicOptions: MagicSDKAdditionalConfiguration = options
) => {
  if (!magicInstance) {
    magicInstance = new Magic(magicApiKey,{
		network: "rinkeby",
		locale: "en_US",
		extensions: [new ConnectExtension()]
	  });
  }

  return magicInstance;
};
