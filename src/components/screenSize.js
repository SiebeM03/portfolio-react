const ScreenSize = () => {
  return (
      <div className="absolute z-40 text-xs text-cyan-300 bg-gray-700 opacity-70">
        <span className="max-sm:block hidden">XS (&lt;640px)</span>
        <span className="sm:max-md:block hidden">SM (640px-768px)</span>
        <span className="md:max-lg:block hidden">MD (768px-1024px)</span>
        <span className="lg:max-xl:block hidden">LG (1024px-1280px)</span>
        <span className="xl:max-2xl:block hidden">XL (1280px-1536px)</span>
        <span className="2xl:block hidden">2XL (&gt;1536px)</span>
      </div>
  )
}
export default ScreenSize;