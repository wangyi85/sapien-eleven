import {memo} from "react";
import {Box, Container} from "@mui/material";
import IntroBg from '../../assets/images/blog/intro_bg.png';
import {fonts, pixToRem} from "../../const/uivar";

const IntroPanel = memo(props => {
    return (
        <Container
            maxWidth={false}
            sx={styles.container}
        >
            <Box
                component={'span'}
                sx={styles.redTitle}
            >SAPIEN ELEVEN</Box>
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                BLOG
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                Welcome to our wellness blog! Our mission is to provide you with practical tips and resources to help you live a healthier and happier life.
            </Box>
        </Container>
    )
})

export default IntroPanel

const styles = {
    container: {
        width: '100%',
        height: pixToRem(455),
        backgroundImage: `url(${IntroBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    redTitle: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(40),
        fontWeight: 700,
        fontStyle: 'normal',
        color: '#CA3C3D',
        lineHeight: pixToRem(50),
        marginLeft: pixToRem(70)
    },
    whiteTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(40),
        fontWeight: 700,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(50),
        marginTop: pixToRem(5),
        marginBottom: pixToRem(15),
        marginLeft: pixToRem(70)
    },
    comment: {
        width: '40%',
        fontFamily: fonts.roboto,
        fontSize: pixToRem(22),
        fontWeight: 400,
        fontStyle: 'normal',
        color: 'white',
        lineHeight: pixToRem(36),
        marginTop: pixToRem(15),
        marginBottom: pixToRem(20),
        marginLeft: pixToRem(70)
    },
}