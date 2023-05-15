import { Box, Button, Container } from "@mui/material";
import { colors, fonts, pixToRem } from "../../const/uivar";
import Running from '../../assets/images/running.png'
import SapienMark from '../../assets/mark.png'
import {connect} from "react-redux";
import {memo} from "react";
import {Twitter} from "@mui/icons-material";

const Drop = memo(props => {
    return (
        <Container
            component={'div'}
            maxWidth={false}
            sx={styles.panel}
        >
            <Box
                component={'div'}
                sx={styles.explaination}
            >
                <Box
                    component={'span'}
                    sx={styles.whiteTitle}
                >
                    {props.connectedWallet === '' ? 'EXCLUSIVE' : 'FULL'}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.redTitle}
                >
                    {props.connectedWallet === '' ? 'MEMBERSHIP' : 'TRANSPARENCY'}
                </Box>
                <Box
                    component={'span'}
                    sx={styles.comment}
                >
                    {
                        props.connectedWallet === '' ?
                            'For exclusive access to the Sapien Eleven Wellness Platform including all content, experiences, and products join today.'
                            : 'It\'s no secret that transparency is necessary to gain full trust and support of the community. Stay up to date on what the Sapien Eleven team is striving to accomplish.'
                    }
                </Box>
                {
                    props.connectedWallet === '' ?
                        <Button
                            sx={styles.twitterBtn}
                            startIcon={<Box component={'img'} src={SapienMark} sx={{width: '24px', height: 'auto', marginRight: '10px'}} />}
                        >
                            JOIN SAPIEN ELEVEN
                        </Button>
                        :
                        <Button
                            sx={styles.twitterBtn}
                            startIcon={<Twitter sx={{width: '24px', height: 'auto', marginRight: '10px'}} />}
                        >
                            FOLLOW US ON TWITTER
                        </Button>
                }
            </Box>
        </Container>
    )
})

export default connect(
    state => ({
        connectedWallet: state.authReducer.connectedWallet
    })
)(Drop)

const styles = {
    panel: {
        backgroundColor: colors.bgBlackColor,
        backgroundImage: `url(${Running})`,
        backgroundRepeat: 'no-repeat',
        height: pixToRem(770),
        backgroundSize: 'contain',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    explaination: {
        width: '38%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: '5em'
    },
    whiteTitle: {
        fontFamily: fonts.roboto,
        color: 'white',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(40),
        lineHeight: pixToRem(54)
    },
    redTitle: {
        fontFamily: fonts.besan,
        color: colors.red,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: pixToRem(40),
        lineHeight: pixToRem(54)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: pixToRem(24),
        lineHeight: pixToRem(44),
        color: colors.comment,
        marginTop: '1.6em'
    },
    twitterBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: pixToRem(25),
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: '2em',
        paddingTop: pixToRem(12),
        paddingBottom: pixToRem(12),
        paddingLeft: pixToRem(45),
        paddingRight: pixToRem(45)
    }
}
