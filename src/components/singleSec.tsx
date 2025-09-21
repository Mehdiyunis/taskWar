import HomeCreateListPopup from "./homeCreateListPopup";
import HomePagePlusBtn from "./homePagePlusBtn";

export default function SingleSec() {

    return (
        <section>
            <div className='custom-container py-4'>
                <HomePagePlusBtn />
                <HomeCreateListPopup />
            </div>
        </section>
    )
}
