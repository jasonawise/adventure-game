export default function ScreenWrapper({ children }: any): JSX.Element {
  // todo may add context api and reducer in this file later as needed
  return (
    <div className="border border-black w-11/12 mx-auto p-4">{children}</div>
  )
}
