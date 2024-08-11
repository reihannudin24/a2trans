import { HeaderRent } from "../component/Banner.Component";
import { RentContentComponent } from "../component/Rent.Component";


// const rent = [
//     {
//         "id" : "1",
//         "name" : "Rental Mobil",
//         "quantity" : "3",
//     },
//     {
//         "id" : "2",
//         "name" : "Travel",
//         "quantity" : "4",
//     },
// ]

function Rent() {
    return (
        <>
            <section className={"w-full"}>
                <div className={"w-full"}>
                    <HeaderRent />
                    <RentContentComponent />
                </div>
            </section>
        </>
    )
}


export default Rent