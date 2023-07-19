import {Box, Button, Container} from "@mui/material";
import {memo, useCallback, useState} from "react";
import {colors, fonts, pixToRem} from "../../const/uivar";
import Mail from '../../assets/images/blog/Mail'
import MailIcon from "../../assets/images/blog/MailIcon";
import JoinModal from "../JoinModal";

const JoinPanel = memo(props => {
    const [modalVisible, setModalVisible] = useState(false);

    const openJoinModal = useCallback(() => setModalVisible(true), []);
    const closeJoinModal = useCallback(() => setModalVisible(false), []);

    return (
        <Container
            maxWidth={false}
            sx={styles.container}
        >
            <Mail />
            <Box
                component={'span'}
                sx={styles.whiteTitle}
            >
                JOIN OUR
            </Box>
            <Box
                component={'span'}
                sx={styles.redTitle}
            >
                MAILING LIST
            </Box>
            <Box
                component={'span'}
                sx={styles.comment}
            >
                To be the first to know when we are making moves.
            </Box>
            <Button
                sx={styles.mailButton}
                startIcon={<MailIcon />}
                onClick={openJoinModal}
            >
                Sign Up
            </Button>
            <JoinModal
                visible={modalVisible}
                onClose={closeJoinModal}
            />
        </Container>
    )
})
export default JoinPanel

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.bgBlackColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pixToRem(100),
        paddingBottom: pixToRem(150)
    },
    whiteTitle: {
        marginTop: pixToRem(30),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(30),
        fontWeight: '700',
        color: 'white',
        lineHeight: pixToRem(40)
    },
    redTitle: {
        fontFamily: fonts.besan,
        fontSize: pixToRem(30),
        fontWeight: '700',
        color: colors.red,
        lineHeight: pixToRem(40)
    },
    comment: {
        fontFamily: fonts.roboto,
        fontSize: pixToRem(18),
        fontWeight: '400',
        color: colors.comment,
        lineHeight: pixToRem(30),
        marginTop: pixToRem(20)
    },
    mailButton: {
        border: '1px solid #CA3C3D',
        borderRadius: 0,
        marginTop: pixToRem(40),
        paddingTop: pixToRem(10),
        paddingBottom: pixToRem(10),
        paddingLeft: pixToRem(40),
        paddingRight: pixToRem(40),
        fontFamily: fonts.roboto,
        fontSize: pixToRem(14),
        fontWeight: '700',
        color: 'white'
    }
}