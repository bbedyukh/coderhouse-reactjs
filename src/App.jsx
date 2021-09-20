import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, Container } from '@material-ui/core'
import { Layout } from './components/Layout/Layout'
import { Theme } from './components/Theme/Theme'
import { ItemListContainer } from './components/ItemList/ItemListContainer'
import { ItemDetailContainer } from './components/ItemList/ItemDetailContainer'
import { Home } from './components/Home'
import React from 'react'
import { NoMatchRoute } from './components/NoMatchRoute'

function App() {
    return (
        <Router>
            <Theme>
                <Layout>
                    <Container>
                        <Box sx={{ py: 4 }}>
                            <Switch>
                                <Route
                                    exact
                                    path='/'
                                    component={ItemListContainer}
                                />
                                <Route
                                    exact
                                    path='/category/:category'
                                    component={ItemListContainer}
                                />
                                <Route
                                    exact
                                    path='/item/:itemId'
                                    component={ItemDetailContainer}
                                />
                                <Route path='*'>
                                    <NoMatchRoute />
                                </Route>
                            </Switch>
                        </Box>
                    </Container>
                </Layout>
            </Theme>
        </Router>
    )
}

export default App
