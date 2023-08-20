import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: any) => ({
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    homeIcon: {
        color: '#000 !important'
    }
}));

export default useStyle;
