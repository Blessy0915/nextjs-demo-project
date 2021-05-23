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

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props : {
            article
        }
    }
}
export default Article