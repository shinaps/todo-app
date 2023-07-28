type Fetcher = (...args: [RequestInfo, RequestInit?]) => Promise<any>

const fetcher: Fetcher = (...args) => fetch(...args).then((res) => res.json())

export default fetcher
