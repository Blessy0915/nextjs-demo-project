import Link from 'next/link'

const Article = ({article}) => {
    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <br />

            <Link href="/">
                <a>Go back</a>
            </Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props : {
            article
        }
    }
}

export const getStaticPaths = async () => {
    //get all posts
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()

    //generate ids array
    const ids = articles.map(article => article.id)

    //generate paths
    const paths = ids.map(id => ({params : {id : id.toString()}}))

    return {
        paths,
        fallback : false
    }
}
export default Article
