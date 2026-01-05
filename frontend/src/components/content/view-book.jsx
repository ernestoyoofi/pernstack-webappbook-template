import { Drawer } from "vaul"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { useState } from "react"
import CoverImage from "./cover-image"
import EditBook from "./edit-book"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "../ui/dialog"

export default function ViewBook({ refresh = null, data = {} }) {
  const [openDialog, setOpenDialog] = useState(false)
  const [openWarning, setOpenWarning] = useState(false)
  const [isLoading, setLoading] = useState(null)
  const [databook, setDatabook] = useState({ isLoading: true, data: { detail: data } })

  async function GetDetailBook() {
    if(!!isLoading) return;
    setLoading("info")
    try {
      // ... your code
    } catch (e) {
      toast.error("Client Logic Error", {
        description: String(e.stack||"")
      })
      console.error("Error:", e)
    } finally {
      setTimeout(() => { setLoading(null) }, 500)
    }
  }

  async function DeleteBook() {
    if(!!isLoading) return;
    setLoading("delete")
    try {
      console.log("[Delete A Book Permanently]:", data)
      // Your code...
      // ...
      // ...
      // Succes?
      if(typeof refresh === "function") {
        refresh() // Refresh data
      }
      setOpenDialog(false)
      setOpenWarning(false)
    } catch (e) {
      toast.error("Client Logic Error", {
        description: String(e.stack||"")
      })
      console.error("Error:", e)
    } finally {
      setTimeout(() => { setLoading(null) }, 500)
    }
  }

  async function SoftDeleteBook() {
    if(!!isLoading) return;
    setLoading("delete-soft")
    try {
      console.log("[Delete A Book]:", data)
      // Your code...
      // ...
      // ...
      // Succes?
      if(typeof refresh === "function") {
        refresh() // Refresh data
      }
      setOpenDialog(false)
      setOpenWarning(false)
    } catch (e) {
      toast.error("Client Logic Error", {
        description: String(e.stack||"")
      })
      console.error("Error:", e)
    } finally {
      setTimeout(() => { setLoading(null) }, 500)
    }
  }

  return <>
    <Dialog open={openWarning} onOpenChange={setOpenWarning}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete it?</DialogTitle>
          <DialogDescription>
            There are two types of deletion actions. You can use soft delete, where the data is not deleted immediately. The data still exists but the items cannot be found. If you want to delete it permanently and cannot be undone, use <b>"Permanent Delete."</b> For regular deletion, just use <b>"Delete."</b>
          </DialogDescription>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="button" onClick={SoftDeleteBook} variant="destructive">Delete</Button>
            <Button type="button" onClick={DeleteBook} variant="destructive">Delete Permanent</Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    <Drawer.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Drawer.Trigger asChild>
        <Button variant="outline" onClick={() => { GetDetailBook() }} className="cursor-pointer">
          <span>Info</span>
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-110" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] mt-24 h-[80%] fixed bottom-0 left-0 right-0 outline-none max-w-2xl m-auto py-2.5 border-t border-neutral-100 z-110">
          <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-2" />
          <div className="w-full max-w-2xl mx-auto pb-10 overflow-y-auto px-5">
            <Drawer.Title className="font-bold my-2 mb-5 text-gray-900 text-xl">Detail book</Drawer.Title>
            <div className="w-full flex flex-wrap my-3">
              <div className="w-full smallcase:w-[150px] flex items-center justify-center">
                <div className="w-[150px]">
                  <CoverImage
                    src={databook?.data?.detail?.image||""}
                    alt={databook?.data?.detail?.title||""}
                    className="rounded-md shadow-md"
                  />
                </div>
              </div>
              <div className="w-full smallcase:w-[calc(100%_-_150px)] px-3.5 py-1.5 smallcase:pl-3.5 max-smallcase:mt-6.5">
                <h2 className="mb-2 font-semibold text-2xl">{databook?.data?.detail?.title||""}</h2>
                <small className="block font-medium text-blue-600">{databook?.detail?.data?.author||""}</small>
                <p className="mt-2">{databook?.data?.detail?.description||""}</p>
                <div className="w-full flex gap-2 mt-3.5">
                  <Button className="cursor-pointer" onClick={() => { window.open(databook?.data?.detail?.url_page||"") }}>
                    <span>Read</span>
                  </Button>
                  <EditBook data_book={databook?.data?.data} refresh={refresh}/>
                  <Button variant="destructive" className="cursor-pointer" onClick={() => { setOpenWarning(true) }}>
                    <span>Delete A Book</span>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="text-left py-1">Author</td>
                    <td className="text-right py-1">{databook?.data?.detail?.author||"Loading..."}</td>
                  </tr>
                  <tr>
                    <td className="text-left py-1">Publisher</td>
                    <td className="text-right py-1">{databook?.data?.detail?.publisher||"Loading..."}</td>
                  </tr>
                  <tr>
                    <td className="text-left py-1">Year Publish</td>
                    <td className="text-right py-1">{databook?.data?.detail?.year_publish||"Loading..."}</td>
                  </tr>
                  <tr>
                    <td className="text-left py-1">Total Page</td>
                    <td className="text-right py-1">{databook?.data?.detail?.total_page||"Loading..."}</td>
                  </tr>
                  <tr>
                    <td className="text-left py-1">Language</td>
                    <td className="text-right py-1">{databook?.data?.detail?.language||"Loading..."}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  </>
}