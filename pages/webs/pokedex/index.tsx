import { useEffect, useState, type FC } from 'react'
import { Bulbasaur } from '~/pokedex/initialPokemon'
import PokemonDisplay from '~/pokedex/PokemonDisplay'
import DetailedPokemon from '~/pokedex/DetailedPokemon'
import ViewSelector from '~/pokedex/ViewSelector'
export type View = 'gallery' | 'list' | 'table'
type Props = { allPokemon: Bulbasaur[] }
const App = (props: Props) => {
    const [view, setView] = useState<View>('gallery')
    const stateUpdate = (view: View) => {
        setView(view)
    }
    const [selectedPokemon, setSelectedPokemon] = useState<string>(
        props.allPokemon[0].name
    )
    const detailedPokemon = (pokemon: string) => {
        setSelectedPokemon(pokemon)
    }

    return (
        <div className='absolute top-0 mt-[-4px]  w-auto bg-green-200'>
            <ViewSelector stateUpdate={stateUpdate} currentState={view} />
            <div className='flex flex-row'>
                <PokemonDisplay
                    allPokemon={props.allPokemon}
                    setSelectedPokemon={detailedPokemon}
                    currentState={view}
                />
                <DetailedPokemon selectedPokemon={selectedPokemon} />
            </div>
        </div>
    )
}

export default App

export async function getServerSideProps(context: any) {
    let allPokemon: Bulbasaur[] = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=150'
    )
        .then((response) => response.json())
        .then((data) => data.results)

    return { props: { allPokemon } }
}
