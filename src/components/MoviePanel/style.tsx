import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: any) => ({
    border: {
        borderRadius: '10px'
    },
    blankImg: {
        height: '250px', backgroundColor: '#DFDFDF'
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
        fontWeight: '600 !important'
    },
    movieDescription: {
        fontSize: '14px !important',
    }
}));

export default useStyle;
