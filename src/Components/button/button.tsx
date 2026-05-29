

export const Basebutton = (prop : {backgroundcolor : string, width : string, color : string, border : string}) => {
    return{
        textAlign: "center",
        backgroundColor: prop.backgroundcolor || "blue",
        border: "none",
        color: prop.color || "white",
        borderRadius: ".5rem",
    width: prop.width || "-webkit-fill-available",
    padding: "calc(var(--cardPadding)/3.35) calc(var(--cardPadding)/2)",
    fontSize: "1rem",
    cursor: "pointer",
    "@media screen and (max-width: 425px)": {
        width: "-webkit-fill-available",
    }
}
}