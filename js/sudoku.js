const grid = document.getElementById("grid");

for(let i = 1; i < 9; i++)
{
    for(let x = 1; x < 9; x++)
    {
        var item = document.createElement("div");
        //item.setAttribute("style", "grid-area:" + i + " / " + x + " / " + i + " / " + x);
        item.setAttribute("grid-column", x + " / span 1");
        item.setAttribute("grid-row", i + " / span 1");
        item.setAttribute("id", "grid-item");
        grid.appendChild(item);
    }
}