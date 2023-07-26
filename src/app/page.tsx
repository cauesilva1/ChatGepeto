import ChatGpeto from "@/components/chat"


export default function Home() {
  return (
    <>
    <div className='h-screen w-screen flex justify-center items-center bg bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600'>
        <ChatGpeto />
    </div>
    </>
  )
}
