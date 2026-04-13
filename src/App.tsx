import DessertCard from "./components/DessertCard";
import Cart from "./components/Cart";
// import ConfirmationModal from "./components/ConfirmationModal";
import data from '../data.json';


function App() {
    return (
        <main className="relative bg-(--rose-100) min-h-dvh py-12">
            <div className="container flex flex-col lg:flex-row gap-8">
                <div className="list">
                    <h1 className="text-4xl font-bold mb-6">Desserts</h1>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 sm:gap-6">
                        {data.map((dessert) => (
                            <DessertCard  
                            image={{
                                mobile: dessert.image.mobile,
                                tablet: dessert.image.tablet,
                                desktop: dessert.image.desktop,
                            }}
                            category={dessert.category}
                            name={dessert.name}
                            price={dessert.price}
                        />
                        ))}
                    </div>
                </div>
                <div className="basket">
                    <Cart  />
                </div>
            </div>

            {/* <ConfirmationModal  /> */}
        </main>
    )
}

export default App;