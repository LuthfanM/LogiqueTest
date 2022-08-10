import { Button, TextField } from '@mui/material'
import React from 'react'
import CustomTemplate from '../../@core/components/CustomTemplate'
import Footer from '../../@core/components/Footer'
import logo from '../../@core/assets/logo/logo.png'

import SearchInput from '../../@core/components/SearchInput'
import { PRIMARY } from '../../utility/Constants'
import { useSelector } from 'react-redux'

const SplashScreen = () => {
  const isLoading = useSelector(state => state.general.isLoading);

  return (<>
    <CustomTemplate status={PRIMARY}>
      <div className='bg-Page'>
        <img src={logo} alt={"logo"} />
        {
          isLoading ? <div>Loading...</div> :

            <Footer>
              <SearchInput />
            </Footer>
        }
      </div>
    </CustomTemplate>
  </>
  )
}

export default SplashScreen