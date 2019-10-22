import { request, uri, host, mock } from '@/api'

/**
 * Paths
 */

const paths = {
    count: '%s/count'
}

/**
 * Mock
 */

// getCount
mock.get(uri(paths.count, host), () => {
    return {
        body: {
            count: 100
        }
    }
})

/**
 * API
 */

const api = {
    getCount(callback, errCallback) {
        request.get(uri(paths.count, host)).then(callback, errCallback)
    }
}

export { api }