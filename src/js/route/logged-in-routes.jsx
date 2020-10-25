import * as ROUTES from '../constant/routes'
import NAV_ROUTES from '../constant/nav-routes'
import React, { Suspense } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { connect } from 'react-redux'
import Loader from '../view/component/loader'
import NavigationBar from '../view/component/navbar'
import * as Components from './component-routes'

const LoggedInRoutes = ({ user }) =>
  (<Container>
    <NavigationBar
      links={NAV_ROUTES}
      user={user}
    />
    <Row>
      <Col>
        <Card className='mb-5'>
          <CardBody>
            <Suspense fallback={<Loader />}>
              <Switch>
              <Route
                component={Components.SmartWodHome}
                exact
                key={ROUTES.SMART_WOD_HOME}
                path={ROUTES.SMART_WOD_HOME}
              />
                {NAV_ROUTES
                  .map(({ component, href }, index) =>
                   <Route
                        component={Components[component]}
                        exact
                        key={index}
                        path={href}
                      />
                  )}
              </Switch>
            </Suspense>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>)

export default withRouter(connect(
  (state) => ({
  })
)(LoggedInRoutes))
