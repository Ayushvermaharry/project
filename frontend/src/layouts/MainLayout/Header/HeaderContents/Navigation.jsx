import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navigation() {
  const navigation = [
    {
      menuTitle: "Products",
      subMenu: [
        { subMenuTitle: "All Products", to: "/products" },
        { subMenuTitle: "Add New Product", to: "/addNewProduct" },
        { subMenuTitle: "Product List", to: "/newProductList" },
        { subMenuTitle: "Wish list", to: "/wishlist" },
      ],
    },
    {
      menuTitle: "Order",
      subMenu: [
        { subMenuTitle: "Create New Order", to: "/createNewOrder" },
        { subMenuTitle: "Order Raw Material", to: "/rawMaterialView" },
        { subMenuTitle: "Order List", to: "/orderList" },
      ],
    },
    {
      menuTitle: "Vendor",
      subMenu: [
        { subMenuTitle: "Create New Vendor", to: "/newVendor" },
        { subMenuTitle: "Vendor List", to: "/vendorList" },
        // { subMenuTitle: "Vendor Update Page", to: "/updateVendor" },
      ],
    },
  ];

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }

  return (
    <>
      <div className="absolute w-full px-4 mx-auto bg-white shadow-lg sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline ml-4 space-x-4">
                <NavLink
                  key="Home"
                  to="/home"
                  // activeClassName="active"
                  // className={classNames(
                  //   item.current
                  //     ? "bg-[#BF2604] text-white"
                  //     : "text-gray-800 hover: hover:bg-[#F24F13]",
                  //   "px-3 py-2 rounded-md text-sm font-medium"
                  // )}
                  // aria-current={item.current ? "page" : undefined}
                >
                  Home
                </NavLink>
                {navigation.map((item, index) => (
                  <>
                    <Dropdown
                      key={item + index}
                      title={item.menuTitle}
                      subMenu={item.subMenu}
                    ></Dropdown>

                    {/* <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-[#BF2604] text-white"
                          : "text-gray-800 hover: hover:bg-[#F24F13]",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link> */}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
