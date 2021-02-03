import Head from 'next/head'
import PropTypes from 'prop-types'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewpoint' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'WebDev News',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev',
}

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
}

export default Meta
