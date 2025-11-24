import {Filters} from './Filters.jsx';

export function Header({onChange}){
    return(<header>
        <h1>Shopping with React </h1>
        <Filters onChange={onChange}/>
    </header>)
}