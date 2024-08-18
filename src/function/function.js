import apiAuth from "./axiosAuth"

export const checkMerekById = async (id) => {
    const responseMerek = await apiAuth.get('/brand/show');
    const findIndex = responseMerek.data.data?.brand.findIndex(i => i.id === id)
    if (findIndex !== -1) {
        return responseMerek.data.data.brand[findIndex]?.name
    } else {
        return "None"
    }
}

export const checkCategoryById = async (id) => {
    const responseCategory = await apiAuth.get('/categories/show');
    const findIndex = responseCategory.data.data?.categories.findIndex(i => i.id === id)
    if (findIndex !== -1) {
        return responseCategory.data.data.categories[findIndex]?.name
    } else {
        return "None"
    }
}

export const checkVendorById = async (id) => {
    const responseVendor = await apiAuth.get('/vendor/show');
    const findIndex = responseVendor.data.data?.vendors.findIndex(i => i.id === id)
    if (findIndex !== -1) {
        return responseVendor.data.data.vendors[findIndex]?.name
    } else {
        return "None"
    }
}