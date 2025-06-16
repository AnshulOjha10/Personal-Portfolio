import React from 'react'

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
  <div>
    <div className="mb-4 text-center" >
<h1 className="text-2xl font-bold">Anshul Ojha</h1>
<p className="text-gray-400">anshulojha091@gmail.com</p>
</div> 

<footer className="bg-gray-900 text-gray-300 py-4 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="mb-2 md:mb-0 flex gap-3 items-center justify-between">
      <p className="text-sm">© {year} Anshul Ojha. All rights reserved.</p>

    </div>
    
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
      <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
      <a href="#" className="text-sm hover:text-white transition-colors">Connect with me</a>
    </div>
  </div>
</footer>
</div>  
  )
}

export default Footer


