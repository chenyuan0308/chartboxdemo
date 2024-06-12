import { useMemo } from "react";
import TableItem from "./components/tableItem";
export default function DetailTwo() {
  const dimensions = useMemo(() => {
    return [
      {
        label: "Assembled Depth (in.)",
        value: "51.00 in",
      },
      {
        label: "Assembled Width (in.)",
        value: "24.75 in",
      },
      {
        label: "Assembled Height (in.)",
        value: "46.00 in",
      },
    ];
  }, []);
  const details = useMemo(() => {
    return [
      {
        label: "Accessories Included",
        value: "No Additionaems Included",
      },
      {
        label: "Assembly Required",
        value: "Yes",
      },
      {
        label: "Burner Material",
        value: "Stainless Steel",
      },
      {
        label: "Burner Warranty",
        value: "5 Years",
      },
      {
        label: "Color",
        value: "Stainless Steel",
      },
      {
        label: "Fits No. of Burgers",
        value: "31",
      },
      {
        label: "Front/Side Shelf",
        value: "Fixed",
      },
      {
        label: "Grill Color Family",
        value: "Stainless Steel",
      },
      {
        label: "Grill Grate/Surface Materia",
        value: "Stainless Steel",
      },
      {
        label: "Grill Material",
        value: "Stainless Steel",
      },
    ];
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold">Specifications</h1>
      <div className="mt-2 pb-4" style={{ borderBottom: "3px solid #ccc" }}>
        Dimensions: H 46.00 in, W 24.75 in, D 51.00 in
      </div>
      <h1 className="text-2xl font-bold mt-16">Dimensions</h1>
      <div className="flex flex-wrap w-[100%]">
        {dimensions.map((i) => (
          <TableItem item={i} />
        ))}
      </div>
      <h1 className="text-2xl font-bold mt-16">Details</h1>
      <div className="flex flex-wrap w-[100%]">
        {details.map((i) => (
          <TableItem item={i} />
        ))}
      </div>
    </>
  );
}
