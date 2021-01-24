import { MyTagPage } from '../../components/MyTagPage'
import { singleQueryParamValue } from '../../lib/next'

export default MyTagPage

MyTagPage.getInitialProps = async ({ query }) => ({ slug: singleQueryParamValue(query.id) })
