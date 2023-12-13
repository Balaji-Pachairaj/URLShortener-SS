import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatOfWhole} from '../../store/ui'


const Stat = () => {
  const stat = useSelector((state) => {
    return state.ui.stat
  })
  const dispatch = useDispatch()
  // totalClicks : 0 , 
  // totalUrl : 0 ,
  // RegisteredUsers : 0 , 
  // Sites : 0 ,

  useEffect(()=>{
      dispatch(getStatOfWhole())
  },[])
  return (
    <div className='mb-3 mt-3'>
      <div>
        <h6 className=' text-center'>Numbers Speaks Everything</h6>
      </div>
    
    <div className=' row  text-center mt-5 w-100'>
        <div className='col-12 col-md-6 col-lg-3 text-center'>
            <h1 className='fw-bolder'>{stat.totalClicks}</h1> 
            <p className='text-danger'>/TotalClicks</p>
        </div>
        <div className='col-12 col-md-6 col-lg-3'>
            <h1 className='fw-bolder'>{stat.totalUrl}</h1> 
            <p className='text-danger'>/TotalUrl</p>
        </div>
        <div className='col-12 col-md-6 col-lg-3'>
            <h1 className='fw-bolder'>{stat.RegisteredUsers}</h1> 
            <p className='text-danger'>/Registered Users</p>
        </div>
      
        <div className='col-12 col-md-6 col-lg-3'>
            <h1 className='fw-bolder'>{stat.Sites}</h1> 
            <p className='text-danger'>/Sites
            </p>
        </div>
      
    </div>
    </div>

  )
}

export default Stat
