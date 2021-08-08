import { ICategory } from "./types"

const getAvailableCategories = (): ICategory[] => {
    return [{
        id: 'category1',
        label: 'Category1'
    }, {
        id: 'category2',
        label: 'Category2'
    }]
}

export { getAvailableCategories }