import Link from 'next/link'
import styles from './ArticleItem.module.scss'
import PropTypes from 'prop-types'

const ArticleItem = ({ article }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} $rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

ArticleItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
}

export default ArticleItem
