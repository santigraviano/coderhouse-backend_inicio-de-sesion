const { default: CartModel } = await import(`../models/cart/cart-${process.env.DB}.js`)
const { default: ProductModel } = await import(`../models/product/product-${process.env.DB}.js`)
const { default: MessageModel } = await import(`../models/message/message-${process.env.DB}.js`)
const { default: UserModel } = await import(`../models/user/user-${process.env.DB}.js`)

export const Cart = new CartModel()
export const Product = new ProductModel()
export const Message = new MessageModel()
export const User = new UserModel()