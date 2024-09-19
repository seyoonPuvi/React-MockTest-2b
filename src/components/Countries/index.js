import {Component} from 'react'
import styled from 'styled-components'
import VisitedCountries from '../VisitedCountries'

const Container = styled.div`
  min-height: 100vh;
  background-color: #161624;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
`

const CountriesListContainer = styled.ul`
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 8px;
  overflow: auto;
  width: 100%;
`

const CountriesListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  padding: 0rem 2rem;
  background-color: #1f1f2f;
  opacity: 0.8;
`

const CountryName = styled.p`
  color: white;
  font-size: 2rem;
`

const Button = styled.button`
    padding:1rem;
    background-color: #3b82f6;
    color white;
    border-radius:8px;
    width:100px;

`

const Heading = styled.h1`
  color: white;
  font-size: 3rem;
`

const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 90%;
`

const VisitedContainer = styled(CountriesContainer)``

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class Countries extends Component {
  state = {
    countriesList: initialCountriesList,
  }

  onClickVisit = country => {
    console.log('clicked')

    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each =>
        each.id === country.id ? {...each, isVisited: true} : each,
      ),
    }))
  }

  onRemoveCountry = countryId => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each =>
        each.id === countryId ? {...each, isVisited: false} : each,
      ),
    }))
  }

  onRenderCountriesList = () => {
    const {countriesList} = this.state

    return (
      <CountriesContainer>
        <Heading>Countries</Heading>
        <CountriesListContainer>
          {countriesList.map(each => (
            <CountriesListItem key={each.id}>
              <CountryName>{each.name}</CountryName>
              {each.isVisited ? (
                <CountryName>Visited</CountryName>
              ) : (
                <Button type="button" onClick={() => this.onClickVisit(each)}>
                  Visit
                </Button>
              )}
            </CountriesListItem>
          ))}
        </CountriesListContainer>
      </CountriesContainer>
    )
  }

  render() {
    const {countriesList} = this.state
    return (
      <Container>
        {this.onRenderCountriesList()}
        <VisitedContainer>
          <Heading>Visited Countries</Heading>
          <VisitedCountries
            visitedList={countriesList}
            onRemoveCountry={this.onRemoveCountry}
          />
        </VisitedContainer>
      </Container>
    )
  }
}

export default Countries
