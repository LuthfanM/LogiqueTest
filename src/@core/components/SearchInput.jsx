import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { PATH_DASHBOARD } from '../../router/path';
import { setDataMusic, setMusicName } from '../../redux/music';
import { Button, TextField } from '@mui/material';
import { VerifyService } from '../../data/business/verify/verify';
import { replacer } from '../../utility/Utils';
import { setLoading } from '../../redux/general';

const SearchInput = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const _service = new VerifyService();
    const [naming, setNaming] = useState([])

    const handleSearch = () => {
        if (naming == "")
            return;
        
        dispatch(setMusicName(naming));
        dispatch(setLoading(true));
        _service.getSearch(replacer(naming)
            , {
                Success: (res) => {
                    Promise.resolve(
                        dispatch(setDataMusic(res?.results))).then(() => {
                            dispatch(setLoading(false))
                            navigate(PATH_DASHBOARD)
                        })
                },
                Errors: (res) => {
                    dispatch(setLoading(false))
                    console.log("erorr", res)
                }
            })
        // 
    }

    return (
        <>
            <TextField inputProps={{ className: 'tf-search' }} onChange={(e) => setNaming(e.target.value)} placeholder="Artist/Album/Title"></TextField>
            <Button onClick={handleSearch}>Search</Button>
        </>
    )
}

export default SearchInput
