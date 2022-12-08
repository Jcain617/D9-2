
        function clr() {
            document.getElementById('screen').value='';
        }

        function solve() {
            let y = eval(document.getElementById('screen').value);
            document.getElementById('screen').value=y;
        }

        function number(n) {
            document.getElementById('screen').value+=n;
        }