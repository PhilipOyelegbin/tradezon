const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className='bg-gray-800 text-slate-200 text-center py-5'>
      <p>&copy; {year} <a className='text-indigo-500' href="https://philipoyelegbin.github.io" target={"_blank"}>MoonShot</a> :: All rights reserved</p>
    </footer>
  )
}

export default Footer