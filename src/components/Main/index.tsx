import {
  FormEvent,
  useEffect,
  useState,
} from "react";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import {
  Container,
  DivWrapper,
  SearchArea,
  CardContainer,
  Card,
  DetailsContainer,
  Button,
  ImageDiv,
  InformationContainer,
  ImgInformationContainer,
  ListDetails,
  BorderCountries,
} from "./styles";

interface CountrieTips {
  flag: string,
  name: string,
  capital: string,
  region: string,
  population: number,
  nativeName: string,
  subregion: string,
  topLevelDomain: string,
  currencies: [
    {
      name: string
    },
  ],
  languages: [
    {
      name: string,
    }
  ],
  borders: string[],
}

export default function Main() {
  const [newCountrie, setNewCountrie] = useState("");
  const [countries, setCountries] = useState<CountrieTips[]>([]);
  const [isDetailsActivated, setIsDetailsActivated] = useState(false);
  const [notFound, setNotFound] = useState(false);

  async function getCountrie(): Promise<void> {
    setNotFound(false);
    setIsDetailsActivated(false);

    const response = await api.get<CountrieTips[]>("/all");
    const countrie = response.data;

    setCountries(countrie);
  }

  useEffect(() => {
    getCountrie();
  }, []);

  async function searchCountry(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    setNotFound(false);

    if (!newCountrie) {
      getCountrie();
      return;
    }

    if (countries) {
      setCountries([]);
    }

    try {
      const response = await api.get<CountrieTips[]>(`/name/${newCountrie}`);
      const countrie = response.data;

      setCountries(countrie);
      setNewCountrie("");
    } catch (err) {
      setNotFound(true);
    }
  }

  async function goToDetails(e: string | null): Promise<void> {
    setIsDetailsActivated(true);

    if (e) {
      try {
        const response = await api.get<CountrieTips[]>(`/name/${e}`);
        const countrie = response.data;

        setCountries(countrie);
      } catch (err) {
        console.error(err);
      }
    }
  }

  async function closeDetails(): Promise<void> {
    await getCountrie();
    setIsDetailsActivated(false);
  }

  async function filterByRegion(e: string): Promise<void> {
    try {
      const response = await api.get<CountrieTips[]>(`/region/${e}`);
      const countrie = response.data;

      setCountries(countrie);
      setNewCountrie("");
    } catch (err) {
      setNotFound(true);
    }
  }

  return (
    <Container>
      <DivWrapper>
        {isDetailsActivated ? (
          <DetailsContainer>
            <Button type="button" onClick={closeDetails}>
              <FiArrowLeft />
              Back
            </Button>

            {countries.map((country) => {
              const { languages, borders } = country;

              return (
                <ImgInformationContainer key={country.name}>
                  <ImageDiv>
                    <img src={country.flag} alt="Flag" />
                  </ImageDiv>
                  <InformationContainer>
                    <h3>{country.name}</h3>
                    <ListDetails>
                      <p>
                        <strong>Native Name: </strong>
                        {country.nativeName}
                      </p>
                      <p>
                        <strong>Population: </strong>
                        {country.population}
                      </p>
                      <p>
                        <strong>Region: </strong>
                        {country.region}
                      </p>
                      <p>
                        <strong>Sub Region: </strong>
                        {country.subregion}
                      </p>
                      <p>
                        <strong>Capital: </strong>
                        {country.capital}
                      </p>
                      <p>
                        <strong>Top level Domain: </strong>
                        {country.topLevelDomain}
                      </p>
                      <p>
                        <strong>Currencies: </strong>
                        {country.currencies[0].name}
                      </p>
                      <div>
                        <strong>Languages: </strong>
                        {languages.map((lang) => (
                          <p>
                            {lang.name}
                          </p>
                        ))}
                      </div>
                    </ListDetails>
                    <BorderCountries>
                      <strong>Border Countries: </strong>
                      {borders.map((border) => (
                        <p>
                          {border}
                        </p>
                      ))}
                    </BorderCountries>
                  </InformationContainer>
                </ImgInformationContainer>
              );
            })}

          </DetailsContainer>
        ) : (
          <>
            <SearchArea>
              <div>
                <FiSearch />
                <form onSubmit={searchCountry}>
                  <input
                    type="text"
                    placeholder="Search for a country..."
                    onChange={(e) => setNewCountrie(e.target.value)}
                  />
                  <button type="submit">submit</button>
                </form>
              </div>

              <select name="country" onChange={(e) => filterByRegion(e.target.value)}>
                <option disabled selected value="0">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </SearchArea>

            <CardContainer>
              {notFound ? (<h3>Not found :(</h3>) : (
                countries.map((countrie) => (
                  <Card
                    key={countrie.name}
                    id={countrie.name}
                    onClick={(e) => goToDetails(e.currentTarget.getAttribute("id"))}
                  >
                    <div>
                      <img src={countrie.flag} alt="Flag" />
                    </div>

                    <div>
                      <h3>{countrie.name}</h3>
                      <p>
                        <strong>Population: </strong>
                        {countrie.population}
                      </p>
                      <p>
                        <strong>Region: </strong>
                        {countrie.region}
                      </p>
                      <p>
                        <strong>Capital: </strong>
                        {countrie.capital}
                      </p>
                    </div>
                  </Card>
                ))
              )}
            </CardContainer>
          </>
        )}
      </DivWrapper>
    </Container>
  );
}
