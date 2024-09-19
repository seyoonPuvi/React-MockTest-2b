import styled from 'styled-components'

const VisitedCountriesContainer = styled.ul`
  display: flex;
  column-gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
`

const VisitedListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 30rem;
  background-color: #1f1f2f;
  row-gap: 1rem;
`

const Image = styled.img`
  height: 15rem;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

const CountryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`

const RemoveButton = styled.button`
  width: 100px;
  height: 4rem;
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  background-color: transparent;
`
const CountryName = styled.p`
  font-size: 1.6rem;
  color: white;
`
const Text = styled.p`
  text-align: center;
  font-size: 3rem;
  color: white;
  width: 100%;
`

const VisitedCountries = props => {
  const {visitedList, onRemoveCountry} = props

  const updatedList = visitedList.filter(each => each.isVisited)

  const onClickRemoveBtn = id => onRemoveCountry(id)

  const onRenderNoCountryViews = () => <Text>No Countries Visited Yet</Text>

  const onRenderVisitedCountry = () => (
    <>
      {updatedList.map(each => (
        <VisitedListItem key={each.id}>
          <Image src={each.imageUrl} alt="thumbnail" />
          <CountryInfo>
            <CountryName>{each.name}</CountryName>
            <RemoveButton
              type="button"
              onClick={() => onClickRemoveBtn(each.id)}
            >
              Remove
            </RemoveButton>
          </CountryInfo>
        </VisitedListItem>
      ))}
    </>
  )

  return (
    <VisitedCountriesContainer>
      {updatedList.length === 0
        ? onRenderNoCountryViews()
        : onRenderVisitedCountry()}
    </VisitedCountriesContainer>
  )
}

export default VisitedCountries
