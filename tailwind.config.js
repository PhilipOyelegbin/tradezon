/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('https://img.freepik.com/free-photo/happy-smiling-woman-pink-shirt-sofa-home-among-colorful-shopping-bags-holding-credit-card-paying-online-laptop_285396-9238.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
        hero2: "url('https://img.freepik.com/free-photo/african-female-happily-shopping-online-using-laptop-smartphone-while-holding-her-credit-card_181624-34979.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
        hero3: "url('https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
        hero: "url('https://img.freepik.com/free-photo/closeup-shot-two-pretty-afro-american-girls-using-their-phones-while-holding-shopping-bags_181624-46178.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')"
      }
    },
  },
  plugins: [],
}
