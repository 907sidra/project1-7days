import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="px-5">
    <h2 className="font-bold mb-6">Price</h2>
     <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[90%] mx-auto mb-2 " , className)}
      {...props}
    />
    <div className="flex justify-between items-center">
        <h1 className="font-bold">$50</h1>
        <h1 className="font-bold">$100</h1>
    </div>
   </div>
  )
}
