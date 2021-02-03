import { server, isDev } from 'config'
import Meta from 'components/Meta'
import Link from 'next/link'
// import { useRouter } from 'next/router'

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} description={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async context => {
  let res
  if (isDev) {
    res = await fetch(`${server}/api/articles/${context.params.id}`)
  } else {
    res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
    )
  }

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  let res
  if (isDev) {
    res = await fetch(`${server}/api/articles`)
  } else {
    res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  }

  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default article
