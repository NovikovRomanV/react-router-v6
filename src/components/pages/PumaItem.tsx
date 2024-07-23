import pumaModel1 from '../../assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg'
import pumaModel2 from '../../assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg'
import pumaModel3 from '../../assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg'
import {Link} from "react-router-dom";

export type PumaItemType = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const pumaArr: PumaItemType[] = [
    {
        id: 1,
        model: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaModel1,

    },
    {
        id: 2,
        model: 'PUMA ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id: 3,
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: pumaModel3
    }
]

export const PumaItem = () => {
    return (
        <div style={{display: "flex", justifyContent: 'center'}}>
            {pumaArr.map((puma) =>
                <Link to={`/puma/${puma.id}`}  key={puma.id}>
                    <img
                        alt={puma.model}
                        src={puma.picture}
                        style={{blockSize: '255px', marginLeft: '10px'}}
                    />
                </Link>
            )}
        </div>
    )
}