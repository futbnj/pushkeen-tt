import {AboutUs} from "./AboutUs/AboutUs";
import {Bubbles} from "./Bubbles/Bubbles";
import {Artworks} from "./Artworks/Artworks";
import {Parallax} from "../components/Parallax/Parallax";

export const Layout = () => {
    return (
        <>
            <AboutUs />
            <Parallax />
            <Artworks/>
        </>
    )
}