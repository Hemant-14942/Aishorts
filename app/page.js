import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import Navbar from "@/components/Navbar"

// type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }) {
  return (
    <>
    {/* <Navbar/> */}
     <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
    </>
   
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SliderDemo />
    </div>
  )
}