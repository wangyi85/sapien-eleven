import {ConnectButton} from '@rainbow-me/rainbowkit';
import {Button, useMediaQuery, useTheme} from "@mui/material";
import {fonts, pixToRem} from "../const/uivar";
import MetaMaskLogo from '../assets/metamask.svg'
import {useDisconnect} from "wagmi";
import {colors} from '../const/uivar'
import {useState} from "react";

export const HeaderConnectButton = () => {
    const {disconnect} = useDisconnect();
    const [showDisconnectButton, setShowDisconnectButton] = useState(false)
    const disconnectWallet = async () => {
        await disconnect();
        setShowDisconnectButton(false);
    }
    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        sx={styles.headerBtn}
                                        startIcon={<img src={MetaMaskLogo} style={{width: pixToRem(15), height: pixToRem(15)}} alt='metamask' />}
                                        onClick={openConnectModal}
                                    >
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button
                                        sx={styles.headerBtn}
                                        onClick={openChainModal}>
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2}}>
                                    <Button
                                        sx={styles.headerBtn}
                                        startIcon={<img src={chain.iconUrl} style={{width: pixToRem(15), height: pixToRem(15)}} alt='metamask' />}
                                        onClick={() => setShowDisconnectButton(!showDisconnectButton)}
                                    >
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </Button>
                                    {showDisconnectButton && <Button
                                        sx={styles.headerBtn}
                                        onClick={disconnectWallet}
                                    >
                                        Disconnect Wallet
                                    </Button>}
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export const MobileHeaderConnectButton = () => {
    const [showDisconnectButton, setShowDisconnectButton] = useState(false);
    const {disconnect} = useDisconnect();
    const disconnectWallet = async () => {
        await disconnect();
        setShowDisconnectButton(false)
    }
    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        sx={styles.mobileHeaderBtn}
                                        endIcon={<img src={MetaMaskLogo} style={{width: pixToRem(20), height: pixToRem(20)}} alt='metamask' />}
                                        onClick={openConnectModal}
                                    >
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button
                                        sx={styles.mobileHeaderBtn}
                                        onClick={openChainModal}
                                    >
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5}}>
                                    <Button
                                        sx={styles.mobileHeaderBtn}
                                        endIcon={<img src={chain.iconUrl} style={{width: pixToRem(20), height: pixToRem(20)}} alt={chain.name} />}
                                        onClick={() => setShowDisconnectButton(!showDisconnectButton)}
                                    >
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </Button>
                                    {showDisconnectButton && <Button
                                        sx={[styles.mobileHeaderBtn, {color: colors.red}]}
                                        onClick={disconnectWallet}
                                    >
                                        Disconnect Wallet
                                    </Button>}
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export const HomeConnectButton = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        sx={[styles.homeBtn, {ml: sm ? 0 : pixToRem(70)}]}
                                        startIcon={<img src={MetaMaskLogo} style={{width: pixToRem(20), height: pixToRem(20)}} alt='metamask' />}
                                        onClick={openConnectModal}
                                    >
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button
                                        sx={[styles.homeBtn, {ml: sm ? 0 : pixToRem(70)}]}
                                        onClick={openChainModal}>
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <Button
                                    sx={[styles.homeBtn, {ml: sm ? 0 : pixToRem(70)}]}
                                    startIcon={<img src={chain.iconUrl} style={{width: pixToRem(20), height: pixToRem(20)}} alt={chain.name} />}
                                >
                                    Full Access
                                </Button>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export const AcademyConnectButton = (props) => {
    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        sx={styles.academyBtn}
                                        onClick={openConnectModal}
                                    >
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button
                                        sx={styles.academyBtn}
                                        onClick={openChainModal}>
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <Button
                                    sx={styles.academyBtn}
                                    onClick={props.onPress}
                                >
                                    Enter
                                </Button>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

const styles = {
    headerBtn: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pixToRem(10),
        paddingBottom: pixToRem(10),
        paddingLeft: pixToRem(20),
        paddingRight: pixToRem(20),
        width: 160,
        height: pixToRem(35),
        backgroundColor: '#F8F8F8',
        color: '#333333',
        fontFamily: 'Roboto',
        fontSize: pixToRem(10),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: pixToRem(12),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
    },
    mobileHeaderBtn: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(25),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        pt: 2, pb: 2
    },
    homeBtn: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1.5,
        pl: 5, pr: 5,
        // width: '233px',
        height: '50px',
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: '15px',
        marginLeft: pixToRem(70)
    },
    academyBtn: {
        height: pixToRem(60),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 11,
        fontFamily: fonts.roboto,
        fontSize: pixToRem(20),
        fontWeight: 500,
        fontStyle: 'normal',
        lineHeight: 16,
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginBottom: pixToRem(30),
    }
}