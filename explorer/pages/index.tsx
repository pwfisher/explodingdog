import Link from 'next/link'
import { PageLayout } from '../components/PageLayout'
import { drawingYears } from '../__fixtures__/drawings'

const IndexPage = () => (
  <PageLayout title="explodingdog">

    <section className="intro">
      <h2>hi my name is Sam,</h2>
      <p>From 2000 to 2015 I drew pictures from titles you sent me. It was fun. Thank you.</p>
      <p>You can find my drawings on <a href="https://www.instagram.com/explodingdog_sam/">instagram</a> right now.</p>
      <p><a href="http://www.buildingaworld.com">The gift shop is open</a></p>
    </section>

    <section className="drawings">
      <h2>drawings by year:</h2>
      <ol className="years">
        {drawingYears.map(year => (
          <li key={year}>
            <Link href="/year/[id]" as={`/year/${year}`}>
              <a>{year}</a>
            </Link>
          </li>
        ))}
      </ol>
    </section>

    <section className="search">
      <form method="get" action="http://www.google.com/search">
        <input type="hidden" name="sitesearch" value="explodingdog.com" />
        <input type="hidden" name="domains" value="explodingdog.com" />
        <input type="hidden" name="ie" value="UTF-8" />
        <input type="hidden" name="oe" value="UTF-8" />
        <input type="text" name="q" size={25} maxLength={255} />{' '}
        <input type="submit" name="btnG" value="search drawings with Google" />
      </form>
    </section>

  </PageLayout>
)

export default IndexPage
