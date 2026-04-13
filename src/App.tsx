import DessertCard from "./components/DessertCard";
import Cart from "./components/Cart";


function App() {
    return (
        <main className="bg-(--rose-100) min-h-dvh py-12">
            <div className="container flex flex-col lg:flex-row gap-8">
                <div className="list">
                    <h1 className="text-4xl font-bold mb-6">Desserts</h1>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 sm:gap-6">
                        <DessertCard  
                            image={{
                                mobile: "/assets/images/image-baklava-mobile.jpg",
                                tablet: "/assets/images/image-baklava-tablet.jpg",
                                desktop: "/assets/images/image-baklava-desktop.jpg",
                            }}
                            category="Waffle"
                            name="Waffle with Berries"
                            price={12}
                        />

                        <DessertCard  
                            image={{
                                mobile: "/public/assets/images/image-baklava-mobile.jpg",
                                tablet: "/public/assets/images/image-baklava-tablet.jpg",
                                desktop: "/public/assets/images/image-baklava-desktop.jpg",
                            }}
                            category="Waffle"
                            name="Waffle with Berries"
                            price={12}
                        />

                        <DessertCard  
                            image={{
                                mobile: "/public/assets/images/image-baklava-mobile.jpg",
                                tablet: "/public/assets/images/image-baklava-tablet.jpg",
                                desktop: "/public/assets/images/image-baklava-desktop.jpg",
                            }}
                            category="Waffle"
                            name="Waffle with Berries"
                            price={12}
                        />
                    </div>
                </div>
                <div className="basket">
                    <Cart  />
                </div>
            </div>
        </main>
    )
}

export default App;