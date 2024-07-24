import {
    type MRT_RowData,
    MRT_TableOptions,
} from 'mantine-react-table'
import {MRT_Localization_RU} from 'mantine-react-table/locales/ru/index.cjs'
import {Group, Text} from '@mantine/core'
import {IconAlertTriangle} from '@tabler/icons-react'
import React from 'react'

//дефолтные пропсы для MRT
const getDefaultOptions = <TData extends MRT_RowData>(): Partial<
    MRT_TableOptions<TData>
> => ({
    localization: MRT_Localization_RU,
    initialState: {
        density: 'xs',
    },
    layoutMode: 'grid',
    defaultColumn: {
        size: 150,
    },
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableTableFooter: false,
    mantineTableProps: {
        withRowBorders: true, //нижняя граница строк
        // withColumnBorders: true
    },

    //Вся таблица
    mantinePaperProps: {
        shadow: 'none', //без тени
        radius: 0, //без скругления
        withBorder: false, //без границы
        //для заполнения таблицы на всю высоту
        style: {
            flex: '1 1 100px',
            display: 'flex',
            flexDirection: 'column',
        }
    },
    //Табличная часть со строками
    mantineTableContainerProps: {
        //для заполнения таблицы на всю высоту
        style: {
            flexGrow: 1,
        }
    },
    //Ячейка
    mantineTableBodyCellProps: {
        style: {
            display: 'inline-block' //для корректного text-overflow с многоточием
        }
    },
    //Окно редактирования
    mantineEditRowModalProps: {
        title: 'Редактировать данные',
        withCloseButton: true,
        centered: true
    },
    //Вывод ошибки получения данных (над таблицей)
    mantineToolbarAlertBannerProps: {
        color: 'red',
        children: <Group><IconAlertTriangle stroke={1.5}/><Text size={'sm'}>Ошибка получения
            данных</Text></Group>,
    },
    //Верхний toolbar
    mantineTopToolbarProps: {
        style: {
            alignItems: 'center',
        }
    },
    //Нижний toolbar
    mantineBottomToolbarProps: {
        style: {
            alignItems: 'center',
        }
    },
})

export default getDefaultOptions
