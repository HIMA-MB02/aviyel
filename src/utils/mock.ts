import { IDocument } from '../redux/reducers/types';

export const initialInvoiceList = [
    {
        id: 2343,
        timestamp: new Date().toUTCString(),
        itemsCount: 2,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2344,
        timestamp: new Date().toUTCString(),
        itemsCount: 3,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2345,
        timestamp: new Date().toUTCString(),
        itemsCount: 4,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2346,
        timestamp: new Date().toUTCString(),
        itemsCount: 5,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2347,
        timestamp: new Date().toUTCString(),
        itemsCount: 6,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2348,
        timestamp: new Date().toUTCString(),
        itemsCount: 7,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2349,
        timestamp: new Date().toUTCString(),
        itemsCount: 8,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2350,
        timestamp: new Date().toUTCString(),
        itemsCount: 9,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2351,
        timestamp: new Date().toUTCString(),
        itemsCount: 10,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2352,
        timestamp: new Date().toUTCString(),
        itemsCount: 11,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2353,
        timestamp: new Date().toUTCString(),
        itemsCount: 12,
        createdBy: 'Himanshu Ganapavarapu',
        amount: 5000
    }
];

export const initialDocumentList: IDocument[] = [
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'Ganapavarapu',
            id: 2346,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Akash Shide',
            customerEmail: 'Ganapavarapu',
            id: 2344,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Siddharth Mundada',
            customerEmail: 'Ganapavarapu',
            id: 2345,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'Ganapavarapu',
            id: 2343,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'Ganapavarapu',
            id: 2347,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Akash Shide',
            customerEmail: 'Ganapavarapu',
            id: 2348,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Siddharth Mundada',
            customerEmail: 'Ganapavarapu',
            id: 2349,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'Ganapavarapu',
            id: 2350,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'Ganapavarapu',
            id: 2351,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'Ganapavarapu',
            id: 2352,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'Ganapavarapu',
            id: 2353,
            timestamp: new Date().toUTCString()
        },
        invoiceItems: [
            {
                id: 1,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 2,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 3,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 4,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ]
    }
];
