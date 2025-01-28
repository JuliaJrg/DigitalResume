import Head from "next/head";

const CustomHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <meta name="description" content="Julia Jorge portfolio" />
        </Head>
    )
}

export default CustomHead;

CustomHead.defaultProps = {
    title: "Julia Jorge - Portfolio"
}