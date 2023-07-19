import { InputBase, alpha , styled } from '@mui/material';
import { useState } from 'react'

function usePaymentCenter() {
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');


    const HandleAddOpenPayment= () => {
        document.querySelector(".BigMain").setAttribute("Payment", true)
    }

    const HandleAddClosePayment = () => {
        document.querySelector(".BigMain").setAttribute("Payment", false)
    }



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };
    
    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };
    

    return {
        Search,
        SearchIconWrapper,
        StyledInputBase,
        handleChangeSort,
        handleChangeFilter,
        sort,
        filter,
        HandleAddOpenPayment,
        HandleAddClosePayment
    }
}

export default usePaymentCenter
