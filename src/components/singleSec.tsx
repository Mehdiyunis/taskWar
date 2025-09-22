import HomeCreateListPopup from "./homeCreateListPopup";
import HomePagePlusBtn from "./homePagePlusBtn";
import Lists from "./lists";

export default function SingleSec() {

    return (
        <section>
            <div className='custom-container py-4 h-full'>
                <HomePagePlusBtn />
                <HomeCreateListPopup />
                <Lists />
            </div>
        </section>
    )
}
