import ArticleItem from './ArticleItem'
import PropTypes from 'prop-types'
import style from './ArticleList.module.scss'

const ArticleList = ({ articles }) => {
  return (
    <div className={style.grid}>
      {articles.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}

ArticleList.defaultProps = {
  articles: [],
}

ArticleList.propTypes = {
  articles: PropTypes.array,
}

export default ArticleList
