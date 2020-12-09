import { DayPage } from '../../components/DayPage'
import { GetStaticProps, GetStaticPaths } from 'next'
import { dayDrawingSets, drawingDays } from '../../__fixtures__/drawings'
import { singleQueryParamValue } from '../../lib/next'

export default DayPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = drawingDays.map(day => ({ params: { id: day.toString() }}))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const day = singleQueryParamValue(params?.id)
  return { props: { day, drawings: dayDrawingSets[day] } }
}
