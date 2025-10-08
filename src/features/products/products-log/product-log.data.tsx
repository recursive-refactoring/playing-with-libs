export const productLogListColumnsDynamic = () => {
  return [
    {
      id: "_id",
      accessorKey: "id",
      header: "ID",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "product_name",
      accessorKey: "product_name",
      header: "Product Name",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "section",
      accessorKey: "section",
      header: "Section",
      cell: (info: any) => info?.getValue(),
    },
    {
      id: "description",
      accessorKey: "Description",
      header: "Description",
      cell: (info: any) => info?.getValue(),
    },
  ];
};

export const productLogListDataDynamic = [
  {
    _id: 1,
    product_name: "11",
    section: "23213",
    description: "111",
  },
];
