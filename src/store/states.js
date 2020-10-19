export const INDEX = {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    isData: [
        {
            title: '租房推荐',
            rows: []
        },
        {
            title: '售房推荐',
            rows: []
        },
        {
            title: '新房推荐',
            rows: []
        }
    ]
}

export const HOUSE = {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
    isData: {
        rows: [],
        pageIndex: 1,
        totalCount: 0
    }
}