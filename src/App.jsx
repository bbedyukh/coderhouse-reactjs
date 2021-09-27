import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { Layout } from './components/Layout/Layout'
import { Theme } from './components/Theme/Theme'
import { ItemListContainer } from './components/Products/ItemListContainer'
import { ItemDetailContainer } from './components/Products/ItemDetailContainer'
import { Cart } from './components/Cart/Cart'
import { NoMatchRoute } from './components/NoMatchRoute'
import { CartContextProvider } from './contexts/CartContext'
import { LoadingContextProvider } from './contexts/LoadingContext'

function App() {
    return (
        <CartContextProvider>
            <LoadingContextProvider>
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
                                        <Route
                                            exact
                                            path='/cart'
                                            component={Cart}
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
            </LoadingContextProvider>
        </CartContextProvider>
    )
}

export default App
