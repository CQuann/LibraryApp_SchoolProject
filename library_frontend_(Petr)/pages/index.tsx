import React, { useState, useEffect } from 'react';
import { withLayout } from '../Layout/Layout';
import { Group } from '../components';
import axios from "axios";


function Home() {
  const [appState, setAppState] = useState();

  useEffect(() => {
    const apiUrl = 'api/students/11/3';
    axios.get(process.env.REACT_APP_SERVER + apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);

  console.log(appState)

  return (
    <div>
      <Group size='m'> 10 </Group>
      <Group size='s' href='#'> 10-3 </Group>
    </div>
  )
}

export default withLayout(Home)
