import { IDocument, IInvoiceList } from '../redux/reducers/types';

export const initialInvoiceList: IInvoiceList[] = [
    {
        id: 2343,
        timestamp: new Date().toUTCString(),
        itemsCount: 2,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2344,
        timestamp: new Date().toUTCString(),
        itemsCount: 3,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2345,
        timestamp: new Date().toUTCString(),
        itemsCount: 4,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2346,
        timestamp: new Date().toUTCString(),
        itemsCount: 5,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2347,
        timestamp: new Date().toUTCString(),
        itemsCount: 6,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2348,
        timestamp: new Date().toUTCString(),
        itemsCount: 7,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2349,
        timestamp: new Date().toUTCString(),
        itemsCount: 8,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2350,
        timestamp: new Date().toUTCString(),
        itemsCount: 9,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2351,
        timestamp: new Date().toUTCString(),
        itemsCount: 10,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2352,
        timestamp: new Date().toUTCString(),
        itemsCount: 11,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    },
    {
        id: 2353,
        timestamp: new Date().toUTCString(),
        itemsCount: 12,
        customerName: 'Himanshu Ganapavarapu',
        amount: 5000
    }
];

export const initialDocumentList: IDocument[] = [
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
            },
            {
                id: 5,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 6,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 7,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 8,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            },
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
            },
            {
                id: 5,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 6,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 7,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 8,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            },
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
            },
            {
                id: 5,
                itemName: 'Prawn and Chicken Sui Mai',
                itemQuantity: 2,
                itemUnitPrice: 300,
                itemPrice: 600
            },
            {
                id: 6,
                itemName: 'Long Island Ice Tea',
                itemQuantity: 2,
                itemUnitPrice: 600,
                itemPrice: 1200
            },
            {
                id: 7,
                itemName: 'Chicken Tandoori',
                itemQuantity: 2,
                itemUnitPrice: 450,
                itemPrice: 900
            },
            {
                id: 8,
                itemName: 'Al Fungi Pizza',
                itemQuantity: 1,
                itemUnitPrice: 650,
                itemPrice: 650
            }
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Akash Shinde',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Siddharth Mundada',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Akash Shinde',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Siddharth Mundada',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    },
    {
        meta: {
            customerName: 'Himanshu Ganapavarapu',
            customerEmail: 'himanshu.ganpa@gmail.com',
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
        ],
        invoiceTotals: {
            subTotal: 123123,
            tax: 545,
            discount: 545,
            grandTotal: 314354135
        }
    }
];
