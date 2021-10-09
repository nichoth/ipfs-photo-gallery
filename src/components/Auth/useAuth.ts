import * as React from 'react'
import * as sdk from 'webnative'
import { AuthSucceeded, Continuation } from 'webnative'

export type AppPath = (path?: string | Array<string>) => string;

export function isAuthSucceeded(state: sdk.State | undefined): state is AuthSucceeded | Continuation {
    return state !== undefined &&
        (state.scenario === sdk.Scenario.AuthSucceeded ||
        state.scenario === sdk.Scenario.Continuation);
}

function useAuth() {
    const [state, setState] = React.useState<sdk.State>();

    React.useEffect(() => {
        async function fetchState() {
            try {
                // this throws
                // https://github.com/fission-suite/webnative/blob/main/src/index.ts#L107
                return await sdk.initialise({
                    permissions: {
                        app: {
                            name: 'Milione',
                            creator: 'awonderful.shop'
                        }
                    }
                })
                    .then(state => state !== undefined && setState(state))
                    .catch(err => {
                        console.log('aaa', err)
                        console.error(err)
                        throw err
                    });
            } catch (err) {
                console.log('bbb', err)
                console.error('fetchScenarioError', err)
            }
        }

        // this throws
        fetchState().then().catch(err => {
            console.log('aaa', err)
            console.error(err)
        })
    }, [])

    return {state};
}

export default useAuth;
