import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomTemplate from '../../@core/components/CustomTemplate'
import DataDisplay from './DataDisplay'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Dashboard() {
  const searchname = useSelector(state => state.music.search)
  const musicData = useSelector(state => state.music.dataMusic)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const generateData = () => {
    let _temp = [];
    musicData.map((val, index) => {
      _temp.push(<DataDisplay data={val} />)
    })

    return _temp;
  }

  return (
    <CustomTemplate isHeader modalHandleOpen={handleOpen}>
      <div style={{ padding: '50px' }}> Search Result For : {searchname} </div>
      {generateData()}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </CustomTemplate>
  )
}

export default Dashboard