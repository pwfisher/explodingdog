import Link from 'next/link'
import { PageLayout } from './PageLayout'
import { drawingYears } from '../__fixtures__'
import styled from 'styled-components'

export const HomePage = () => (
  <PageLayout title="explodingdog">

    <IntroSection>
      <h2>hi my name is Sam,</h2>
      <p>From 2000 to 2015 I drew pictures from titles you sent me. It was fun. Thank you.</p>
      <p>You can find my drawings on <a href="https://www.instagram.com/explodingdog_sam/">instagram</a> right now.</p>
      <p><a href="http://www.buildingaworld.com">The gift shop is open</a></p>
    </IntroSection>

    <DrawingsByYearSection>
      <h2>drawings by year:</h2>
      <ol>
        {drawingYears.sort().reverse().map(year => (
          <li key={year}>
            <Link href="/year/[id]" as={`/year/${year}`}>
              <a>{year}</a>
            </Link>
          </li>
        ))}
      </ol>
    </DrawingsByYearSection>

    <SearchSection>
      <form method="get" action="http://www.google.com/search">
        <input type="hidden" name="sitesearch" value="explodingdog.com" />
        <input type="hidden" name="domains" value="explodingdog.com" />
        <input type="hidden" name="ie" value="UTF-8" />
        <input type="hidden" name="oe" value="UTF-8" />
        <input type="text" name="q" size={25} maxLength={255} />{' '}
        <input type="submit" name="btnG" value="search drawings with Google" />
      </form>
    </SearchSection>

  </PageLayout>
)

const Section = styled.section`
  padding: 16px 32px;

  > h2 {
    font-size: 24px;
  }
`

const IntroSection = styled(Section).attrs({ className: 'Explorer__HomePage__IntroSection'})`
  > p {
    font-size: 19px;
    margin: 16px 0 16px 24px;
  }
`

const DrawingsByYearSection = styled(Section).attrs({ className: 'Explorer__HomePage__DrawingsByYearSection'})`
  ol {
    margin-left: 8px;
  }

  li {
    display: inline-block;
    font-size: 64px;
    font-weight: 600;
    margin: 6px 12px;
  }
`

const SearchSection = styled(Section).attrs({ className: 'Explorer__HomePage__SearchSection'})`
  form {
    margin-left: 20px;
  }
`
