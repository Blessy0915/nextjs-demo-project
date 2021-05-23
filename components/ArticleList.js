import articleStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {
                articles.map(article => <h2>{article.title}</h2>)
            }
        </div>
    )
}

export default ArticleList
