import Http from "./Http"
import fetchMock from 'fetch-mock'

describe('Http', () => {
    describe('.get', () => {
        it('converts object keys to camel case', () => {
            fetchMock.get("*", [
                {some_snake_case: 'keys'},
                {one_more_for: 'good measure'}
            ])

            const camelizedKeys = [
                {someSnakeCase: 'keys'},
                {oneMoreFor: 'good measure'}
            ]


            Http.get("/foo").then((data) => {
                expect(data).toEqual(camelizedKeys)
            })

        })
    })
})