import CoverImage from "./cover-image"
import { Button } from "../ui/button"
import ViewBook from "./view-book"

export default function CardBook({ refresh = null, data = {} }) {
  return <div className="w-full flex flex-wrap my-3">
    <div className="w-full smallcase:w-[150px] flex items-center justify-center">
      <div className="w-[150px]">
        <CoverImage
          src={data?.image||""}
          alt={data?.title||""}
          className="rounded-md shadow-md"
        />
      </div>
    </div>
    <div className="w-full smallcase:w-[calc(100%_-_150px)] px-3.5 py-1.5 smallcase:pl-3.5 max-smallcase:mt-6.5">
      <h2 className="mb-2 font-semibold text-2xl">{data?.title||""}</h2>
      <small className="block font-medium text-blue-600">{data?.author||""}</small>
      <p className="mt-2">{data?.description||""}</p>
      <div className="w-full flex gap-2 mt-3.5">
        <ViewBook data={data} refresh={refresh}/>
        <Button className="cursor-pointer" onClick={() => { window.open(data.url_page||"") }}>
          <span>Read</span>
        </Button>
      </div>
    </div>
  </div>
}