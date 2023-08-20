import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: any) => ({
    border: {
        borderRadius: '10px',
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00) !important',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00) !important'
        },
        '&::-webkit-scrollbar': {
            width: '2px !important'
        },
        '&::-webkit-scrollbar-thumb': {
        },
        overflowY: 'auto',
        maxHeight: '370px'
    },
    blankImg: {
        height: '250px',
        backgroundColor: '#DFDFDF'
    },
    spacing: {
        padding: '5px 5px 10px 5px'
    },
    spaceBetween: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    movieTitle: {
        fontSize: '14px !important',
        color: '#4A4A4A !important',
        fontWeight: '600 !important'
    },
    movieDescription: {
        fontSize: '14px !important',
        color: '#4A4A4A !important'
    },
    movieRating: {
        fontSize: '14px !important',
        color: '#9B9B9B !important'
    }
}));

export default useStyle;
