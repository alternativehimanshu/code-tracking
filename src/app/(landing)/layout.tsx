interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row p-6 min-h-screen gap-2 bg-[#232323]">
      {/* <div className="rounded-xl w-[60px] "></div> */}
      <div className=" rounded-2xl flex-1  shadow-lg bg-white overflow-hidden">
        <div className="overflow-y-auto h-full ">{children}</div>
      </div>
    </div>
  )
}
