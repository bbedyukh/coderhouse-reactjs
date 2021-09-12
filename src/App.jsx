import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Layout } from './components/Layout/Layout'
import { Theme } from './components/Theme/Theme'
// import { ItemListContainer } from './components/ItemList/ItemListContainer'
import { ItemDetailContainer } from './components/ItemList/ItemDetailContainer'

function App() {
  return (
    <Theme>
      <Layout>
        <Container>
          <Box sx={{ py: 4 }}>
            {/* <ItemListContainer /> */}
            <ItemDetailContainer />
          </Box>
        </Container>
      </Layout>
    </Theme>
  );
}

export default App;
