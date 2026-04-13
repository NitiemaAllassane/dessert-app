import DessertCard from "./components/DessertCard";
import Cart from "./components/Cart";


function App() {
    return (
        <main className="bg-rose-50 min-h-dvh py-12">
            <div className="container flex gap-8">
                <div className="list">
                    <h1 className="text-4xl font-bold mb-6">Desserts</h1>
                    <div className="grid grid-cols-3 gap-6">
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