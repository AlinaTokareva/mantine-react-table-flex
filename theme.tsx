'use client'
import {
    Overlay,
    createTheme,
    MantineColorsTuple, Modal
} from '@mantine/core'
import {DateInput, DateTimePicker} from '@mantine/dates'

const themeColor: MantineColorsTuple = [
    '#f5fcea',
    '#e9f6d9',
    '#d3ebb1',
    '#b9df87',
    '#a5d663',
    '#97d04c',
    '#91ce3f',
    '#7cb631',
    '#6da128',
    '#5c8c1c'
]

const theme = createTheme({
    primaryColor: 'lime',
    colors: {
        'lime': themeColor
    },
    components: {
        Overlay: Overlay.extend({
            defaultProps: {
                blur: 5,
                backgroundOpacity: 0.3
            }
        }),
        DateInput: DateInput.extend({
            defaultProps: {
                valueFormat: 'DD.MM.YYYY'
            }
        }),
        DateTimePicker: DateTimePicker.extend({
            defaultProps: {
                valueFormat: 'DD.MM.YYYY HH:mm'
            }
        }),
        Modal: Modal.extend({
            defaultProps: {
              closeOnClickOutside: false
            },
            styles: {
                title: {
                    fontWeight: 700
                }
            }
        }),
    }
})

export default theme
