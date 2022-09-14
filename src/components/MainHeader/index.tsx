import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Web3 from 'web3';

import { getMagicInstance } from '../../utils/magiclink';

const MainHeader = (props: any) => {
  const name = props.route.name;

  const login = async () => {
    const web3 = new Web3(getMagicInstance());
    try {
      await web3.eth.getAccounts().then((accounts) => console.log(accounts[0]));
    } catch (e) {
      console.log(e);
    }
  };

  if (name === 'Nft') {
    return (
      <Appbar.Header style={styles.appMainHeader}>
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
        <Appbar.Content title={name} />
        <Button mode="text" onPress={() => console.log('Pressed')}>
          Connect Wallet
        </Button>
      </Appbar.Header>
    );
  }

  return (
    <Appbar.Header style={styles.appMainHeader}>
      <Appbar.Content title={name} />
      <Button mode="text" compact={true} onPress={() => login()}>
        Connect Wallet
      </Button>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appMainHeader: {
    backgroundColor: 'black',
    height: 40,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    elevation: 0,
  },
  appTitle: {
    marginBottom: 40,
  },
});

export default MainHeader;
