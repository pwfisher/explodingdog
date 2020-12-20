import { DayPage } from '../../components/DayPage'
import { GetStaticProps, GetStaticPaths } from 'next'
import { drawingDays } from '../../__fixtures__'
import { singleQueryParamValue } from '../../lib/next'

export default DayPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = drawingDays.map(day => ({ params: { id: day }}))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const day = singleQueryParamValue(params?.id)
  return { props: { day } }
}
