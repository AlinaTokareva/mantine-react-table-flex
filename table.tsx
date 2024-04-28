const table = useMantineReactTable({
        columns,
        data,
        localization: MRT_Localization_RU,
        enablePagination: false,
        enableStickyHeader: true,
        enableStickyFooter: true,
        enableTableFooter: false,
        //вся таблица
        mantinePaperProps: {
            style: {
                flex: '1 1 100px',
                display: 'flex',
                flexDirection: 'column',
            }
        },
        //табличная часть со строками
        mantineTableContainerProps: {
            style: {
                flexGrow: 1,
            }
        },
        layoutMode: 'grid'
    })

return <MantineReactTable table={table}/>
