import React from 'react'
import Banner from './About/ui/Banner'
import SetPage from '../SetPage/ui/SetPage'
import Sale from '../Sale/ul/Sale'
import PopularSets from './../PopularSets/data/ui/PopularSetsTwo';

import Services from '../Services/ui/Services';
import News from '../New/ui/New';
const HomePage = () => {
  return (
    <div>


      <Banner />
      <SetPage />
      <Sale />
      <PopularSets />
      <News />

      <Services />
    </div>
  )
}

export default HomePage