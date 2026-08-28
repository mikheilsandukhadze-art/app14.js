import { useRouter } from 'next/router'

//our-domain.com/news/something-important

function DetailPage() {
    const router = useRouter();

    const newId = router.query.newsId;

    // send a request to the backend API
    // to fetch the news items with newId

    return (
        <h1>The Detail Page</h1>
    )
}

export default DetailPage;