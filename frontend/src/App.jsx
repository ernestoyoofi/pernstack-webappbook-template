import { Toaster, toast } from "sonner"
import CreateBook from "./components/content/create-book"
import { useEffect, useState } from "react"
import defaultAxios from "./lib/axios-adapter"
import CardBook from "./components/content/card-book"

function Homepage() {
  const [data, getData] = useState({ loading: false, data: {} })

  async function LoadDataList({ page = 1, limit = 50 } = {}) {
    if(data.loading) return;
    getData({ loading: true, data: data })
    try {
      console.log("[List Book]:", { page, limit })
      const queryRequest = new URLSearchParams({
        page: parseInt(page), limit: parseInt(limit)
      })
      const urlRequest = `/api/v1/books?${queryRequest.toString()}`
      const dataRequest = await defaultAxios.get(urlRequest)
      console.log("[List Book > Result]:", dataRequest)
      // Success?
      getData({ loading: false, data: dataRequest.data })
    } catch (e) {
      toast.error("Client Logic Error", {
        description: String(e.stack||"")
      })
      console.error("Error:", e)
    }
  }

  useEffect(() => {
    LoadDataList({}) // Init
  }, [])

  return <div className="w-full max-w-2xl m-auto">
    <div className="w-full px-5 py-4.5 sticky top-0 left-0 z-100 bg-white/80">
      <CreateBook refresh={LoadDataList}/>
    </div>
    <div className="w-full px-5 py-4.5 pt-2">
      {data?.data?.data?.list?.map((items, key) => (
        <CardBook data={items} key={key} refresh={LoadDataList}/>
      ))}
    </div>
  </div>
}

export default function App() {
  return <>
    <Toaster />
    <Homepage />
  </>
}