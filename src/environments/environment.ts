const apiUrl = 'http://localhost:8000/api/'
export const environment = {
    apiUrl: apiUrl,
    registerUser: apiUrl + 'users/create/',
    loginUser: apiUrl + 'token/',
    childList: apiUrl + 'child-list/',
    childListItem: apiUrl + 'child-list-item/',
    childListItemBulk: apiUrl + 'child-list-item/bulk/',
}
