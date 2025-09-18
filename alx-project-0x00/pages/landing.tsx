import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <main className="flex flex-col items-center gap-8 p-10">
      <h1 className="text-2xl font-bold mb-4">Button Variants</h1>

      {/* --- Size Variants --- */}
      <div className="flex gap-4 flex-wrap">
        {/* small: less padding */}
        <Button title="Small" className="text-sm px-3 py-1" />
        {/* medium: default */}
        <Button title="Medium" className="text-base px-5 py-2" />
        {/* large: more padding */}
        <Button title="Large" className="text-lg px-8 py-4" />
      </div>

      {/* --- Shape Variants --- */}
      <div className="flex gap-4 flex-wrap">
        <Button title="Rounded-sm" className="px-5 py-2 rounded-sm" />
        <Button title="Rounded-md" className="px-5 py-2 rounded-md" />
        <Button title="Rounded-full" className="px-5 py-2 rounded-full" />
      </div>

      {/* --- Fixed width/height example --- */}
      <div className="flex gap-4 flex-wrap">
        <Button title="Fixed W/H"
          className="w-40 h-12 text-base rounded-md" />
      </div>
    </main>
    </div>
  )
}
export default Landing
