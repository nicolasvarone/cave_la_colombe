import Header from '../../components/Header/Header'
import TopImage from '../../components/TopImage/TopImage'
import visit2 from '../../images/visit2.jpg'
import {
  Container,
  ContainerSmall,
} from '../../components/Container/Container.styled'
import { Text } from './Visit.styled'
import Contact from '../../components/Contact/Contact'

const Visit = () => {
  return (
    <>
      <Header />
      <TopImage src={visit2} alt='Bateau' />
      <Container>
        <ContainerSmall>
          <Text>
            <h2>Venez nous rencontrer</h2>
            <p>
              Vous pouvez nous rendre visite pour une dégustation sur simple
              rendez-vous (079 679 20 05).
            </p>
            <p>
              Vous pouvez également nous retrouver dans un des évènements
              auxquels nous participons:
            </p>
            <ul>
              <li>
                <span>Lucerne:</span> Wyschiff (du 17 au 20 mars 2022,{' '}
                <a
                  href='https://www.wyschiff.ch/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
              <li>
                <span>Bâle:</span> Wyschiff (du 24 au 27 mars 2022,{' '}
                <a
                  href='https://www.wyschiff.ch/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
              <li>
                <span>Zurich:</span> Wyschiff (dates à venir,{' '}
                <a
                  href='https://www.wyschiff.ch/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.wyschiff.ch
                </a>
                )
              </li>
            </ul>
          </Text>
        </ContainerSmall>
        <Contact />
      </Container>
    </>
  )
}

export default Visit
