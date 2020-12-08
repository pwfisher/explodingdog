import { DrawingPage } from '../../components/DrawingPage'
import { GetStaticProps, GetStaticPaths } from 'next'
import { drawings } from '../../__fixtures__/drawings'
import { getDrawingBySlug, getDrawingYear } from '../../lib/drawings'
import { singleQueryParamValue } from '../../lib/next'

export default DrawingPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = drawings.map(({ slug }) => ({ params: { id: slug }}))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = singleQueryParamValue(params?.id)
  const drawing = getDrawingBySlug(slug) || getDrawingBySlug('something')
  const year = getDrawingYear(drawing!)
  return { props: { year, drawing } }
}
