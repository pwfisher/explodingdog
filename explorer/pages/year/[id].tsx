import { GetStaticProps, GetStaticPaths } from 'next'
import { PageLayout } from '../../components/PageLayout'
import { drawingYears } from '../../__fixtures__/drawings'
import { getYearDrawingSet } from '../../lib/drawings'
import { Drawing } from '../../types/drawing-models'

const YearPage = ({ year, drawings }: {
  year: number
  drawings?: Drawing[]
}) => {
  return (
    <PageLayout title={`explodingdog ${year}`}>
      {drawings && drawings.map(drawing => (
        <pre key={drawing.id}>{JSON.stringify(drawing, null, 2)}</pre>
      ))}
    </PageLayout>
  )
}

export default YearPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = drawingYears.map(year => ({ params: { id: year.toString() }}))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const year = Number(params?.id)
  return { props: { year, drawings: getYearDrawingSet(year) } }
}
