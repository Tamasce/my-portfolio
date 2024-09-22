import React from "react"
import { companies, workExperience } from "@/data"
import { Button } from "./ui/MovingBorder"
import { LinkPreview } from "./ui/LinkPreview"

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
    <h1 className="heading">
      My {' '} 
      <span className="text-purple">
        work experience
      </span>
    </h1>
    <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
      {workExperience.map((card)=>(
        <Button key={card.id} borderRadius="1.75rem" className="flex-1 text-white border-neutral-200 dark:border-slate-800" duration={Math.floor(Math.random()* 10000 + 10000)}>
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16"/>
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                {card.title}
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold"> 
                {card.desc}
              </p>
            </div>
          </div>
        </Button>
      ))}
    </div>
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <LinkPreview url={company.url}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className={`md:w-10 w-5 ${company.id === 3 && 'md:w-[65px] w-[40px]'} ${company.id === 2 && 'md:w-[200px] w-[150px]'}`}
                />

                {company.id !== 3 && company.id !== 2 && (<img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className={`md:w-24 w-20 ${company.id === 5 && 'md:w-[170px] w-[150px]'}`}
                />)}
              </div>
              </LinkPreview>
            </React.Fragment>
          ))}
        </div>
    </div>
  )
}

export default Experience
