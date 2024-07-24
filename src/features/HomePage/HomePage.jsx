import React from 'react'
import Banner from './About/ui/Banner'
import SetPage from '../SetPage/ui/SetPage'
import Sale from '../Sale/ul/Sale'
import PopularSets from '../PopularSets/data/ui/PopularSets'

const HomePage = () => {
  return (
    <div>



      <Banner/>
      <SetPage/>
      <Sale/>

      <PopularSets/>
    </div>
  )
}

export default HomePage