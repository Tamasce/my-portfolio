import { companies, testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards"


const Education = () => {
  return (
    <div className="py-20" id="education">
      <h1 className="heading">
        My {' '} 
        <span className="text-purple">
          Academic Education
        </span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 relative">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" className="z-10"/>
      </div>
    </div>
  )
}

export default Education