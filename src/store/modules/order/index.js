export default {
    namespaced: true,
    state: {
        products: [
            {
                id: 1,
                name: 'iPhone 12 Pro Max Chính Hãng',
                price: 32990000,
                quantity: 566,
            },
            {
                id: 2,
                name: 'iPhone 12 Chính Hãng (VN/A)',
                price: 21790000,
                quantity: 123,
            },
            {
                id: 3,
                name: 'iPhone 11 Chính hãng',
                price: 16690000,
                quantity: 5,
            },
            {
                id: 4,
                name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                price: 12190000,
                quantity: 1023,
            },
            {
                id: 5,
                name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                price: 26500000,
                quantity: 6,
            }
        ],
        Title: 'Bảng hóa đơn'
    },

    getter: {

    },

    mutations: {
        editTitle(state) {
            state.Title = 'Tiêu đề đã được chỉnh sửa'
        }
    }
}