import React, { useState } from 'react';
import { withLayout } from '../Layout/Layout';
import { Group } from '../components';
import axios from "axios";


function Home() {
  return (
    <div>
      <Group size='m'> 10 </Group>
      <Group size='s' href='#'> 10-3 </Group>
    </div>
  )
}

export default withLayout(Home)
