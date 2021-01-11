import { TagPage } from '../../components/TagPage'
import { GetStaticProps, GetStaticPaths } from 'next'
import { tags } from '../../__fixtures__'
import { singleQueryParamValue } from '../../lib/next'
import { getTagSlug, getTagFromSlug } from '../../lib/tags'

export default TagPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = tags.map(tag => ({ params: { id: getTagSlug(tag) }}))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = singleQueryParamValue(params?.id)
  return { props: { tag: getTagFromSlug(slug) } }
}
