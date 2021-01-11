import { YearPage } from '../../components/YearPage'
import { GetStaticProps, GetStaticPaths } from 'next'
import { drawingYears } from '../../__fixtures__'
import { singleQueryParamValue } from '../../lib/next'

export default YearPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = drawingYears.map(year => ({ params: { id: `${year}` }}))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const year = singleQueryParamValue(params?.id)
  return { props: { year } }
}
