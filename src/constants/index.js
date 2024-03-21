import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {  adidas,reebok,puma,converse,nike,  featuredMen, featuredUnisex, featuredWomen,ourStore1, ourStore2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
    { href: "#cart", label: "Cart"},
];

export const featuredProducts = [
    {
        imgURL : featuredMen,
        name : "Men's Air Max",
    },
    {
        imgURL : featuredWomen,
        name : "Women's Air Max",
    },
    {
        imgURL : featuredUnisex,
        name : "RS-X Unisex Sneakers",
    },
]

export const topBrands = [
    {
        imgURL: adidas,
        name : 'adidas',
    },
    {
        imgURL: nike,
        name : 'Nike',
    },

    {
        imgURL: puma,
        name : 'Puma',
    },
    {
        imgURL: reebok,
        name : 'Reebok',
    },
    {
        imgURL: adidas,
        name : 'Fila',
    },
    {
        imgURL: converse,
        name : 'Converse',
    },
]


export const ourStores = [
    {
        imgURL : ourStore1,
        name : "Mumbai",
    },
    {
        imgURL : ourStore2,
        name : "Delhi",

        
    },
   
]


export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];


 
   



export const footerLinks = [
    {
        title: "Company Info",
        links: [
            { name: "News", link: "/" },
            { name: "Careers", link: "/" },
            { name: "Investors", link: "/" },
            { name: "Sustainability", link: "/" },
        ],
    },
    {
        title: "Products",
        links: [
            { name: "Outlet Sale", link: "/" },
            { name: "New Arrivals", link: "/" },
            { name: "Special Offer", link: "/" },
            { name: "Flat 50% Off!", link: "/" },
        ],
    },
    {
        title: "Quick Links",
        links: [
            { name: "About us", link: "/" },
            { name: "Terms and Conditions", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Return Policy", link: "/" },
            { name: "Privacy Policy", link: "/" },
            { name: "Payment Policy", link: "/" },
        ],
    },
    {
        title: "Collections",
        links: [
            { name: "Ultraboost", link: "/" },
            { name: "Superstar", link: "/" },
            { name: "NMD", link: "/" },
            { name: "Stan Smith", link: "/" },
            { name: "Sustainability", link: "/" },
            { name: "Predator", link: "/" },
            { name: "Parley", link: "/" },
            { name: "adicolor", link: "/" },
        ],
    },
    {
        title: "For Business Inquiries",
        links: [
            { name: "admin@stray.com", link: "mailto:admin@stray.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
    {
        title: "support",
        links: [
            { name: "Help", link: "/" },
            { name: "Customer Services", link: "/" },
            { name: "Returns and Exchanges", link: "/" },
            { name: "Shipping", link: "/" },
            { name: "Order Tracker", link: "/" },
            { name: "strayclub Terms and Conditions", link: "/" },
        ],
    },
];
export const ssFooterLinks = [
    {
        title : 'Delivery'
    },
    {
        title : 'Order Tracker'
    },
    {
        title : 'Store Finder'
    },
    {
        title : 'strayclub Terms and Conditons'
    },
    {
        title : 'Returns and Refunds'
    },
    {
        title : 'Help'
    },
    {
        title : 'strayclub'
    },
]

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];