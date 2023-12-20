< !DOCTYPE html >
    <html>

        <body>

            <h1>Regular Function</h1>

            <p>The <strong>this</strong> keyword represents different objects depending on how the function was called.</p>

            <button id="btn">Click Me!</button>

            <p><strong>this</strong> represents:</p>

            <p id="demo"></p>

            <p>See the difference before and after the button is clicked.</p>

            <script>
                class Header {
                    constructor() {
                    this.color = "Red";
  }

                changeColor = function() {
                    document.getElementById("demo").innerHTML += this;
  }
}

                const myheader = new Header();

                //The window object calls the function:
                window.addEventListener("load", myheader.changeColor);

                //A button object calls the function:
                document.getElementById("btn").addEventListener("click", myheader.changeColor);

            </script>

        </body>
    </html>
