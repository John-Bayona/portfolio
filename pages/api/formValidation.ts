import type { NextApiRequest, NextApiResponse } from 'next'

const fields = {
    name: '^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$',
    phone: '[0-9+]{9}',
    mail: '^([a-zA-Z0-9_\\-.]+)@([a-zA-Z0-9_\\-.ñÑ]+).([a-zA-Z]{2,5})$',
    business: '.*',
    accepted: 'on',
    message: '.*',
}
type Fields = typeof fields[Field]
type Field = keyof typeof fields
export default function (req: NextApiRequest, res: NextApiResponse) {
    //If JS is not enable it will come as a string
    if (typeof req.body === 'string') {
        let jsonNames = req.body
            .split('\r\n')
            .filter((el: string) => el != '')
            .map((e: string) => e.split('='))
        if (jsonNames.length < 6) {
            return 'Error'
        }
        let jsonNames2 = jsonNames.filter((element) => {
            let [field, value] = element as [Field, string]
            let fieldValue = fields[field]
            return new RegExp(fieldValue).test(value) && [field, value]
        })
        if (jsonNames2.length < 6) return 'Error'
        return 'Send wherever'
    }
    //Else, the body will be an object containing our fields.
    let response = (Object.entries(req.body) as [Field, string][]).filter(
        ([key, value]) => {
            return new RegExp(fields[key]).test(value)
        }
    )
    if (response.length < 6) return 'Error'
    return 'Send wherever'
}
