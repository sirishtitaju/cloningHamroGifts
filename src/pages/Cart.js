import CustomizedTables from "../components/table"
import IconBreadcrumbs from "../components/breadcrimb"
export default function Cart() {
  return (
    <>
      <div className="cartWrapper">
        <IconBreadcrumbs />
        <h1 className="mt-section">Your Cart</h1>
        <div className="tableWrapper">
          <CustomizedTables />
          {/* <h2 className="mt-section font-light">Cart is Empty 😕</h2> */}
        </div>
      </div>
    </>
  )
}
