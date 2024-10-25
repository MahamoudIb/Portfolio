import { PropsWithChildren } from "react";
import Header from "./Header";

type LayoutProps = PropsWithChildren

export default function Layout(props: LayoutProps){
    const { children } = props;

    return (
        <>
            {children}
            <main></main>
        </>
    )
}