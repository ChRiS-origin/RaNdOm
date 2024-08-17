<script>
    function toggle() {
        window.document.body.classList.toggle('dark-mode');
        window.document.getElementById('dark-random-icon')?.toggleAttribute('hidden');
        window.document.getElementById('light-random-icon')?.toggleAttribute('hidden');
    }
</script>

<input type="checkbox" id="darkmode-toggle" on:click={toggle}>
    <label for="darkmode-toggle">
        <svg class="moon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z"/>
        </svg>
        <svg class="sun" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q67 0 113.5-46.5T640-480q0-67-46.5-113.5T480-640q-67 0-113.5 46.5T320-480q0 67 46.5 113.5T480-320Zm0-160Z"/>
        </svg>
</label> 

<style> 
    label{
        width: 50px;
        height: 22px;
        position: relative;
        margin-top: -70px;
        margin-left: 50px;
        display: block;
        background: #ebebeb;
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: 0.3s;
    }
    
    label:after{
        content: "";
        width: 19px;
        height: 19px;
        position: absolute;
        top: 1.5px;
        left: 1.5px;
        background: linear-gradient(180deg,#ffcc89,#754804);
        border-radius: 180px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
    }

    input{
        width: 0;
        height: 0;
        visibility: hidden;
    }

    input:checked + label{
        background-color: #242424;
    }
    input:checked + label:after{
        left: 39px;
        transform: translateX(-50%);
        background: linear-gradient(180deg,#777,#3a3a3a);
    }

    label:active:after{
        width: 32px;
    }
    
    label svg {
        position: absolute;
        width: 19px;
        top: -1px;
        z-index: 100;
        fill: #fff;
        transition: 0.3s;
    }

    label svg.sun {
        left: 1.3px;
        fill: #fff;
        transition: 0.3s;
    }

    label svg.moon {
        left: 30px;
        fill: #7e7e7e;
        transition: 0.3s;
    }

    input:checked + label svg.moon{
        fill: #fff;
    }
</style>