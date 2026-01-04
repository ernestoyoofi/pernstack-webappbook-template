import { useForm } from "react-hook-form"
import { Drawer } from "vaul"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { BookIcon, PenIcon, PlusIcon } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"

export default function EditBook({ refresh = null, data_book = {} }) {
  const [isLoading, setLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  async function updateABook(data) {
    if(isLoading) return;
    setLoading(true)
    try {
      console.log("[Update A Book]:", data)
      // Your code...
      // ...
      // ...
      // Succes?
      if(typeof refresh === "function") {
        refresh() // Refresh data
      }
      reset() // Reset Form
      setOpenDialog(false)
    } catch (e) {
      toast.error("Client Logic Error", {
        description: String(e.stack||"")
      })
      console.error("Error:", e)
    } finally {
      setTimeout(() => { setLoading(false) }, 500)
    }
  }

  return <>
    <Drawer.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Drawer.Trigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <span>Edit A Book</span>
          <PenIcon />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-110" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] mt-24 h-[80%] fixed bottom-0 left-0 right-0 outline-none max-w-2xl m-auto py-2.5 border-t border-neutral-100 z-110">
          <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-2" />
          <div className="w-full max-w-2xl mx-auto pb-10 overflow-y-auto px-5">
            <Drawer.Title className="font-bold my-2 mb-5 text-gray-900 text-xl">Edit A Book.</Drawer.Title>
            <form onSubmit={handleSubmit(updateABook)}>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">Subject</span>
                <Input
                  {...register("title", { required: "Subject require" })}
                  defaultValue={data_book.title}
                  className={errors.title ? "border-red-200" : ""}
                  placeholder="Title..."
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
              </label>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">Description</span>
                <Textarea
                  className={`min-h-24 ${errors.description ? "border-red-200" : ""}`}
                  {...register("description", { required: "Description require" })}
                  defaultValue={data_book.description||""}
                  placeholder="Some a description..."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
              </label>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">Image URL</span>
                <Input
                  {...register("image", { required: "Image URL require" })}
                  defaultValue={data_book.image||""}
                  className={errors.image ? "border-red-200" : ""}
                  placeholder="https://example.com/image.png"
                />
                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
              </label>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">Author</span>
                <Input
                  {...register("author", { required: "Author require" })}
                  defaultValue={data_book.author||""}
                  className={errors.author ? "border-red-200" : ""}
                  placeholder="John Doe"
                />
                {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>}
              </label>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">Publisher</span>
                <Input
                  {...register("publisher", { required: "Publisher require" })}
                  defaultValue={data_book.publisher||""}
                  className={errors.publisher ? "border-red-200" : ""}
                  placeholder="John Doe"
                />
                {errors.publisher && <p className="text-red-500 text-sm mt-1">{errors.publisher.message}</p>}
              </label>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">Language</span>
                <Input
                  {...register("language", { required: "Language require" })}
                  defaultValue={data_book.language||""}
                  className={errors.language ? "border-red-200" : ""}
                  placeholder="Indonesia"
                />
                {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language.message}</p>}
              </label>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">Year Publish</span>
                <Input
                  {...register("year_publish", { required: "Year publish require" })}
                  defaultValue={data_book.year_publish||""}
                  className={errors.year_publish ? "border-red-200" : ""}
                  placeholder="2026"
                />
                {errors.year_publish && <p className="text-red-500 text-sm mt-1">{errors.year_publish.message}</p>}
              </label>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">Total Page</span>
                <Input
                  {...register("total_page", { required: "Total page require" })}
                  defaultValue={data_book.total_page||""}
                  className={errors.total_page ? "border-red-200" : ""}
                  type="number"
                  placeholder="3"
                />
                {errors.total_page && <p className="text-red-500 text-sm mt-1">{errors.total_page.message}</p>}
              </label>
              <label className="w-full block mb-2">
                <span className="w-full block text-sm text-neutral-500 mb-1">URL Page</span>
                <Input
                  {...register("url_page", { required: "URL page require" })}
                  defaultValue={data_book.url_page||""}
                  className={errors.url_page ? "border-red-200" : ""}
                  type="text"
                  placeholder="https://e-book.com/book/1234"
                />
                {errors.url_page && <p className="text-red-500 text-sm mt-1">{errors.url_page.message}</p>}
              </label>
              <Button className="mt-3.5 cursor-pointer" type="submit">
                <span>{isLoading? "Loading..." : "Edit A Book"}</span>
                <BookIcon />
              </Button>
            </form>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  </>
}