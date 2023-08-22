import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: any) => ({
    border: {
        borderRadius: '10px'
    },
    blankImg: {
        height: '250px', backgroundColor: '#DFDFDF'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    spacing: {
        padding: '5px 5px 10px 5px'
    },
    spaceBetween: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    movieTitle: {
        fontSize: '22px !important',
        marginRight: '5px !important',
        color: '#4A4A4A !important',
        fontWeight: '600 !important'
    },
    movieRating: {
        fontSize: '22px !important',
        color: '#9B9B9B !important',
        fontWeight: '400 !important'
    },
    movieDesc: {
        fontSize: '14px !important',
        color: '#4A4A4A !important',
        fontWeight: '400 !important'
    },
    ml5: {
        marginLeft: '5px !important'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    dCenter: {
        display: 'flex',
        alignItems: 'center'
    },
    dFlex: {
        display: 'flex'
    }
}));

export default useStyle;
