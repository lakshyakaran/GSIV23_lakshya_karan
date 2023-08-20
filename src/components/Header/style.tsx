import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: any) => ({
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    homeIcon: {
        color: '#4A4A4A !important'
    },
    movieDetails: {
        fontSize: '14px !important',
        fontWeight: '600 !important',
        color: '#4A4A4A !important'
    },
    Main: {
        flexGrow: 1,
        padding: '8px 16px'
    },
    w100: {
        width: '100%'
    },
    dFlex: {
        display: 'flex'
    }
}));

export default useStyle;
